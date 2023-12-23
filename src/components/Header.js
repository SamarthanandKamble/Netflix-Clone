import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../utils/Redux/userSlice";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { gptSearchToggler } from "../utils/Redux/gptSlice";
import useCheckForAuthChange from "../utils/Hooks/useCheckForAuthChange";
import { updateLanguage } from "../utils/Redux/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const gptToggler = useSelector((state) => state.gpt?.gptSearchOpen);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  useCheckForAuthChange();

  const toggleGptSearch = () => {
    dispatch(gptSearchToggler());
  };

  const handleLanguageUpdate = (e) => {
    dispatch(updateLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full flex flex-wrap items-center justify-between bg-gradient-to-b from-black px-4 top-0 z-10">
      <div className="w-32">
        <img src={NETFLIX_LOGO} alt="netflix-logo" className="w-full" />
      </div>

      <ul className="h-10 p-2 text-white flex items-center justify-center content-center">
        {user && (
          <li
            className="px-2 py-1 mx-2 font-semibold rounded-lg bg-black opacity-90 cursor-pointer"
            onClick={toggleGptSearch}
          >
            {gptToggler ? "Homepage" : "GptSearch"}
          </li>
        )}
        {user && gptToggler && (
          <select
            className="pl-2 py-1 mr-2 font-semibold rounded-md bg-black opacity-90"
            onChange={handleLanguageUpdate}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.name}>
                {lang.name}
              </option>
            ))}
          </select>
        )}
        {user !== null ? (
          <Link to="/">
            <li
              className="bg-red-600 rounded-lg cursor-pointer px-2 py-1 font-semibold"
              onClick={handleSignOut}
            >
              Log Out
            </li>
          </Link>
        ) : (
          <Link to="/signin">
            <li className="bg-red-600 rounded-md cursor-pointer px-2 py-1 font-semibold">
              Sign In
            </li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Header;
