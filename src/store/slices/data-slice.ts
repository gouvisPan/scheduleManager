import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { Todo } from "../../model/Todo";
import { TodoList } from "../../model/TodoList";
import { v4 as uuidv4 } from "uuid";

export interface dataSliceState {
  lists: TodoList[];
}

const initialState: dataSliceState = {
  lists: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      let flag = true;
      const todo: Todo = {
        id: uuidv4(),
        title: action.payload.title,
        info: action.payload.info,
        investedHours: action.payload.hours,
        investedHoursDone: 0,
        time: action.payload.time,
        category: action.payload.category,
        completed: false,
      };

      state.lists.forEach((list) => {
        if (list.date == action.payload.date) {
          todo.id = uuidv4();
          list.Todos.push(todo);
          flag = false;
        }
      });

      if (flag) {
        const newTodoList: TodoList = {
          Todos: [],
          date: action.payload.date,
        };
        newTodoList.Todos.push(todo);
        state.lists.push(newTodoList);
      }
    },
    removeTodo: (state, action) => {
      state.lists.forEach((list) => {
        if (list.date == action.payload.date) {
          const index = list.Todos.findIndex(
            (todo) => todo.id === action.payload.id
          );
          list.Todos.splice(index, 1);
        }
      });
    },
    completeTodo: (state, action) => {
      state.lists.forEach((list) => {
        if (list.date == action.payload.date) {
          const index = list.Todos.findIndex(
            (todo) => todo.id === action.payload.id
          );
          list.Todos[index].completed = true;
        }
      });
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice;
