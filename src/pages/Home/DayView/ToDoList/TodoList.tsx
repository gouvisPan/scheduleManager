import { useAppSelector } from "../../../../hooks/hooks";
import useSelectLists from "../../../../hooks/useSelectLists";
import { Todo } from "../../../../model/Todo";
import { selectGoals } from "../../../../store/selectors/selectGoalList";
import { selectTodos } from "../../../../store/selectors/selectTodoList";
import GoalComp from "./Items/GoalComp";
import TodoComp from "./Items/TodoComp";
import "./TodoList.scss";

const TodoList = () => {
  const { sortedTodos: Todos, goalList: goals } = useSelectLists();

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
