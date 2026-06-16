import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useWatchlist } from "../context/WatchlistContext";

function Navbar() {
  const { isLoggedIn, user, logout } = useAuth();
  const { count } = useWatchlist();

  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: "1rem", borderBottom: "1px solid #ccc", alignItems: "center" }}>
      <h2>Movie Explorer</h2>
      <nav style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <NavLink to="/" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}>
          کاوش
        </NavLink>
        
        <NavLink to="/watchlist" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}>
          واچ لیست ({count})
        </NavLink>

        {isLoggedIn ? (
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <span style={{ color: "green" }}>کاربر: {user}</span>
            <button onClick={logout} style={{ padding: "3px 8px" }}>خروج</button>
          </div>
        ) : (
          <NavLink to="/login" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}>
            admin
          </NavLink>
        )}
      </nav>
    </header>
  );
}

export default Navbar;