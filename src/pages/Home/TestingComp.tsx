import React from "react";
import "./testStyles.scss";
import { persistor } from "../../store/structure/index";
import { useAppDispatch } from "../../hooks/hooks";
import {
  deleteTodo,
  getAllTodos,
  getTodo,
  updateTodo,
} from "../../store/Todos/aync-thunks";
import { Todo } from "../../model/Todo";

const TestingComp = () => {
  const dispatch = useAppDispatch();
  const testTodo: Todo = {
    id: "6444fd46c9c8cbeafbd98f3d",
    completed: false,
    date: "2020-01-01",
    title: "test",
  };

  const resetClickHandler = () => {
    persistor.purge();
  };

  return (
    <div className="test">
      <button onClick={resetClickHandler}>Reset Store</button>
      <button onClick={() => dispatch(getAllTodos())}>Get All</button>
      <button onClick={() => dispatch(getTodo("6444fd46c9c8cbeafbd98f3d"))}>
        Get
      </button>
      <button onClick={() => dispatch(updateTodo(testTodo))}>Update</button>
      <button onClick={() => dispatch(deleteTodo("6444bc99691b5501529c29fc"))}>
        Delete
      </button>
    </div>
  );
};

export default TestingComp;
