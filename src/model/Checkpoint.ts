import { Event } from "./Event";

export interface Checkpoint extends Event {
  description: string;
  totalHours: number;
  isCompleted: boolean;
}
