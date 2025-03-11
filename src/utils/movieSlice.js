import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: [],
    trailerVideos: [],
<<<<<<< HEAD
    popularMovies: [], // ✅ Ensure it's correctly named
    gptMovieResults: [], // ✅ Added this to store GPT results
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload || [];
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload || []; // ✅ Fixed property name
=======
    popularMovies: [],
    // ✅ Ensure it's an empty array
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      //   console.log("Dispatching Movies to Redux:", action.payload); // ✅ Log when movies are added
      state.nowPlayingMovies = action.payload || [];
    },
    addPopularMovies: (state, action) => {
      //   console.log("Dispatching Movies to Redux:", action.payload); // ✅ Log when movies are added
      state.nowPopularMovies = action.payload || [];
>>>>>>> 8513020cf76dd3ca34ae00a4d87a2d880191745b
    },
    addTrailerVideos: (state, action) => {
      state.trailerVideos = action.payload || [];
    },
<<<<<<< HEAD
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
=======
  },
});

export const { addNowPlayingMovies, addTrailerVideos, addPopularMovies } =
  movieSlice.actions;
>>>>>>> 8513020cf76dd3ca34ae00a4d87a2d880191745b

export default movieSlice.reducer;
