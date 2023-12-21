import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/Redux/userSlice";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  useEffect(() => {
    
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        navigate("/browse");
        dispatch(addUser({ uid: uid, email: email }));
      } else {
        navigate("/");
      }
    });

    return () => subscribe();
  }, []);
  return (
    <div className="absolute w-full flex flex-wrap items-center justify-around border-amber-600 bg-gradient-to-b from-black">
      <div>
        <img src={NETFLIX_LOGO} alt="netflix-logo" className="w-48 h-45" />
      </div>

      <ul className="text-white flex h-12 ">
        <li className="p-2.5 mx-2 border rounded-md">
          <span className="">*</span>English V
        </li>
        {user !== null ? (
          <Link to="/">
            <li
              className="p-2.5 border bg-red-600 rounded-md cursor-pointer"
              onClick={handleSignOut}
            >
              Log Out
            </li>
          </Link>
        ) : (
          <Link to="/signin">
            <li className="p-2.5 border bg-red-600 rounded-md cursor-pointer">
              Sign In
            </li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Header;
