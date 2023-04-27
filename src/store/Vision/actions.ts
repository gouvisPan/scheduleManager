import { createAction } from "@reduxjs/toolkit";

export enum GoalsActionType {
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",
  COMPLETE_TODO = "COMPLETE_TODO",
}

type AddTodoPayload = {
  title: string;
  date: string;
};

type RemoveTodoPayload = {
  id: number;
};

export const addTodo = createAction<AddTodoPayload>(GoalsActionType.ADD_TODO);
export const removeTodo = createAction<RemoveTodoPayload>(
  GoalsActionType.REMOVE_TODO
);
export const completeTodo = createAction(GoalsActionType.COMPLETE_TODO);
