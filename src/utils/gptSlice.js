import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false, // ✅ Keep name consistent
<<<<<<< HEAD
    
   
    movieResults: null,
    movieNames: null,
=======
>>>>>>> 8513020cf76dd3ca34ae00a4d87a2d880191745b
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch; // ✅ Corrected state key
    },
<<<<<<< HEAD
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
=======
  },
});

export const { toggleGptSearchView } = gptSlice.actions;
>>>>>>> 8513020cf76dd3ca34ae00a4d87a2d880191745b

export default gptSlice.reducer;
