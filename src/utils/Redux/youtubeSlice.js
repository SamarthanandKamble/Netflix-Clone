import { createSlice } from "@reduxjs/toolkit";
const youtubeSlice = createSlice({
  name: "youtube",
  initialState: {
    posterMovie: null,
  },
  reducers: {
    addPosterMovie: (state, action) => {
      state.posterMovie = action.payload;
    },
  },
});

export const { addPosterMovie } = youtubeSlice.actions;
export default youtubeSlice.reducer;
