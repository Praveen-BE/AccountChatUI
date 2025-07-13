import { createSlice } from "@reduxjs/toolkit";

const newSearchSlice = createSlice({
  name: "newsearch",
  initialState: {
    newSearchNumberList: [],
  },
  reducers: {
    updateNewSearchNumberList: (state, action) => {
      state.newSearchNumberList.push(action.payload);
    },
    removeNewSearchNumberList: (state) => {
      state.newSearchNumberList = [];
    },
  },
});

export const { updateNewSearchNumberList, removeNewSearchNumberList } =
  newSearchSlice.actions;
export default newSearchSlice.reducer;
