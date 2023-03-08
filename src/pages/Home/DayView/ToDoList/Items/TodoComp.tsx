import React from "react";
import CheckBox from "../../../../../components/UI/CheckBox/CheckBox";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/hooks";
import { Todo } from "../../../../../model/Todo";
import { dataActions } from "../../../../../store/slices/data-slice";
import "./EventComp.scss";
import { MdCancel } from "react-icons/md";
import { generateArrayBySize } from "../../../../../helpers/generateArrays";

const TodoComp: React.FC<{ todo: Todo }> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const { displayingDate } = useAppSelector((state) => state.ui);

  const removeTodoHandler = () => {
    dispatch(dataActions.removeEvent({ date: displayingDate, event: todo }));
  };

  return (
    <li className="event ">
      <button onClick={removeTodoHandler} className="event__x" type="button">
        <MdCancel />
      </button>
      <h4 className="tevent__time"> {todo.time}</h4>
      <h4 className="event__title">{todo.title}</h4>
      <CheckBox checked={todo.completed} clickHandler={() => {}} />
    </li>
  );
};

export default TodoComp;
