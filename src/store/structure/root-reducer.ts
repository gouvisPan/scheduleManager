import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../slices/auth-slice";
import dataSlice from "../slices/data-slice";

import uiSlice from "../slices/ui-slice";

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  auth: authSlice.reducer,
  ui: uiSlice.reducer,
  data: dataSlice.reducer,
});

export default rootReducer;
