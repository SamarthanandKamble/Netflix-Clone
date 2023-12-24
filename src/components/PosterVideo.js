import React from "react";
import { useSelector } from "react-redux";

const PosterVideo = () => {
  const videoId = useSelector((state) => state.youtube?.posterMovie?.youtubeId);
  return (
    <div className="w-5/12 pr-4 mr-2">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&vq=hd1080&loop`}
        title="YouTube video player"
        className="w-full h-full aspect-video rounded-lg"
      />
    </div>
  );
};

export default PosterVideo;
