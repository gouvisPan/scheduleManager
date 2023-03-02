export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  isFlexible: boolean;
  info: string;
  category?: string;
  investedHours?: number;
  investedHoursDone?: number;
  time?: string;
}
