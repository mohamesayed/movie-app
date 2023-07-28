import React from "react";
import MovieCard from "../movie card/MovieCard";
import Pagination from "../pagination/Pagination";
import "./MovieList.css";

function MovieList({ movies, getPage, pageCount }) {
  return (
    <>
      <div className="posters" style={{ display: "flex", flexWrap: "wrap" }}>
        {movies.map((mov) => {
          return <MovieCard key={mov.id} mov={mov} />;
        })}
      </div>

      {movies.length >= 1 ? (
        <Pagination pageCount={pageCount} getPage={getPage} />
      ) : null}
    </>
  );
}

export default MovieList;
