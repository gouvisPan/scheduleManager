import { Event } from "../../model/Event";
import { Goal } from "../../model/Momentum";
import { GoalList } from "../../model/GoalList";
import { Todo } from "../../model/Todo";
import { TodoList } from "../../model/TodoList";

export const findListAndInsert = (
  event: Goal | Todo,
  date: string,
  lists: any
) => {
  let flag = true;
  const myLists = [...lists];

  myLists.forEach((list: any) => {
    if (list.date == date) {
      list.list.push(event);
      flag = false;
    }
  });

  if (flag) {
    const newList: any = {
      list: [],
      date,
    };
    newList.list.push(event);
    myLists.push(newList);
  }

  return myLists;
};
