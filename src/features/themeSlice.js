import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState: true,
  // reducer function helps to change the state inside a slice
  reducers: {
    toggleTheme: (state) => {
      return !state;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
