import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptScreen: false,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptScreen = !state.showGptScreen;
    },
  },
});

export const { toggleGptSearchView } = gptSlice.actions;

export default gptSlice.reducer;
