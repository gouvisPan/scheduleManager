import { EventList } from "./Abstractions/EventList";
import { Goal } from "./Goal";

export class GoalList extends EventList {
  constructor(list: Goal[], date: string) {
    super(list, date);
  }
}
