import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { getDayStr } from "../../../helpers/datesUtil";
import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";
import "./DayView.scss";

import Notes from "./Notes/Notes";
import TodoList from "./ToDoList/TodoList";
import { uiActions } from "../../../store/UI/uiSlice";
import AddTodo from "./AddTodo/AddTodo";

const DayView = () => {
  const { activeDate } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();
  const displayingDate = new Date(Date.parse(activeDate));
  console.log(displayingDate);
  const dateStr = displayingDate.toLocaleDateString().slice(0, 5);
  const dayStr = getDayStr(displayingDate.getDay());
  return (
    <div className="day-view">
      <div className="day-view__header">
        <BiLeftArrow onClick={() => dispatch(uiActions.showPrevDay())} />
        <h1>{dayStr + " " + dateStr}</h1>
        <BiRightArrow onClick={() => dispatch(uiActions.showNextDay())} />
      </div>
      <div className="day-view__body">
        <div className="day-view__body--side-l">
          <TodoList />
        </div>
        <div className="day-view__body--side-r">
          {/* <AddTodo /> */}
          <Notes />
        </div>
      </div>
    </div>
  );
};

export default DayView;
