import { Event } from "../../model/Abstractions/Event";
import { EventList } from "../../model/Abstractions/EventList";

export const findListAndRemove = (
  id: string,
  date: string,
  lists: EventList[]
) => {
  const myLists = [...lists];

  myLists.forEach((eventList) => {
    if (eventList.date == date) {
      const index = eventList.list.findIndex((event) => event.id === id);
      eventList.list.splice(index, 1);
    }
  });

  return myLists;
};
