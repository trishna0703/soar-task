// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebarSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});

export default store;
