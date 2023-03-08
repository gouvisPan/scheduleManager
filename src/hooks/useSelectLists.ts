import { selectGoals } from "../store/selectors/selectGoalList";
import { selectTodos } from "../store/selectors/selectTodoList";
import { useAppSelector } from "./hooks";

const useSelectLists = () => {
  const todoList = useAppSelector((state) =>
    selectTodos(state.ui.displayingDate, state.data.todoLists)
  );
  const goalList = useAppSelector((state) =>
    selectGoals(state.ui.displayingDate, state.data.goalLists)
  );
  const sortedTodos = [...todoList].sort(
    (a, b) => parseInt(a.time!) - parseInt(b.time!)
  );
  return { sortedTodos, goalList };
};

export default useSelectLists;
