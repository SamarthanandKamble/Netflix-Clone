import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { validateSignInData } from "../utils/validateData";
const SignIn = () => {
  const email = useRef();
  const password = useRef();
  const [invalidData, setInvalidData] = useState(null);

  const handleSignIn = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const errorMessage = validateSignInData(emailValue, passwordValue);
    setInvalidData(errorMessage);
  };
  return (
    <div>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="wallpaper"
        className="h-screen w-screen"
      />

      <div className="bg-gradient-to-b from-black w-screen absolute top-0 h-18">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix-logo"
          className="w-48 h-full "
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col flex-wrap justify-center content-center items-start p-10  w-4/12 m-auto bg-black opacity-90  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-8"
      >
        <span className="text-3xl py-2 text-white">Sign In</span>
        <input
          ref={email}
          placeholder="Email or phone  number"
          className="p-2  bg-gray-900 text-white border-2 border-solid border-slate-400 rounded-lg my-2 w-full"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 bg-gray-900 text-white border-2 border-solid border-slate-400 rounded-lg my-4 w-full"
        />
        {invalidData && <p className="font-bold text-red-500">{invalidData}</p>}
        <button
          className="w-full border-1 border-red-800 p-2  my-4 text-white bg-red-600 rounded-lg"
          onClick={handleSignIn}
        >
          Sign In
        </button>
        <div className="flex justify-between content-center w-full z-1 mt-1">
          <label htmlFor="input-checkbox" className="text-white ">
            <input type="checkbox" id="input-checkbox" className="mr-1" />
            Remember me
          </label>
          <span className="text-white">Need Help?</span>
        </div>
        <p className="text-slate-500 my-2">
          New to Netflix?
          <span className="text-white cursor-pointer my-1 ">
            <Link to="/">Sign up now.</Link>
          </span>
        </p>
        <span className="text-slate-500 my-2">
          Sign in is protected by Google reCAPTCHA to ensure you’re not a bot.
        </span>
      </form>
    </div>
  );
};

export default SignIn;
