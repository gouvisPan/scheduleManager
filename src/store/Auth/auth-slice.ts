import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signUpUser, loginUser, logoutUser } from "./async-actions";

interface authSliceState {
  isLoading: boolean;
  isSuccess: boolean;
  isAuthenticated: boolean;
  error: null | string;
}

const initialState: authSliceState = {
  isLoading: false,
  isSuccess: false,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginStatus: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    autoLoginUser: (state) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isAuthenticated = true;
    },
    setErrorState: (state, action) => {
      state.error = action.payload;
    },
    clearErrorState: (state) => {
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(signUpUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuthenticated = true;
      })
      .addCase(signUpUser.rejected, (state, obj) => {
        state.isLoading = false;
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isAuthenticated = false;
      })
      .addCase(logoutUser.rejected, (state, obj) => {
        state.isLoading = false;
      });
  },
});

export const authActions = authSlice.actions;

export default authSlice;
