import { createSlice } from "@reduxjs/toolkit";
import { addTodo } from "./aync-thunks";
import { Vision } from "../../model/Vision";

export interface visionSliceState {
  visions: Vision[];
}
const initialState: visionSliceState = {
  visions: [],
};

const visionSlice = createSlice({
  name: "vision",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addTodo.fulfilled, (state, action) => {})
      .addCase(addTodo.pending, (state, action) => {})
      .addCase(addTodo.rejected, (state, action) => {});
  },
});

export default visionSlice;
