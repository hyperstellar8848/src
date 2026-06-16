import React, { useState, useMemo, useRef, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../api/moviesApi";
import { useWatchlist } from "../context/WatchlistContext";
import MovieCard from "../components/MovieCard";

function Explore() {
  const { addMovie, isInWatchlist } = useWatchlist();
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("همه");
  const [showToast, setShowToast] = useState(false);
  const searchInputRef = useRef(null);
  const { data: movies, isLoading, isError } = useQuery({
    queryKey: ["movies"], 
    queryFn: fetchMovies,  
  });

  const genres = ["همه", "sci-fi", "comedy", "action", "drama", "crime"];

  const filteredMovies = useMemo(() => {
    if (!movies) return [];
    return movies.filter((movie) => {
      const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = selectedGenre === "همه" || movie.genre === selectedGenre;
      return matchesSearch && matchesGenre; 
    });
  }, [movies, searchTerm, selectedGenre]);

  const handleAddWatchlist = useCallback((movie) => {
    addMovie(movie); 
    setShowToast(true);
    
    setTimeout(() => {
      setShowToast(false);
    }, 2000);

    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [addMovie]);

  if (isLoading) return <div style={{ padding: "20px", textRight: "center" }}>... در حال بارگذاری لیست فیلم‌ها</div>;
  
  if (isError) return <div style={{ padding: "20px", color: "red" }}>خطا در دریافت اطلاعات فیلم‌ها از API</div>;

  return (
    <div style={{ padding: "20px" }}>
      {showToast && (
        <div style={{ backgroundColor: "#ffeb3b", padding: "10px", marginBottom: "15px", borderRadius: "4px", fontWeight: "bold" }}>
          فیلم به واچ لیست اضافه شد! (پیام موقت ۲ ثانیه‌ای)
        </div>
      )}
      <div style={{ marginBottom: "20px" }}>
        <input
          ref={searchInputRef} 
          type="text"
          placeholder="جستجو بر اساس نام فیلم..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoFocus 
          style={{ padding: "10px", width: "100%", maxWidth: "400px", fontSize: "16px" }}
        />
      </div>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            style={{
              padding: "8px 15px",
              cursor: "pointer",
              backgroundColor: selectedGenre === genre ? "#ffeb3b" : "#eee",
              border: "1px solid #ccc",
              borderRadius: "4px"
            }}
          >
            {genre}
          </button>
        ))}
      </div>

      <p style={{ fontWeight: "bold" }}>
        نمایش {filteredMovies.length} فیلم از {movies?.length} فیلم موجود
      </p>

      {filteredMovies.length === 0 ? (
        <div style={{ padding: "20px", fontStyle: "italic", color: "#666" }}>هیچ فیلمی پیدا نشد.</div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {filteredMovies.map((movie) => {
            const added = isInWatchlist(movie.id);
            return (
              <MovieCard
                key={movie.id}
                movie={movie}
                onAction={handleAddWatchlist}
                actionLabel={added ? "در لیست" : "افزودن"}
                isInWatchlistPage={false}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Explore;