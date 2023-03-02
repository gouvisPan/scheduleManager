import dayjs from "dayjs";
import { Todo } from "./Todo";

export interface TodoList {
  Todos: Todo[];
  date: string;
}
