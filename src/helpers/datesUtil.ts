import dayjs from "dayjs";
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export function getMonth(month = dayjs().month()) {
  const year = dayjs().year();
}

export const getDayStr = (dayNum: number) => {
  return days[dayNum];
};

export const getMonthStr = (monthNum: number) => {
  return months[monthNum];
};

export const formatDate = (date: dayjs.Dayjs) => {
  return date.format("DD/MM/YYYY");
};
