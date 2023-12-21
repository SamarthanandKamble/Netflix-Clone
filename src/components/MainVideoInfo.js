import React from "react";

const MainVideoInfo = ({ mainVideo }) => {
  const { title, overview } = mainVideo;
  return (
    <div className="absolute top-10 text-white w-full h-screen flex flex-col flew-wrap justify-end items-start pb-24 pl-24">
      <span className="font-extrabold text-5xl w-6/12">{title}</span>
      <p className=" font-semibold w-4/12">{overview}</p>
      <div>
        <button className="px-10 py-2 mt-2 bg-white opacity-80 text-black font-bold rounded-lg">
          Play
        </button>
        <button className="px-8 py-2 mt-2 ml-2 bg-gray-800 opacity-60 text-white font-bold rounded-lg">
          More info
        </button>
      </div>
    </div>
  );
};

export default MainVideoInfo;
