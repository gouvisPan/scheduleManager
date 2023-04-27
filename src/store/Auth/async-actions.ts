import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/authService";
export interface signUpCredentials {
  email: string;
  password: string;
  name: string;
}
export interface LoginCredentials {
  email: string;
  password: string;
}

export const signUpUser = createAsyncThunk(
  "auth/signUp",
  async (credentials: signUpCredentials, thunkApi) => {
    try {
      const response = await api.createUser(credentials);
      console.log(response);
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/signIn",
  async (credentials: LoginCredentials, thunkApi) => {
    try {
      const response = await api.fetchUser(credentials);
      console.log(response);
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/signOut",
  async (_: void, thunkApi) => {
    try {
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "auth/delete",
  async (_: void, thunkApi) => {
    try {
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
