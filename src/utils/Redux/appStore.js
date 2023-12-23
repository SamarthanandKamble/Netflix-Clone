import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    movie: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});
