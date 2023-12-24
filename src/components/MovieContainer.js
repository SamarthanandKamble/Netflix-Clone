import React from "react";
import useMoviesList from "../utils/Hooks/useMovieList";
import { useSelector } from "react-redux";
import PrimaryVideoList from "./PrimaryVideoList";
import SecondaryVideoList from "./SecondaryVideoList";
import usePopularMovies from "../utils/Hooks/usePopularMovies";
import useTopRatedMovies from "../utils/Hooks/useTopRatedMovies";
import PosterPageContainer from "./PosterPageContainer";

const MovieContainer = () => {
  const movieList = useSelector((state) => state.movie.movieList);
  const posterToggle = useSelector((state) => state.youtube?.posterOpen);

  useMoviesList();
  usePopularMovies();
  useTopRatedMovies();
  if (!movieList) return;
  const mainVideo = movieList[1];
  return (
    <>
      <PrimaryVideoList mainVideo={mainVideo} />
      <SecondaryVideoList />
    </>
  );
};

export default MovieContainer;
