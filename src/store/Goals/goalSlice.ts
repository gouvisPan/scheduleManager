import { createReducer } from "@reduxjs/toolkit";
import { Goal } from "../../model/Goal";
import { GoalList } from "../../model/GoalList";
import { addGoal, addGoalType, removeGoalType } from "./action";
import { v4 as uuidv4 } from "uuid";
import { GoalType } from "../../model/GoalType";
import { findListAndInsert } from "../helpers/findListAndInsert";

export interface goalSliceState {
  goalLists: GoalList[];
  goalTypesList: GoalType[];
}

const initialState: goalSliceState = {
  goalLists: [],
  goalTypesList: [],
};

const goalReducer = createReducer(initialState, (builder) => {
  builder.addCase(addGoal, (state, { payload }) => {
    const id = uuidv4();
    const goal: Goal = {
      id: id,
      title: payload.title,
      hoursToInvest: payload.hoursToInvest,
      investedHoursDone: 0,
    };
    findListAndInsert(goal, payload.date, state.goalLists);
  }),
    builder.addCase(addGoalType, (state, { payload }) => {
      state.goalTypesList.push({
        title: payload.title,
        monthlyHoursToInvest: payload.monthlyHours,
      });
    }),
    builder.addCase(removeGoalType, (state, { payload }) => {
      state.goalTypesList = state.goalTypesList.filter(
        (type) => type.title !== payload.title
      );
    });
});

export default goalReducer;
