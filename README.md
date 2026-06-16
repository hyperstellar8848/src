## 📝 Project Description

In this exercise, you build a full-featured movie exploration app where users can:

- Browse a list of movies fetched from a **fake API**
- Search movies by name and filter by genre
- View detailed information about each movie
- Add/remove movies to/from their personal **Watchlist**
- Access the Watchlist only after logging in (Protected Route)

The main focus of this series is on concepts not covered in previous exercises:
- `React Query` for server state management
- `useContext` for global state (Watchlist + Auth)
- `useRef` for DOM manipulation (auto-focus)
- `useParams` for dynamic routing
- `useMemo`, `useCallback`, and `React.memo` for performance optimization
- Protected Routes

---

## ✨ Features

### 1. Movie Explorer Page (`/`)
- Movies loaded via `useQuery` from Fake API (with simulated network delay)
- Search by movie title (auto-focus after adding to watchlist)
- Genre filtering (`action`, `comedy`, `crime`, `drama`, `sci-fi`)
- Add to Watchlist with temporary success message
- Responsive movie cards with details button

### 2. Movie Details Page (`/movie/:id`)
- Dynamic route using `useParams`
- Fetch single movie details with `useQuery`
- Add/Remove from watchlist
- Redirect to watchlist after removal

### 3. Watchlist Page (`/watchlist`) — **Protected**
- Only accessible after login
- Filter movies by name
- Remove movies
- Optimized with `React.memo` + `useCallback`

### 4. Login Page (`/login`)
- Simple fake authentication (`admin` / `1234`)
- Controlled form with auto-focus on error

### 5. 404 Page
- Friendly "Page Not Found" with return button

### Additional Features
- **Loading**, **Error**, and **Empty** states handled elegantly
- **ProtectedRoute** component
- Global state management with Context API
- Navigation with React Router

---

## 🛠 Technologies & Concepts Used

- **React 18**
- **React Router DOM** (v6)
- **@tanstack/react-query** — Server state management
- **Context API** — Watchlist & Authentication
- **React Hooks**: `useMemo`, `useCallback`, `useRef`, `useParams`, `useNavigate`
- **React.memo** — Performance optimization
- **Tailwind CSS** (optional but recommended for bonus points)
- Fake API with `Promise` + `setTimeout`

---

## 📁 Project Structure

```bash
src/
├── api/
│   └── fakeApi.js          # Fake movie data + API functions
├── context/
│   ├── WatchlistContext.jsx
│   └── AuthContext.jsx
├── components/
│   ├── Navbar.jsx
│   ├── MovieCard.jsx
│   ├── WatchlistItem.jsx
│   └── ProtectedRoute.jsx
├── pages/
│   ├── Home.jsx            # Movie Explorer
│   ├── MovieDetails.jsx
│   ├── Watchlist.jsx
│   └── Login.jsx
├── App.jsx
└── main.jsx
```
