import { createSlice } from "@reduxjs/toolkit";
import { addTodo } from "./aync-thunks";
import { Checkpoint } from "../../model/Checkpoint";

export interface checkpointSliceState {
  checkpoints: Checkpoint[];
}
const initialState: checkpointSliceState = {
  checkpoints: [],
};

const checkpointSlice = createSlice({
  name: "checkpoint",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addTodo.fulfilled, (state, action) => {})
      .addCase(addTodo.pending, (state, action) => {})
      .addCase(addTodo.rejected, (state, action) => {});
  },
});

export default checkpointSlice;
