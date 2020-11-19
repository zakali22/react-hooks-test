import React from "react";
import MovieContext from "./MovieContext";

function MoviesListing() {
  const { filter, movies } = React.useContext(MovieContext);

  return (
    <ul className="movies__listing-movies">
      {movies
        .filter((movie) =>
          movie.title.toLowerCase().includes(filter.toLowerCase())
        )
        .map((movie, id) => (
          <li key={id}>
            <img src={movie.poster_path} alt={`${movie.title}`} />
            <p>{movie.title}</p>
          </li>
        ))}
    </ul>
  );
}

export default MoviesListing;
