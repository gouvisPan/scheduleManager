import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import AddTypeForm from "./AddTypeForm";
import "./GoalTypes.scss";
import { RiAddLine } from "react-icons/ri";
import { uiActions } from "../../../store/UI/uiSlice";
import GoalTypeListItem from "./GoalTypeListItem";

const GoalTypes = () => {
  const types = useAppSelector((state) => state.goals.goalTypesList);
  const isAdding = useAppSelector((state) => state.ui.isAddingGoalType);
  const isAddShowing = types.length < 5;
  const dispatch = useAppDispatch();

  const buttonClickHandler = () => {
    dispatch(uiActions.setIsAddingGoalType({ isAdding: true }));
  };
  return (
    <div className={`goal-types-container`}>
      <h2>Primary Goals</h2>
      <ul className="goal-types-list">
        <li className="goal-types-list__head">
          <span>Title</span>
          <span>Hours</span>
        </li>
        {types.map((type) => (
          <GoalTypeListItem type={type} />
        ))}
        <li className="goal-types-list__button-item">
          {isAdding ? (
            <AddTypeForm />
          ) : isAddShowing ? (
            <button
              onClick={buttonClickHandler}
              className="goal-types-list__add"
            >
              <RiAddLine />
            </button>
          ) : null}
        </li>
      </ul>
    </div>
  );
};

export default GoalTypes;
