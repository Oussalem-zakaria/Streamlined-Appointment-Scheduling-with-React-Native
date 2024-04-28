import { configureStore, combineReducers } from "@reduxjs/toolkit";
import rdvReducer from "../reducers/rdvReducer";
import centreReducer from "../reducers/centreReducer";

const rootReducer = combineReducers({
  rdvs: rdvReducer,
  centres: centreReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;