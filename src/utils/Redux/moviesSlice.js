import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movie",
  initialState: {
    movieList: null,
    trailerVideoKey: null,
  },
  reducers: {
    nowPlayingMovies: (state, action) => {
      state.movieList = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideoKey = action.payload;
    },
  },
});

export const { nowPlayingMovies, addTrailerVideo } = moviesSlice.actions;

export default moviesSlice.reducer;
