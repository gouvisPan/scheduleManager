import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import DropDownPicker from "../../DayView/AddTodo/DropDownPicker/DropDownPicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AddAny.scss";
import { addOptionType, uiActions } from "../../../../store/UI/uiSlice";
import { addGoal } from "../../../../store/Momentums/action";
import { hoursNumberArray } from "../../../../helpers/generateArrays";
import DatePicker from "react-datepicker";

const AddGoal = () => {
  const [hours, setHours] = useState(1);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState<Date | null>(new Date());
  const goalTypes = useAppSelector((state) => state.goals.goalTypesList);
  const dispatch = useAppDispatch();

  const onSubmitHandler = () => {
    dispatch(uiActions.setAddingType(addOptionType.INACTIVE));
    dispatch(addGoal({ title, hoursToInvest: 1, date: "" }));
  };

  const setHoursHandler = (h: string) => {
    setHours(parseInt(h));
  };
  const setTitleHandler = (title: string) => {
    setTitle(title);
  };

  return (
    <div className="add-form-container">
      <h2>Add Goal</h2>
      <div className="add-form-container__content--text-fields">
        <DropDownPicker
          title={"Goal to work on: "}
          displayedArray={goalTypes.map((type) => type.title)}
          setValue={setTitleHandler}
        />
        <DropDownPicker
          title={"Hours to invest: "}
          displayedArray={hoursNumberArray}
          setValue={setHoursHandler}
        />
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          onSelect={(date) => setDate(date)}
          // dateFormat="Pp"
        />
      </div>
      <button type="submit" className="add-form-container__content--submit-btn">
        Add
      </button>
    </div>
  );
};

export default AddGoal;
