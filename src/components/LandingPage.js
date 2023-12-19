import React from "react";
import Header from "./Header";
import SignUp from "./SignUp";
export const LandingPage = () => {
  //Write logic for signin/login first then separate it into comp.
  return (
    <>
      <Header />
      <div className="">
        <div>
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="wallpaper"
            className="h-full w-full "
          />
        </div>
        <SignUp />
      </div>
    </>
  );
};
