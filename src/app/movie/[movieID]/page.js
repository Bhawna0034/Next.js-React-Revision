"use client"
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieID } =  useParams();
  const API_KEY = process.env.API_KEY;

  const getMovieDetails = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${movieID}&apikey=${API_KEY}&s=harry+potter&page=1`
      );
      const data = await response.json();
      setMovieDetails(data);
    } catch (error) {
      console.error("Failed to fetch Movie Details: ", error.message);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, []);


  return (
    <div>
        Movie Details {movieID}
    </div>
  )
};

export default MovieDetails;
