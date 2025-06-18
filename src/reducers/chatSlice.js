import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    isNewTableActive: false,
    messageInputValue: "",
  },
  reducers: {
    updateisNewTableActive: (state) => {
      state.isNewTableActive = true;
    },
    updateisNewTableNotActive: (state) => {
      state.isNewTableActive = false;
    },
    updateMessageInputValue: (state, action) => {
      state.messageInputValue = action.payload;
    },
  },
});

export const {
  updateisNewTableActive,
  updateisNewTableNotActive,
  updateMessageInputValue,
} = chatSlice.actions;
export default chatSlice.reducer;
