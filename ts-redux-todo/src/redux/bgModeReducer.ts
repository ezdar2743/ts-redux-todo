import { createSlice } from "@reduxjs/toolkit";

export const changeBg = createSlice({
  name: "mode",
  initialState: true,
  reducers: {
    changeMode: (state) => {
      return !state;
    },
  },
});

export default changeBg.reducer;
export const { changeMode } = changeBg.actions;
