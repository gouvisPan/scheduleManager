import { createAction } from "@reduxjs/toolkit";

export enum GoalsActionType {
  ADD_GOAL = "ADD_GOAL",
  REMOVE_GOAL = "REMOVE_GOAL",
  COMPLETE_GOAL = "COMPLETE_GOAL",
  ADD_GOAL_TYPE = "ADD_GOAL_TYPE",
  REMOVE_GOAL_TYPE = "REMOVE_GOAL_TYPE",
  EDIT_GOAL_TYPE = "EDIT_GOAL_TYPE",
}

type AddGoalPayload = {
  title: string;
  hoursToInvest: number;
  date: string;
};
type RemoveGoalPayload = {
  id: number;
};
type CompleteGoalPayload = {
  hoursCompleted: number;
};

type AddGoalTypePayload = {
  title: string;
  monthlyHours: number;
};

type RemoveGoalTypePayload = {
  title: string;
};
type EditGoalTypePayload = {
  title: string;
  newTitle: string;
  newHours: number;
};

export const addGoal = createAction<AddGoalPayload>(GoalsActionType.ADD_GOAL);
export const removeGoal = createAction<RemoveGoalPayload>(
  GoalsActionType.REMOVE_GOAL
);
export const completeGoal = createAction<CompleteGoalPayload>(
  GoalsActionType.COMPLETE_GOAL
);

export const addGoalType = createAction<AddGoalTypePayload>(
  GoalsActionType.ADD_GOAL_TYPE
);
export const removeGoalType = createAction<RemoveGoalTypePayload>(
  GoalsActionType.REMOVE_GOAL_TYPE
);
