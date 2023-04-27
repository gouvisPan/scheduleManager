import { createSlice, current } from "@reduxjs/toolkit";
import dayjs, { Dayjs } from "dayjs";
import { formatDate, getDayStr } from "../../helpers/datesUtil";

export enum addOptionType {
  TODO = "todo",
  GOAL = "goal",
  ROUTINE = "routine",
  INACTIVE = "inactive",
}

interface uiSliceState {
  activeDate: string;
  // displayingDate: string;
  // displayingDay: string;
  adder: number;
  addingCategory: number;
  addClickOption: addOptionType;
  isAddingGoalType: boolean;
}

const initialState: uiSliceState = {
  activeDate: new Date().toISOString(),
  // displayingDate: formatDate(dayjs()),
  // displayingDay: getDayStr(dayjs().day()),
  adder: 0,
  addingCategory: 0,
  addClickOption: addOptionType.INACTIVE,
  isAddingGoalType: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showNextDay: (state) => {
      state.adder++;
      // state.displayingDate = formatDate(dayjs().add(state.adder, "day"));
      // state.displayingDay = getDayStr(dayjs().add(state.adder, "day").day());
    },
    showPrevDay: (state) => {
      state.adder--;
      // state.displayingDate = formatDate(dayjs().add(state.adder, "day"));
      // state.displayingDay = getDayStr(dayjs().add(state.adder, "day").day());
    },
    setAddingCategory: (state, action) => {
      state.addingCategory = action.payload;
    },
    setAddingType: (state, action) => {
      state.addClickOption = action.payload.type;
    },
    setIsAddingGoalType: (state, action) => {
      state.isAddingGoalType = action.payload.isAdding;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
