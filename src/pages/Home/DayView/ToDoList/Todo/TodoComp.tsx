import React from "react";
import CheckBox from "../../../../../components/UI/CheckBox/CheckBox";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/hooks";
import { Todo } from "../../../../../model/Todo";
import { dataActions } from "../../../../../store/slices/data-slice";
import "./Todo.scss";
import { MdCancel } from "react-icons/md";
import { generateArrayBySize } from "../../../../../helpers/generateArrays";

const TodoComp: React.FC<{ todo: Todo }> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const { displayingDate } = useAppSelector((state) => state.ui);

  const removeTodoHandler = () => {
    dispatch(dataActions.removeTodo({ date: displayingDate, id: todo.id }));
  };

  const checkboxJSX = todo.investedHours ? (
    <div className="todo__checkboxes-container">
      {generateArrayBySize(todo.investedHours).map((item) => (
        <CheckBox checked={todo.completed} clickHandler={() => {}} key={item} />
      ))}
    </div>
  ) : (
    <CheckBox checked={todo.completed} clickHandler={() => {}} />
  );

  return (
    <li className="todo">
      <button onClick={removeTodoHandler} className="todo__x">
        <MdCancel />
      </button>
      {todo.time !== "25:00" ? (
        <h4 className="todo__time"> {todo.time}</h4>
      ) : null}
      <h4 className="todo__title">{todo.title}</h4>
      {checkboxJSX}
    </li>
  );
};

export default TodoComp;
