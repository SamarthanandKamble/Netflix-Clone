import { createSlice } from "@reduxjs/toolkit";

export const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchOpen: false,
    gptSearchMovie: [],
  },
  reducers: {
    gptSearchToggler: (state) => {
      state.gptSearchOpen = !state.gptSearchOpen;
    },
    addGptMovies: (state, action) => {
      state.gptSearchMovie = action.payload;
    },
  },
});

export const { gptSearchToggler, addGptMovies } = gptSlice.actions;
export default gptSlice.reducer;
