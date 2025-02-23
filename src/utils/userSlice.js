import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  // ✅ Fixed variable name
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: () => {
      // ✅ Removed unused parameter
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions; // ✅ Fixed export
export default userSlice.reducer; // ✅ Fixed export
