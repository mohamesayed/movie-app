import "./App.css";
import NavBar from "./components/navBar/NavBar";
import axios from "axios";
import { useState, useEffect } from "react";
import MovieList from "./components/movie list/MovieList";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./components/movie details/MovieDetails";

function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Get All Movies
  const getMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=704e2fc65e0a6a2108352d2a56772002`
    );
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
    console.log(res.data.results);
  };
  useEffect(() => {
    getMovies();
  }, []);

  //  Search On Movies

  const search = async (word) => {
    if (word === "") {
      console.log(res.data.results);
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=704e2fc65e0a6a2108352d2a56772002&language=ar&query=${word}&include_adult=false`
      );
      setMovies(res.data.results);
      setPageCount(res.data.total_pages);
    }
  };

  //  Get Current Page

  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=704e2fc65e0a6a2108352d2a56772002&page=${page}`
    );
    setMovies(res.data.results);
  };

  return (
    <>
      <NavBar search={search} />
      <Routes>
        <Route
          path="/"
          element={
            <MovieList
              movies={movies}
              getPage={getPage}
              pageCount={pageCount}
            />
          }
        />

        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
