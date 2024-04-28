import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const rdvSlice = createSlice({
  name: "rdvs",
  initialState,
  reducers: {
    getRdv: (state, action) => {
      state.data = action.payload;
    },
    addRdv: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { getRdv, addRdv } = rdvSlice.actions;
export default rdvSlice.reducer;
