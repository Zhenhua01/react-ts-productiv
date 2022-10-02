import Todo from "./Todo";
import { ITodo } from "./interfaces";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({ todos }: { todos: ITodo[]}) {
  if (todos.length === 0) return null;

  // lowest-priority # is the highest priority
  let top = todos.reduce(
      (acc: ITodo, cur: ITodo) =>
      cur.priority < acc.priority ? cur : acc, todos[0]);

  return <Todo todo={top} />;
}

export default TopTodo;