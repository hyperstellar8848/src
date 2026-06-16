import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const usernameRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const success = login(username, password);

    if (success) {
      setError(false);
      navigate("/watchlist", { replace: true }); 
    } else {
      setError(true); 
      if (usernameRef.current) {
        usernameRef.current.focus();
      }
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "40px auto", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h3>ورود به سیستم</h3>
      
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "15px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>نام کاربری (admin):</label>
          <input
            ref={usernameRef} 
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>رمز عبور (1234):</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        {error && (
          <div style={{ color: "red", fontSize: "14px", fontWeight: "bold" }}>
            نام کاربری یا رمز اشتباه است. (فوکوس به فیلد اول بازگشت)
          </div>
        )}

        <button type="submit" style={{ padding: "10px", backgroundColor: "#4CAF50", color: "white", border: "none", cursor: "pointer", borderRadius: "4px" }}>
          ورود
        </button>
      </form>
    </div>
  );
}

export default Login;