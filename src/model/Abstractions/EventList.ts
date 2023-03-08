import { Goal } from "../Goal";
import { GoalList } from "../GoalList";
import { Todo } from "../Todo";
import { TodoList } from "../TodoList";
import { Event } from "./Event";

export abstract class EventList {
  list: Event[];
  date: string;

  constructor(list: Event[], date: string) {
    this.list = list;
    this.date = date;
  }
}
