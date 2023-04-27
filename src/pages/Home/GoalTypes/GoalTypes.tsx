import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import AddTypeForm from "./AddTypeForm";
import "./GoalTypes.scss";
import { RiAddLine } from "react-icons/ri";
import { uiActions } from "../../../store/UI/uiSlice";
import GoalTypeListItem from "./GoalTypeListItem";

const GoalTypes = () => {
  const isAdding = useAppSelector((state) => state.ui.isAddingGoalType);
  const dispatch = useAppDispatch();

  const buttonClickHandler = () => {
    dispatch(uiActions.setIsAddingGoalType({ isAdding: true }));
  };
  return (
    <div className={`goal-types-container`}>
      <h2>Primary Goals</h2>
    </div>
  );
};

export default GoalTypes;
