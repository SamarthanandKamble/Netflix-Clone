import React from "react";
import { NETFLIX_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/Redux/userSlice";

const PosterHeader = () => {
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        console.warn(error);
      });
  };
  return (
    <div className="w-full px-8 flex justify-between items-center">
      <img src={NETFLIX_LOGO} alt="netflix-logo" className=" h-14" />
      <Link to="/">
        <span
          className="bg-red-600 rounded-sm cursor-pointer px-2 py-1 font-semibold"
          onClick={handleSignOut}
        >
          Log out
        </span>
      </Link>
    </div>
  );
};

export default PosterHeader;
