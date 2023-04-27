import { createSlice } from "@reduxjs/toolkit";
import { Momentum } from "../../model/Momentum";

export interface goalSliceState {
  momentumList: Momentum[];
}

const initialState: goalSliceState = {
  momentumList: [],
};

const momentumSlice = createSlice({
  name: "momentum",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default momentumSlice;
