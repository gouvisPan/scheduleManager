import { Event } from "./Abstractions/Event";

export class Todo extends Event {
  completed: boolean;
  time: string;

  constructor(
    id: string,
    title: string,
    completed: boolean,
    info: string,
    category: string,
    time: string
  ) {
    super(id, title, info, category);
    this.completed = completed;
    this.time = time;
  }
}
