import { Event } from "./Event";

export interface Milestone extends Event {
  description: string;
  mesurableOutcome: number;
  currentPercentage: number;
  acceptedPercentage: number;
}
