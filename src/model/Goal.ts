import { Event } from "./Abstractions/Event";

export class Goal extends Event {
  investedHours: number;
  investedHoursDone: number;

  constructor(
    id: string,
    title: string,
    info: string,
    category: string,
    investedHours: number,
    investedHoursDone: number = 0
  ) {
    super(id, title, info, category);
    this.investedHours = investedHours;
    this.investedHoursDone = investedHoursDone;
  }
}
