import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    isNewTableActive: true,
  },
  reducers: {
    toggleNewTable: (state, action) => {
      state.isNewTableActive = !isNewTableActive;
    },
  },
});

export const { toggleNewTable } = chatSlice.actions;
export default chatSlice.reducer;
