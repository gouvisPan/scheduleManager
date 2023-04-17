import { createAsyncThunk } from "@reduxjs/toolkit";

export const signUpUser = createAsyncThunk(
  "auth/signUp",
  async (credentials: string, thunkApi) => {
    try {
      const response = 2;
      console.log(response);
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/signIn",
  async (_: void, thunkApi) => {
    try {
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
