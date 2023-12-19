import React from "react";
import { LandingPage } from "./LandingPage";
import Header from "./Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import SignIn from "./SignIn";
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
  ]);
  return <RouterProvider router={appRouter}></RouterProvider>;
};

export default Body;
