import React from "react";
import useMoviesList from "../utils/Hooks/useMovieList";
import { useSelector } from "react-redux";
import PrimaryVideoList from "./PrimaryVideoList";
import SecondaryVideoList from "./SecondaryVideoList";
import usePopularMovies from "../utils/Hooks/usePopularMovies";
import useTopRatedMovies from "../utils/Hooks/useTopRatedMovies";

const MovieContainer = () => {
  const movieList = useSelector((state) => state.movie.movieList);
  useMoviesList();
  usePopularMovies();
  useTopRatedMovies();
  if (!movieList) return;
  const mainVideo = movieList[0];
  return (
    <>
      <PrimaryVideoList mainVideo={mainVideo} />
      <SecondaryVideoList />
    </>
  );
};

export default MovieContainer;
