import { EventList } from "./Abstractions/EventList";
import { Todo } from "./Todo";

export class TodoList extends EventList {
  constructor(list: Todo[], date: string) {
    super(list, date);
  }
}
