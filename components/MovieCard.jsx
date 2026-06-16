import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = React.memo(({ movie, onAction, actionLabel, isInWatchlistPage }) => {
  const navigate = useNavigate();

  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px", margin: "10px 0", backgroundColor: "#f9f9f9" }}>
      <h3>{movie.title}</h3>
      <p>امتیاز: {movie.rating} | سال تولید: {movie.year}</p>
      <p>ژانر: {movie.genre}</p>
      
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <button onClick={() => navigate(`/movie/${movie.id}`)} style={{ padding: "5px 10px" }}>
          جزئیات
        </button>

        <button 
          onClick={() => onAction(movie)} 
          style={{ padding: "5px 10px", backgroundColor: actionLabel === "در لیست" ? "#e0e0e0" : "#4CAF50", color: actionLabel === "در لیست" ? "#333" : "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
          disabled={actionLabel === "در لیست"} 
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
});

MovieCard.displayName = "MovieCard";

export default MovieCard;