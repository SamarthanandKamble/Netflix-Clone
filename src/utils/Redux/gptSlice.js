import { createSlice } from "@reduxjs/toolkit";

export const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchOpen: false,
  },
  reducers: {
    gptSearchToggler: (state) => {
      state.gptSearchOpen = !state.gptSearchOpen;
    },
  },
});

export const { gptSearchToggler } = gptSlice.actions;
export default gptSlice.reducer;
