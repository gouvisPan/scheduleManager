import React from "react";
import { MdCancel } from "react-icons/md";
import CheckBox from "../../../../../components/UI/CheckBox/CheckBox";
import { generateArrayBySize } from "../../../../../helpers/generateArrays";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/hooks";
import { Goal } from "../../../../../model/Goal";

import "./EventComp.scss";

const GoalComp: React.FC<{ goal: Goal }> = ({ goal }) => {
  const dispatch = useAppDispatch();
  const { displayingDate } = useAppSelector((state) => state.ui);

  const removeTodoHandler = () => {
    // dispatch(dataActions.removeEvent({ date: displayingDate, event: goal }));
  };

  return (
    <li className="event">
      <button onClick={removeTodoHandler} className="event__x" type="button">
        <MdCancel />
      </button>
      <h4 className="event__title">{goal.title}</h4>
      <div className="event__checkboxes-container">
        {generateArrayBySize(goal.hoursToInvest, goal.investedHoursDone).map(
          (item) => (
            <CheckBox
              checked={item.value}
              clickHandler={() => {}}
              key={item.id}
            />
          )
        )}
      </div>
    </li>
  );
};
export default GoalComp;
