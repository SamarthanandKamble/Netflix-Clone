import React, { useEffect } from "react";
import { addTopRatedMoviesList } from "../Redux/moviesSlice";
import { OPTIONS, TOP_RATED_MOVIES_URL } from "../constants";
import { useDispatch } from "react-redux";
const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTheMovieList = async () => {
    try {
      const data = await fetch(`${TOP_RATED_MOVIES_URL}`, OPTIONS);
      const { results } = await data.json();
      dispatch(addTopRatedMoviesList(results));
    } catch (error) {
      console.warn(error);
    }
  };
  useEffect(() => {
    getTheMovieList();
  }, []);
};

export default useTopRatedMovies;
