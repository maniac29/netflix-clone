import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerDetails: null,
    popularMovies: null,
    topRatedMovies : null,
    upcomingMovies : null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerDetails: (state, action) => {
      state.trailerDetails = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies : (state,action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies : (state,action) => {
      state.upcomingMovies = action.payload
    }
  },
});

export const { addNowPlayingMovies,addTrailerDetails,addPopularMovies,addTopRatedMovies,addUpcomingMovies } = movieSlice.actions;

export default movieSlice.reducer;
