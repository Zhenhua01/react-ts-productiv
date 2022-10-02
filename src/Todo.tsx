import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo({ todo }) {
  return (
      <div className="Todo">
        <div><b>{todo.title}</b> <small>(priority: {todo.priority})</small></div>
        <div><small>{todo.description}</small></div>
      </div>
  );
}

export default Todo;
