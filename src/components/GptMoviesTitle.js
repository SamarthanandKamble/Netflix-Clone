import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addGptMovies } from "../utils/Redux/gptSlice";
const GptMoviesTitle = ({ title }) => {
  const movies = useSelector((state) => state.gpt?.gptSearchMovie);
  const dispatch = useDispatch();
  const handleMovieDelete = (title) => {
    const filteredMovies = movies.filter((movie) => movie.title !== title);
    dispatch(addGptMovies(filteredMovies));
  };

  return (
    <div className="text-white w-full flex justify-between font-semibold">
      <span>{title}</span>
      <span className="cursor-pointer" onClick={() => handleMovieDelete(title)}>
        🗑️
      </span>
    </div>
  );
};

export default GptMoviesTitle;
