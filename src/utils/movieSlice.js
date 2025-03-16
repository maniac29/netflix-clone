import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerDetails: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerDetails: (state, action) => {
      state.trailerDetails = action.payload;
    },
  },
});

export const { addNowPlayingMovies,addTrailerDetails } = movieSlice.actions;

export default movieSlice.reducer;
