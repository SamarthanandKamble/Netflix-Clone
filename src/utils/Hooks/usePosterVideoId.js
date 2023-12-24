import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { OPTIONS } from "../constants";
import { addPosterMovie } from "../Redux/youtubeSlice";
const usePosterVideoId = () => {
  let youtubeVideoId = null;
  const dispatch = useDispatch();
  const movieId = useSelector((state) => state.youtube?.posterMovie?.id);
  const posterMovie = useSelector((state) => state.youtube?.posterMovie);

  const getTheYoutubeVideoId = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        OPTIONS
      );
      const { results } = await data.json();
      results.map((movie) => {
        if (movie.name === "Official Trailer") {
          youtubeVideoId = movie.key;
          dispatch(addPosterMovie({ ...posterMovie, youtubeId: movie.key }));
        }
      });
      return youtubeVideoId;
    } catch (error) {
      console.warn(error);
    }
  };
  useEffect(() => {
    getTheYoutubeVideoId();
  }, []);
};

export default usePosterVideoId;
