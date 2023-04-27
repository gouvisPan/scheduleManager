import { selectGoals } from "../store/selectors/selectGoalList";
import { selectTodos } from "../store/selectors/selectTodoList";
import { useAppSelector } from "./hooks";

const useSelectLists = () => {
  const todoList = useAppSelector((state) =>
    selectTodos(state.ui.activeDate, state.todos.todoLists)
  );
  const goalList = useAppSelector((state) =>
    selectGoals(state.ui.activeDate, state.goals.goalLists)
  );

  return { todoList, goalList };
};

export default useSelectLists;
