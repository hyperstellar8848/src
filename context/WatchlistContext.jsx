import React, { createContext, useState, useContext } from "react";

const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  const addMovie = (movieObj) => {
    setWatchlist((prev) => {
      if (prev.some((m) => m.id === movieObj.id)) return prev;
      return [...prev, movieObj]; 
    });
  };

  const removeMovie = (movieId) => {
    setWatchlist((prev) => prev.filter((m) => m.id !== movieId));
  };

  const isInWatchlist = (movieId) => {
    return watchlist.some((m) => m.id === movieId);
  };

  const count = watchlist.length;

  return (
    <WatchlistContext.Provider value={{ watchlist, addMovie, removeMovie, isInWatchlist, count }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => useContext(WatchlistContext);