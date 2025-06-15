import { createSlice } from "@reduxjs/toolkit";

const tableSlice = createSlice({
  name: "table",
  initialState: {
    currentActiveTable: null,
    formatOne: Array(3).fill(Array(3).fill("")),
  },
  reducers: {
    updateCurrentActiveTable: (state, action) => {
      state.currentActiveTable = action.payload;
    },
    updateTable: (state, action) => {
      state.formatOne = action.payload;
    },
  },
});

export const { updateTable, updateCurrentActiveTable } = tableSlice.actions;
export default tableSlice.reducer;
