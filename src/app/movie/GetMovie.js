"use client"
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const GetMovie = () => {
  const [movies, setMovies] = useState([]);
  const getMovieData = async () => {
    const API_KEY = process.env.API_KEY;
    const response = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=e6dd65d1&s=harry+potter&page=1`
    );
    const data = await response.json();
    console.info(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    getMovieData();
  }, []);
  return (
    <div>
      <ul className="flex flex-wrap gap-4 items-center">
        {movies.map((currentMovie) => {
          return (
            <MovieCard key={currentMovie.imdbID} currentMovie={currentMovie}></MovieCard>
          );
        })}
      </ul>
    </div>
  );
};

export default GetMovie;
