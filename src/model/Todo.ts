import { Event } from "./Event";

export interface Todo extends Event {
  completed: boolean;
  time?: string;
  description: string;
  category: string;
}
