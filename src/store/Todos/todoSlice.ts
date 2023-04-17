import { createReducer } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { findListAndInsert } from "../helpers/findListAndInsert";
import { addTodo } from "./actions";
import { Todo } from "../../model/Todo";
import { TodoList } from "../../model/TodoList";

export interface todoSliceState {
  todoLists: TodoList[];
}

const initialState: todoSliceState = {
  todoLists: [],
};

const todoReducer = createReducer(initialState, (builder) => {
  builder.addCase(addTodo, (state, { payload }) => {
    const id = uuidv4();
    const todo: Todo = {
      id: id,
      title: payload.title,
      time: payload.time,
      completed: false,
      description: payload.desc,
      category: "",
    };
    findListAndInsert(todo, payload.date, state.todoLists);
  });
});

export default todoReducer;
