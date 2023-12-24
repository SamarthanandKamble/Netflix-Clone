import React from "react";
import { LandingPage } from "./LandingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import SignIn from "./SignIn";
import SignupForm from "./SignupForm";
import PosterPageContainer from "./PosterPageContainer";
const Body = () => {
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
    {
      path: "/watch",
      element: <PosterPageContainer />,
    },
  ]);

  return <RouterProvider router={appRouter}></RouterProvider>;
};

export default Body;
