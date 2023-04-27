import { Event } from "./Event";

export interface Todo extends Event {
  completed: boolean;
  date: string;
}
