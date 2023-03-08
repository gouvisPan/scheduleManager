import { Event } from "../../model/Abstractions/Event";
import { Goal } from "../../model/Goal";
import { Todo } from "../../model/Todo";

export const generateEvent = (
  id: string,
  title: string,
  info: string,
  category: string,
  investedHours?: number,
  investedHoursDone?: number,
  time?: string,
  completed?: boolean
) => {
  let event: Event;

  if (investedHours) {
    event = new Goal(id, title, info, category, investedHours);
  } else {
    event = new Todo(id, title, completed!, info, category, time!);
  }

  return event;
};
