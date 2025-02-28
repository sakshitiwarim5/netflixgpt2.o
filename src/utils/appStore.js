import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice"; // Ensure correct reducer name
import movieReducer from "./movieSlice"; // Ensure correct reducer name
const appStore = configureStore({
  // Fix typo here
  reducer: {
    user: userReducer, // Ensure correct variable name
    movie: movieReducer,
  },
});

export default appStore;
