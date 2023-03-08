import { Todo } from "../../model/Todo";
import { TodoList } from "../../model/TodoList";

export const selectTodos = (date: string, lists: TodoList[]) => {
  let specificList: Todo[] = [];

  lists.forEach((list) => {
    if (list.date === date) specificList = list.list;
  });

  return specificList;
};
