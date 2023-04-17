import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../Auth/auth-slice";
import goalReducer from "../Goals/goalSlice";
import todoReducer from "../Todos/todoSlice";
import uiSlice from "../UI/uiSlice";

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  auth: authSlice.reducer,
  ui: uiSlice.reducer,
  goals: goalReducer,
  todos: todoReducer,
});

export default rootReducer;
