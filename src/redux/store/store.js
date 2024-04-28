import { configureStore } from "@reduxjs/toolkit";
import rdvReducer from "../features/rdvs/rdvSlice";
import centreReduce from "../features/centres/centreSlice";

export const store = configureStore({
  reducer: {
    rdvs: rdvReducer,
    centres: centreReduce,
  },
});
