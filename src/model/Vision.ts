import { Event } from "./Event";

export interface Vision extends Event {
  description: string;
  mesurabaleOutcome: number;
  yearToComplete: number;
}
