import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/hooks";
import AddGoal from "./AddGoal";
import AddRoutine from "./AddRoutine";
import * as uiActions from "../../../../../simpleStore/actions/uiActions";
import AddTodo from "./AddTodo";
import "./AddForm.scss";
import { AiFillCloseCircle } from "react-icons/ai";

const AddForm = () => {
  const addOption = useAppSelector((state) => state.ui.addClickOption);
  const dispatch = useAppDispatch();

  return (
    <div className="add-form__wrapper">
      <AiFillCloseCircle
        onClick={() => dispatch(uiActions.setAddingType(0))}
        className="add-form__close"
      />
      {addOption === "todo" ? <AddTodo /> : null}
      {addOption === "goal" ? <AddGoal /> : null}
      {addOption === "routine" ? <AddRoutine /> : null}
    </div>
  );
};

export default AddForm;
