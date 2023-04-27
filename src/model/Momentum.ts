import { Event } from "./Event";

export interface Momentum extends Event {
  hoursToInvest: number;
  investedHoursDone: number;
}
