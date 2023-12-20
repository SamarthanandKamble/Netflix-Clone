import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
   
  return (
    <div className="absolute w-full flex flex-wrap items-center justify-around border-amber-600 bg-gradient-to-b from-black">
      <div>
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix-logo"
          className="w-48 h-45"
        />
      </div>

      <ul className="text-white flex h-12 ">
        <li className="p-2.5 mx-2 border rounded-md">
          <span className="">*</span>English V
        </li>
        <Link to="/signin">
          <li className="p-2.5 border bg-red-600 rounded-md cursor-pointer">
            Sign In
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
