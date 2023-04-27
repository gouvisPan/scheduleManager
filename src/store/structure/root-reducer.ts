import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../Auth/auth-slice";
import uiSlice from "../UI/uiSlice";
import todoSlice from "../Todos/todoSlice";
import goalSlice from "../Momentums/momentumSlice";

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  auth: authSlice.reducer,
  ui: uiSlice.reducer,
  goals: goalSlice.reducer,
  todos: todoSlice.reducer,
});

export default rootReducer;
