import React from "react";
import GptSearchBar from "./GptSearchBar";
import { NETFLIX_WALLPAPER } from "../utils/constants";

const GptPage = () => {
  return (
    <div>
      <img
        src={NETFLIX_WALLPAPER}
        alt="wallpaper"
        className="h-full w-full -z-10"
      />
      <GptSearchBar />
    </div>
  );
};

export default GptPage;
