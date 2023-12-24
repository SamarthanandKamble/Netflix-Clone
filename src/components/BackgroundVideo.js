import React, { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/Redux/moviesSlice";

const BackgroundVideo = ({ mainVideo }) => {
  const dispatch = useDispatch();
  const key = useSelector((state) => state.movie?.trailerVideoKey);
  const { id } = mainVideo;
  useEffect(() => {
    fetchTheTrailerVideo();
  }, []);

  const fetchTheTrailerVideo = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        OPTIONS
      );
      const { results } = await data.json();

      let trailerVideo = results.filter(
        (video) => video.name === "Official Trailer"
      );

      dispatch(
        addTrailerVideo(trailerVideo ? trailerVideo[0].key : results[0].key)
      );
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <div className="w-full bg-gradient-to-r from-black">
      <iframe
        title="YouTube video player"
        src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1`}
        className="w-full aspect-video pointer-events-none"
      />
    </div>
  );
};

export default BackgroundVideo;
