import { createSlice, current } from "@reduxjs/toolkit";
import dayjs, { Dayjs } from "dayjs";
import { formatDate, getDayStr } from "../../helpers/datesUtil";

interface uiSliceState {
  displayingDate: string;
  displayingDay: string;
  adder: number;
  addingCategory: number;
}

const initialState: uiSliceState = {
  displayingDate: formatDate(dayjs()),
  displayingDay: getDayStr(dayjs().day()),
  adder: 0,
  addingCategory: 0,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showNextDay: (state) => {
      state.adder++;
      state.displayingDate = formatDate(dayjs().add(state.adder, "day"));
      state.displayingDay = getDayStr(dayjs().add(state.adder, "day").day());
    },
    showPrevDay: (state) => {
      state.adder--;
      state.displayingDate = formatDate(dayjs().add(state.adder, "day"));
      state.displayingDay = getDayStr(dayjs().add(state.adder, "day").day());
    },
    setAddingCategory: (state, action) => {
      state.addingCategory = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
