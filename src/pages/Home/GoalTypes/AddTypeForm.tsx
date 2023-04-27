import { useRef, useState } from "react";
import { monthlyHoursArray } from "../../../helpers/generateArrays";
import { useAppDispatch } from "../../../hooks/hooks";
import { addGoalType } from "../../../store/Momentums/action";
import { uiActions } from "../../../store/UI/uiSlice";
import DropDownPicker from "../DayView/AddTodo/DropDownPicker/DropDownPicker";
import { TbArrowBack } from "react-icons/tb";

const AddTypeForm = () => {
  const [title, setTitle] = useState("");
  const [monthlyHours, setMonthlyHours] = useState(monthlyHoursArray[0]);
  const dispatch = useAppDispatch();

  const setMonthlyHoursHandler = (h: string) => {
    setMonthlyHours(h);
  };

  const inputChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };
  const saveHandler = () => {
    if (title !== "") {
      closeHandler();
      dispatch(
        addGoalType({ title: title, monthlyHours: parseInt(monthlyHours) })
      );
    } else {
      alert("Please insert a title");
    }
  };
  const closeHandler = () => {
    dispatch(uiActions.setIsAddingGoalType({ isAdding: false }));
  };
  return (
    <div className="add-goalType__container">
      <TbArrowBack onClick={closeHandler} className="add-goalType__back" />
      <input type="text" onChange={inputChangeHandler} placeholder="title" />
      <DropDownPicker
        title="Monthly hours: "
        displayedArray={monthlyHoursArray}
        setValue={(h) => setMonthlyHoursHandler(h)}
      />
      <div className="add-goalType__btn-area">
        <button
          className="add-goalType__btn-area--submit"
          onClick={saveHandler}
        >
          Add
        </button>
        <button
          className="add-goalType__btn-area--back"
          onClick={() => dispatch(uiActions.setIsAddingGoalType(false))}
        >
          Nah
        </button>
      </div>
    </div>
  );
};

export default AddTypeForm;
