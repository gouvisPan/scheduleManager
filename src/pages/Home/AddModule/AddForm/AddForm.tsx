import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import AddGoal from "./AddGoal";
import AddRoutine from "./AddRoutine";

import AddTodo from "./AddTodo";
import "./AddForm.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import { addOptionType, uiActions } from "../../../../store/UI/uiSlice";

const AddForm = () => {
  const addOption = useAppSelector((state) => state.ui.addClickOption);
  const dispatch = useAppDispatch();

  return (
    <div className="add-form__wrapper">
      <AiFillCloseCircle
        onClick={() =>
          dispatch(uiActions.setAddingType({ type: addOptionType.INACTIVE }))
        }
        className="add-form__close"
      />
      {addOption === addOptionType.TODO ? <AddTodo /> : null}
      {addOption === addOptionType.GOAL ? <AddGoal /> : null}
      {addOption === addOptionType.ROUTINE ? <AddRoutine /> : null}
    </div>
  );
};

export default AddForm;
