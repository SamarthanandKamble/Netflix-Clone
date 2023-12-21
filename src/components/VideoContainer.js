import React from "react";
import MainVideo from "./MainVideo";
import VideoList from "./VideoList";
import useMoviesList from "../utils/Hooks/useMovieList";
import { useSelector } from "react-redux";
const VideoContainer = () => {
  const movieList = useSelector((state) => state.movie.movieList);
  useMoviesList();
  if (!movieList) return;
  const mainVideo = movieList[2];
  return (
    <>
      <MainVideo mainVideo={mainVideo} />
      <VideoList />
    </>
  );
};

export default VideoContainer;
