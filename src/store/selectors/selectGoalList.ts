import { Goal } from "../../model/Goal";
import { GoalList } from "../../model/GoalList";

export const selectGoals = (date: string, lists: GoalList[]) => {
  let specificList: Goal[] = [];

  lists.forEach((list) => {
    if (list.date === date) specificList = list.list;
  });

  return specificList;
};
