// import { combineReducers } from "redux";
// import { ListItemSlice } from "./listItemSlice";

// const reducers = combineReducers({
//   listItem: ListItemSlice,
// });

import { configureStore } from "@reduxjs/toolkit";
import listItemReducer from "./ListItemSlice";

export const store = configureStore({
  reducer: {
    // nama state yang disimpan di store harus sama dengan state yang dipanggil
    List: listItemReducer,
  },
});
