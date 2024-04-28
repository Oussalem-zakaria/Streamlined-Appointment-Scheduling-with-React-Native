import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const centreSlice = createSlice({
  name: "centres",
  initialState,
  reducers: {
    getCentre: (state, action) => {
      state.data = action.payload;
    },
    addCentre: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { getCentre, addCentre } = centreSlice.actions;
export default centreSlice.reducer;
