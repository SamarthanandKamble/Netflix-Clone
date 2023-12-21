import React, { useEffect } from "react";
import MainVideoInfo from "./MainVideoInfo";
import { OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/Redux/moviesSlice";
const MainVideo = ({ mainVideo }) => {
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
    <div className="w-full h-screen">
      <iframe
        src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1`}
        title="YouTube video player"
        className="w-full h-full aspect-video bg-black bg-gradient-to-r from-black"
        allow="autoplay"
      />
      <MainVideoInfo mainVideo={mainVideo} />
    </div>
  );
};

export default MainVideo;
