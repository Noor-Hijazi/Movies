import { useState, useEffect } from "react";
import MovieList from "./MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const API_KEY = "d7835d06aa9bf95f73ab15509e7dc769";
const API_URL = "https://api.themoviedb.org/3/search/movie?api_key=" + API_KEY + "&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("mission impossible");

  useEffect(() => {
    fetchMovies(query);
  }, []);

  const fetchMovies = async (query) => {
    const response = await fetch(API_URL + query);
    const data = await response.json();
    setMovies(data.results || []);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies(query);
  };

  return (
    <div className="container bg-dark text-white py-4 min-vh-100">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold">MovieDb App</h1>
        <form onSubmit={handleSearch} className="d-flex">
          <input
            type="text"
            placeholder="Movie Search"
            //  value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="form-control me-2"
          />
          <button type="submit" className="btn btn-primary">Search</button>
        </form>
      </header>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;