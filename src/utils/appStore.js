import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice"; // Ensure correct reducer name

const appStore = configureStore({
  // Fix typo here
  reducer: {
    user: userReducer, // Ensure correct variable name
  },
});

export default appStore;
