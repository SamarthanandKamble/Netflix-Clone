import React from "react";
import { useSelector } from "react-redux";
import { languageConfig } from "../utils/languageConfig";
const GptSearchBar = () => {
  const lang = useSelector((state) => state.config?.lang);
  return (
    <div className="absolute top-20 w-full grid place-items-center">
      <form className="grid grid-cols-10 gap-4">
        <input
          type="text"
          placeholder={languageConfig[lang].gptSearchBarPlaceholder}
          className="px-4 py-2 col-span-8 w-full"
        />
        <button className="bg-red-600 rounded-lg py-2 px-4 font-semibold col-span-2 w-full text-white">
          {languageConfig[lang].searchBtn}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
