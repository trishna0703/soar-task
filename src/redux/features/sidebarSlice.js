import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisible: true,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isVisible = !state.isVisible;
    },
    setSidebarVisibility: (state, action) => {
      state.isVisible = action.payload;
    },
  },
});

export const { toggleSidebar, setSidebarVisibility } = sidebarSlice.actions;

export default sidebarSlice.reducer;
