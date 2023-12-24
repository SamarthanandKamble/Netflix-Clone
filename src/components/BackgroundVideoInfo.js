import React from "react";
import { useSelector } from "react-redux";
import { movieContainerLanguageConfig } from "../utils/movieContainerLanguageConfig";
const BackgroundVideoInfo = ({ mainVideo }) => {
  const lang = useSelector((state) => state.langConfig?.lang);
  return (
    <div className="absolute top-0 text-white w-full aspect-video h-full flex flex-col flew-wrap justify-center items-start pl-8 ">
      <span className="font-extrabold text-5xl w-4/12 mb-2">
        {movieContainerLanguageConfig[lang].title}
      </span>
      <p className=" font-semibold w-4/12 mb-2">
        {movieContainerLanguageConfig[lang].overview}
      </p>
      <div>
        <button className="px-10 py-2 mt-2 bg-white opacity-80 text-black font-bold rounded-lg hover:bg-gray-400">
          {movieContainerLanguageConfig[lang].playBtn}
        </button>
        <button className="px-8 py-2 mt-2 ml-2 bg-gray-800 opacity-80 text-white font-bold rounded-lg hover:opacity-40">
          {movieContainerLanguageConfig[lang].moreInfoBtn}
        </button>
      </div>
    </div>
  );
};

export default BackgroundVideoInfo;
