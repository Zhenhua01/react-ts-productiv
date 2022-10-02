import EditableTodo from "./EditableTodo";
import { ITodo, IEditableTodoList } from "./interfaces";


/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({ todos, update, remove }: IEditableTodoList) {
  const editableTodoList = todos.map((todo: ITodo) => (
    <EditableTodo
      key={todo.id}
      todo={todo}
      update={update}
      remove={remove}
    />
  ));

  return <>{editableTodoList}</>;
}

export default EditableTodoList;
