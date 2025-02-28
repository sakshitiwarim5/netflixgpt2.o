import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: [], // ✅ Ensure it's an empty array
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      console.log("Dispatching Movies to Redux:", action.payload); // ✅ Log when movies are added
      state.nowPlayingMovies = action.payload || [];
    },
  },
});

export const { addNowPlayingMovies } = movieSlice.actions;

export default movieSlice.reducer;
