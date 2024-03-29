export const hoursArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const generateCompleteArray = (size: number) => {
  let array: boolean[] = [];

  for (let i = 0; i < size; i++) {
    array.push(false);
  }
  return array;
};

export const generateArrayBySize = (size: number, checked: number) => {
  let array: { value: boolean; id: string }[] = [];

  for (let i = 0; i < checked; i++) {
    array.push({ value: true, id: i.toString() });
  }
  for (let i = checked; i < size; i++) {
    array.push({ value: false, id: i.toString() });
  }
  return array;
};

export const hoursNumberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
export const monthlyHoursArray = [
  "10",
  "20",
  "25",
  "30",
  "35",
  "40",
  "45",
  "50",
  "55",
  "60",
  "65",
  "70",
  "80",
];
export const timesArray = [
  "05:00",
  "05:30",
  "06:00",
  "06:30",
  "07:00",
  "07:30",
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
  "23:30",
  "00:00",
  "00:30",
  "01:00",
  "01:30",
  "02:00",
  "02:30",
  "03:00",
  "03:30",
  "04:00",
  "04:30",
];
