import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./reducers/pageSlice.js";

export const store = configureStore({
  reducer: {
    page: pageReducer,
  },
});
