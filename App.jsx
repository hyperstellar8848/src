import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WatchlistProvider } from "./context/WatchlistContext";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Explore from "./pages/Explore";
import MovieDetails from "./pages/MovieDetails";
import Watchlist from "./pages/Watchlist";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <WatchlistProvider>
          <Router>
            <Navbar />
            <main style={{ maxWidth: "800px", margin: "0 auto", direction: "rtl", fontFamily: "sans-serif" }}>
              <Routes>
                <Route path="/" element={<Explore />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                
                <Route 
                  path="/watchlist" 
                  element={
                    <ProtectedRoute>
                      <Watchlist />
                    </ProtectedRoute>
                  } 
                />
                
                <Route path="/login" element={<Login />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </Router>
        </WatchlistProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;