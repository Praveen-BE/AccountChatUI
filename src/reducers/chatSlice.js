import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    isNewTableActive: false,
  },
  reducers: {
    updateisNewTableActive: (state) => {
      state.isNewTableActive = true;
    },
    updateisNewTableNotActive: (state) => {
      state.isNewTableActive = false;
    },
  },
});

export const { updateisNewTableActive, updateisNewTableNotActive } =
  chatSlice.actions;
export default chatSlice.reducer;
