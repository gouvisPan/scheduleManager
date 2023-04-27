import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/todoService";
import { Todo } from "../../model/Todo";

export const addTodo = createAsyncThunk(
  "todo/add",
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
export const updateTodo = createAsyncThunk(
  "todo/update",
  async (todo: Todo, thunkApi) => {
    try {
      const response = await api.updateTodo(todo);
      console.log(response?.data.data);
      return response?.data.data.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const getTodo = createAsyncThunk(
  "todo/get",
  async (id: string, thunkApi) => {
    try {
      const response = await api.getTodo(id);
      console.log(response?.data.data.data);
      return response?.data.data.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const getAllTodos = createAsyncThunk(
  "todo/getAll",
  async (_: void, thunkApi) => {
    try {
      const response = await api.getAllTodos();
      console.log(response);
      return response;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todo/remove",
  async (id: string, thunkApi) => {
    try {
      await api.deleteTodo(id);
      return id;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
