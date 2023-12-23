import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movie",
  initialState: {
    movieList: null,
    trailerVideoKey: null,
    popularMoviesList: null,
    topRatedMoviesList: null,
  },
  reducers: {
    nowPlayingMovies: (state, action) => {
      state.movieList = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideoKey = action.payload;
    },

    addPopularMoviesList: (state, action) => {
      state.popularMoviesList = action.payload;
    },
    addTopRatedMoviesList: (state, action) => {
      state.topRatedMoviesList = action.payload;
    },
  },
});

export const {
  nowPlayingMovies,
  addTrailerVideo,
  addPopularMoviesList,
  addTopRatedMoviesList,
} = moviesSlice.actions;

export default moviesSlice.reducer;
