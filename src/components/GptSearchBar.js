import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { languageConfig } from "../utils/languageConfig";
import { addGptMovies } from "../utils/Redux/gptSlice";
import { OPTIONS } from "../utils/constants";

const GptSearchBar = () => {
  const lang = useSelector((state) => state.config?.lang);
  const movies = useSelector((state) => state.gpt?.gptSearchMovie);
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const handleGptSearch = () => {
    const searchValue = searchText.current.value;
    const handleMovieRequest = async (searchValue) => {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`,
        OPTIONS
      );
      const { results } = await data.json();
      dispatch(
        addGptMovies([...movies, { title: searchValue, movies: results }])
      );
    };
    handleMovieRequest(searchValue);
  };

  return (
    <div className="absolute top-20 w-full grid place-items-center">
      <form
        className="grid grid-cols-10 gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={languageConfig[lang].gptSearchBarPlaceholder}
          className="px-4 py-2 col-span-8 w-full"
          ref={searchText}
        />
        <button
          className="bg-red-600 rounded-lg py-2 px-4 font-semibold col-span-2 w-full text-white"
          onClick={handleGptSearch}
        >
          {languageConfig[lang].searchBtn}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
