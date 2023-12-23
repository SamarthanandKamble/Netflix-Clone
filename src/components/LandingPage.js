import React from "react";
import Header from "./Header";
import SignUp from "./SignUp";
import { NETFLIX_WALLPAPER } from "../utils/constants";
export const LandingPage = () => {
  return (
    <>
      <Header />
      <div>
        <img
          src={NETFLIX_WALLPAPER}
          alt="wallpaper"
          className="h-full w-full "
        />
      </div>
      <SignUp />
    </>
  );
};
