import "./App.css";

import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import FilterBar from "./components/FilterBar/FilterBar";
import MovieCard from "./components/MovieCard/MovieCard";
import Footer from "./components/Footer/Footer";

import { getPopularMovies } from "./apis/movie";

function App() {
  const [movies, setMovies] = useState([]);

  const wishList = [
    "The Maze Runner 1",
    "The Maze Runner 2",
    "The Maze Runner 3",
    "The Incredibles",
    "Superman Returns",
    "The Matrix",
  ];

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getPopularMovies();

      setMovies(data.results);
    };

    fetchMovies();
  }, []);

  return (
    <div className="page">
      <Header />

      <FilterBar />

      <div className="main-layout">
        <main className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </main>

        <aside className="wish-list">
          <h2>My Wish List</h2>

          {wishList.map((movie, index) => (
            <div key={index} className="wish-item">
              {movie}
            </div>
          ))}
        </aside>
      </div>

      <Footer />
    </div>
  );
}

export default App;