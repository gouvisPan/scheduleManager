import { Event } from "./Event";

export interface Goal extends Event {
  hoursToInvest: number;
  investedHoursDone: number;
}
