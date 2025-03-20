import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    trailerVideos: [],
    popularMovies: [],
    gptMovieResults: [],
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      console.log("Dispatched Now Playing Movies:", action.payload);

      state.nowPlayingMovies = action.payload || [];
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload || [];
    },
    addTrailerVideos: (state, action) => {
      state.trailerVideos = action.payload || [];
    },
    addGptMovieResult: (state, action) => {
      state.gptMovieResults = action.payload || [];
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideos,
  addPopularMovies,
  addGptMovieResult,
} = movieSlice.actions;

export default movieSlice.reducer;
