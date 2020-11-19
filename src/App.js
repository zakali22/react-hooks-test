import React from "react";
import "./styles.css";
import MoviesListing from "./MoviesListing";
import Filters from "./Filters";
import MovieContext from "./MovieContext";

const API_KEY = "ac4352125d65ab6c723bf2cc7119060c";
const MOVIE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`;

export default function App() {
  const [filter, setFilter] = React.useState("");
  const [movies, setMovies] = React.useState([]);

  const fetchMovies = async () => {
    try {
      const res = await fetch(MOVIE_URL);
      const moviesData = await res.json();
      // console.log(moviesData.results);
      // setMovies(moviesData.results);

      const movies = moviesData.results.map((movie) => {
        return {
          ...movie,
          backdrop_path: `https://image.tmdb.org/t/p/w300${movie.backdrop_path}`,
          poster_path: `https://image.tmdb.org/t/p/w300${movie.poster_path}`
        };
      });

      setMovies(movies);
    } catch (e) {
      console.error(e);
    }
  };

  React.useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <MovieContext.Provider value={{ filter, setFilter, movies }}>
      <div className="movies__listing">
        <Filters />
        <MoviesListing />
      </div>
    </MovieContext.Provider>
  );
}
