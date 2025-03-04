import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false, // ✅ Keep name consistent
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch; // ✅ Corrected state key
    },
  },
});

export const { toggleGptSearchView } = gptSlice.actions;

export default gptSlice.reducer;
