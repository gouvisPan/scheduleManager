import { createSlice } from "@reduxjs/toolkit";
import { addTodo } from "./aync-thunks";
import { Milestone } from "../../model/Milestone";

export interface milestoneSliceState {
  milestones: Milestone[];
}
const initialState: milestoneSliceState = {
  milestones: [],
};

const milestoneSlice = createSlice({
  name: "milestone",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addTodo.fulfilled, (state, action) => {})
      .addCase(addTodo.pending, (state, action) => {})
      .addCase(addTodo.rejected, (state, action) => {});
  },
});

export default milestoneSlice;
