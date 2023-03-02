import dayjs from "dayjs";
import { Todo } from "../../model/Todo";
import { TodoList } from "../../model/TodoList";

export const selectList = (date: string, lists: TodoList[]) => {
  let specificList: Todo[] = [];
  lists.forEach((list) => {
    if (list.date === date) specificList = list.Todos;
  });

  return specificList;
};
