import React from "react";
const MovieListTitle = ({ title, onScroll }) => {
  return (
    <div className="text-white flex justify-between">
      <div className="text-white font-bold">{title}</div>
      <div className="z-40">
        <button
          className="px-2 pb-1 mx-2 border rounded-full hover:bg-gray-600"
          onClick={(e) => onScroll(-300)}
        >
          {"<"}
        </button>
        <button
          className="px-2 pb-1 border rounded-full hover:bg-gray-600 mr-4"
          onClick={(e) => onScroll(300)}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default MovieListTitle;
