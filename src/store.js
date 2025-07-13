import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./reducers/pageSlice.js";
import chatReducer from "./reducers/chatSlice.js";
import tableReducer from "./reducers/tableSlice.js";
import userReducer from "./reducers/userSlice.js";
import newsearchReducer from "./reducers/newSearchSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    page: pageReducer,
    chat: chatReducer,
    table: tableReducer,
    newsearch: newsearchReducer,
  },
});
