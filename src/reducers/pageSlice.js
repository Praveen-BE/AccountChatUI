import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: {
    activeHome: "Home",
  },
  reducers: {
    updateActiveHomeNav: (state, action) => {
      state.activeHome = action.payload;
    },
  },
});

export const { updateActiveHomeNav } = pageSlice.actions;
export default pageSlice.reducer;
