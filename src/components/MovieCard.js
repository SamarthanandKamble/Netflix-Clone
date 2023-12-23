import React from "react";
import { MOVIE_POSTER_CDN_URL } from "../utils/constants";

const MovieCard = ({ movies}) => {
  const { poster_path, title } = movies;
  return (
    <div className="w-36 h-40">
      <img
        src={`${MOVIE_POSTER_CDN_URL}${poster_path}`}
        alt={title}
        className="w-full h-full p-2"
      />
    </div>
  );
};

export default MovieCard;
