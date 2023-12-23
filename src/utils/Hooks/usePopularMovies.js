import { useEffect } from "react";
import { OPTIONS, POPULAR_MOVIES_URL } from "../constants";
import { useDispatch } from "react-redux";
import { addPopularMoviesList } from "../Redux/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getTheMovieList = async () => {
    try {
      const data = await fetch(`${POPULAR_MOVIES_URL}`, OPTIONS);
      const { results } = await data.json();
      dispatch(addPopularMoviesList(results));
    } catch (error) {
      console.warn(error);
    }
  };
  useEffect(() => {
    getTheMovieList();
  }, []);
};

export default usePopularMovies;
