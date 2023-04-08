import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../model/Todo";
import { v4 as uuidv4 } from "uuid";
import { generateEvent } from "../helpers/generateEvent";
import { GoalList } from "../../model/GoalList";
import { Goal } from "../../model/Goal";
import { findListAndInsert } from "../helpers/findListAndInsert";
import { findListAndRemove } from "../helpers/findListAndRemove";

export interface goalSliceState {
  goalLists: GoalList[];
}

const initialState: goalSliceState = {
  goalLists: [],
};

const goalSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    addGoal: (state, action) => {
      const p = action.payload;
      const id = uuidv4();
      const event = generateEvent(
        id,
        p.title,
        p.info,
        p.category,
        p.investedHours,
        p.time,
        p.completed
      );
    },

    removeEvent: (state, action) => {
      if (action.payload.event instanceof Todo)
        state.todoLists = findListAndRemove(
          action.payload.event,
          action.payload.date,
          state.todoLists
        );

      if (action.payload.event instanceof Goal)
        state.goalLists = findListAndRemove(
          action.payload.event,
          action.payload.date,
          state.goalLists
        );
    },
  },
  // completeTodo: (state, action: PayloadAction<{ events: Event[] }>) => {
  //   state.lists.forEach((list) => {
  //     if (list.date == action.payload.date) {
  //       const index = list.events.findIndex(
  //         (event) => event.id === action.payload.id
  //       );
  //       if (list.events[index] instanceof Todo)
  //         list.events[index].completed = true;
  //     }
  //   });
  // },
});

export const dataActions = dataSlice.actions;

export default dataSlice;
