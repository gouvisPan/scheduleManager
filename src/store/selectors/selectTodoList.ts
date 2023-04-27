import { Todo } from "../../model/Todo";

export const selectTodos = (date: string, list: Todo[]) => {
  let specificList: Todo[] = [];

  specificList = list.filter(
    (todo) => todo.date.slice(0, 10) === date.slice(0, 10)
  );

  return specificList;
};
