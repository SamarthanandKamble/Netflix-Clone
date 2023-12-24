import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "langConfig",
  initialState: {
    lang: "English",
  },
  reducers: {
    updateLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { updateLanguage } = configSlice.actions;

export default configSlice.reducer;
