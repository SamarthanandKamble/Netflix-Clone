import React from "react";
import { useSelector } from "react-redux";
const PosterInformation = () => {
  const posterMovie = useSelector((state) => state.youtube?.posterMovie);
  if (!posterMovie) {
    return;
  }
  const { title, overview, release_date, vote_average, popularity } =
    posterMovie;
  return (
    <div className="w-5/12 mx-auto flex flex-col m-4">
      <span className="font-semibold">Title</span>
      <div className="flex justify-between">
        <span className="text-5xl font-bold">{title}</span>
        <span className="font-semibold">
          Vote Avg : {vote_average}
        </span>
      </div>
      <span className="font-semibold my-2"> Release date : {release_date}</span>
      <span className="font-semibold my-2">Popularity : {popularity}</span>
      <span className="font-semibold mt-2 w-6/12">Overview : </span>
      <span className="font-semibold  w-6/12">{overview}</span>
    </div>
  );
};

export default PosterInformation;
