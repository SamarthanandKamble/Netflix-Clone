import React from "react";
import PosterVideo from "./PosterVideo";
import PosterInformation from "./PosterInformation";
import PosterHeader from "./PosterHeader";
import usePosterVideoId from "../utils/Hooks/usePosterVideoId";
const PosterPageContainer = () => {
  usePosterVideoId();
  return (
    <div className="w-full h-screen bg-black text-white">
      <PosterHeader />
      <div className="p-2 flex justify-center">
        <PosterInformation />
        <PosterVideo />
      </div>
    </div>
  );
};

export default PosterPageContainer;
