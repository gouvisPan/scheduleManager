import { renderWithProviders, screen } from "../../../../../test.utils";
import AddTodo from "../AddTodo";

test("Switch is enabled", () => {
  renderWithProviders(<AddTodo />);

  const timeHeader = screen.getByRole("heading", { name: "Time of the day" });
  expect(timeHeader).toBeInTheDocument();
});
