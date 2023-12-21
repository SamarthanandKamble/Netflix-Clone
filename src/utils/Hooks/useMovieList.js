import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { nowPlayingMovies } from "../Redux/moviesSlice";
import { OPTIONS } from "../constants";
const useMoviesList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getTheMovieList = async () => {
      try {
        const result = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
          OPTIONS
        );
        const { results } = await result.json();
        dispatch(nowPlayingMovies(results));
        // console.log(results);
      } catch (error) {
        console.warn(error);
      }
    };
    getTheMovieList();
  }, []);
};

export default useMoviesList;
