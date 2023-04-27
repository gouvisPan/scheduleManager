import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useAppDispatch } from "../../../hooks/hooks";
import { GoalType } from "../../../model/Checkpoint";
import { removeGoalType } from "../../../store/Momentums/action";

const GoalTypeListItem: React.FC<{ type: GoalType }> = ({ type }) => {
  const dispatch = useAppDispatch();
  const clickDeleteHandler = (title: string) => {
    dispatch(removeGoalType({ title }));
  };

  return (
    <li>
      <span>{type.title}</span>
      <div className="hours-edit-pack">
        <span>{type.monthlyHoursToInvest}</span>
        <AiFillDelete
          onClick={() => clickDeleteHandler(type.title)}
          className="goal-types-list__delete"
        />
      </div>
    </li>
  );
};

export default GoalTypeListItem;
