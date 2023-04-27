import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/todoService";
import { Todo } from "../../model/Todo";

export const addTodo = createAsyncThunk(
  "auth/signUp",
  async (todo: Todo, thunkApi) => {
    try {
      const response = await api.createTodo(todo);
      console.log(response?.data.data.data);
      return response?.data.data.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
