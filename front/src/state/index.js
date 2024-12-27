import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState = {
  isSidebarCollapsed: false,
  isDarkMode: false,
};

// const intitalState: initialStateTypes = {
//   isSidebarCollapsed: false,
//   isDarkMode: false,
// };

export const globalslice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSidebarCollapsed: (state, action) => {
      state.isSidebarCollapsed = action.payload;
    },
    setDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { setIsSidebarCollapsed, setDarkMode } = globalslice.actions;
export default globalslice.reducer;
