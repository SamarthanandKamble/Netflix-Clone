import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { LandingPage } from "./LandingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import SignIn from "./SignIn";
import SignupForm from "./SignupForm";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/Redux/userSlice";
const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signupform",
      element: <SignupForm />,
    },
  ]);
 
  return <RouterProvider router={appRouter}></RouterProvider>;
};

export default Body;
