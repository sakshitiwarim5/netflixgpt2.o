import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: [],
    trailerVideos: [],
    popularMovies: [], // ✅ Ensure it's correctly named
    gptMovieResults: [], // ✅ Added this to store GPT results
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload || [];
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload || []; // ✅ Fixed property name
    },
    addTrailerVideos: (state, action) => {
      state.trailerVideos = action.payload || [];
    },
    addGptMovieResult: (state, action) => {
      state.gptMovieResults = action.payload || []; // ✅ Added missing reducer
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
