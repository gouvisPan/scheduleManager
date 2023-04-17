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
  const { displayingDay, displayingDate } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  return (
    <div className="day-view">
      <div className="day-view__header">
        <BiLeftArrow onClick={() => dispatch(uiActions.showPrevDay())} />
        <h1>{displayingDay + " " + displayingDate.slice(0, 5)}</h1>
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
