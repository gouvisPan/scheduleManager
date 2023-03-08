import { Event } from "../../model/Abstractions/Event";
import { EventList } from "../../model/Abstractions/EventList";

export const findListAndInsert = (
  event: Event,
  date: string,
  lists: EventList[]
) => {
  let flag = true;
  const myLists = [...lists];

  myLists.forEach((list) => {
    if (list.date == date) {
      list.list.push(event);
      flag = false;
    }
  });

  if (flag) {
    const newList: EventList = {
      list: [],
      date,
    };
    newList.list.push(event);
    myLists.push(newList);
  }

  return myLists;
};
