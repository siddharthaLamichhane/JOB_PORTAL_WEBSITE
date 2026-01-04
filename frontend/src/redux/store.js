import authSlice from "./authSlice.js";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
