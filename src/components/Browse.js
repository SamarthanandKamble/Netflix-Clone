import React from "react";
import Header from "./Header";
import MovieContainer from "./MovieContainer";
import { useSelector } from "react-redux";
import GptPage from "./GptPage";
const Browse = () => {
  const gptToggler = useSelector((state) => state.gpt?.gptSearchOpen);
  return (
    <div>
      <Header />
      {gptToggler ? <GptPage /> : <MovieContainer />}
    </div>
  );
};

export default Browse;
