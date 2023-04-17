import { Event } from "../../model/Event";

export const findListAndRemove = (id: string, date: string, lists: any[]) => {
  const myLists = [...lists];

  myLists.forEach((eventList) => {
    if (eventList.date == date) {
      const index = eventList.list.findIndex((event: Event) => event.id === id);
      eventList.list.splice(index, 1);
    }
  });

  return myLists;
};
