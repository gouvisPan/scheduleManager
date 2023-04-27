import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../model/Todo";
import { addTodo, deleteTodo, updateTodo } from "./aync-thunks";

export interface todoSliceState {
  todoLists: Todo[];
}
const initialState: todoSliceState = {
  todoLists: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todoLists.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todoLists.filter((todo: Todo) => todo.id !== action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.todoLists.map((todo: Todo) => {
          todo.id === action.payload.id ? action.payload : todo;
        });
      });
  },
});

export default todoSlice;
