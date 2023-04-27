import useSelectLists from "../../../../hooks/useSelectLists";
import GoalComp from "./Items/GoalComp";
import TodoComp from "./Items/TodoComp";
import "./TodoList.scss";

const TodoList = () => {
  const { todoList: Todos, goalList: goals } = useSelectLists();

  return (
    <div className="todoList-container">
      <h2>Todo list</h2>
      <ul>
        {Todos.map((todo) => (
          <TodoComp key={todo.id} todo={todo} />
        ))}
      </ul>
      <h2>Goals</h2>
      <ul>
        {goals.map((goal) => (
          <GoalComp key={goal.id} goal={goal} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
