import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./reducers/pageSlice.js";
import chatReducer from "./reducers/chatSlice.js";
import tableReducer from "./reducers/tableSlice.js";

export const store = configureStore({
  reducer: {
    page: pageReducer,
    chat: chatReducer,
    table: tableReducer,
  },
});
