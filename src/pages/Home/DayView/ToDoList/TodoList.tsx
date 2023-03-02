import { useAppSelector } from "../../../../hooks/hooks";
import { selectList } from "../../../../store/selectors/selectList";
import TodoComp from "./Todo/TodoComp";
import "./TodoList.scss";

const TodoList = () => {
  const todoList = useAppSelector((state) =>
    selectList(state.ui.displayingDate, state.data.lists)
  );
  const dispayingArray = [...todoList].sort(
    (a, b) => parseInt(a.time!) - parseInt(b.time!)
  );
  return (
    <div className="todoList-container">
      <h2>Todo list</h2>
      <ul>
        {dispayingArray.map((todo) => (
          <TodoComp key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
