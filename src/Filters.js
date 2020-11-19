import React from "react";
import MovieContext from "./MovieContext";

function Filters() {
  const { filter, setFilter } = React.useContext(MovieContext);

  return (
    <div className="movies__listing-filter">
      <label
        htmlFor="filter_movies"
        style={{ display: "block", marginBottom: "5px" }}
      >
        Filter movies
      </label>
      <input
        name="filter"
        id="filter_movies"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}

export default Filters;
