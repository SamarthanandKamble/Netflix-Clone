import React from "react";

const BackgroundVideoInfo = ({ mainVideo }) => {
  const { title, overview } = mainVideo;
  return (
    <div className="absolute top-0 text-white w-full aspect-video h-full flex flex-col flew-wrap justify-center items-start pl-8 ">
      <span className="font-extrabold text-5xl w-4/12 mb-2">{title}</span>
      <p className=" font-semibold w-4/12 mb-2">{overview}</p>
      <div>
        <button className="px-10 py-2 mt-2 bg-white opacity-80 text-black font-bold rounded-lg hover:bg-gray-400">
          Play
        </button>
        <button className="px-8 py-2 mt-2 ml-2 bg-gray-800 opacity-80 text-white font-bold rounded-lg hover:opacity-40">
          More info
        </button>
      </div>
    </div>
  );
};

export default BackgroundVideoInfo;
