import { useState } from "react";
import { IFormData, IFormProp } from "./interfaces"

const initialData: IFormData = {
  title: "",
  description: "",
  priority: 1
}

/** Form for adding.
 *
 * Props:
 * - initialFormData
 * - handleSave: function to call in parent.
 *
 * { TodoApp, EditableTodo } -> TodoForm
 */

function TodoForm({ handleSave, initialFormData=initialData }: IFormProp) {

  const [formData, setFormData] = useState(initialFormData);

  /** Update form input. */
  function handleChange(evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    handleSave(formData);
    setFormData(initialFormData);
  }

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>

      <div className="mb-3">
        <input
          id="newTodo-title"
          name="title"
          className="form-control"
          placeholder="Title"
          onChange={handleChange}
          value={formData.title}
          aria-label="Title"
          required
        />
      </div>

      <div className="mb-3">
        <textarea
          id="newTodo-description"
          name="description"
          className="form-control"
          placeholder="Description"
          onChange={handleChange}
          value={formData.description}
          aria-label="Description"
          required
        />
      </div>

      <div className="mb-3 d-flex justify-content-between">
        <div className="w-75 d-flex justify-content-between">
          <label htmlFor="newTodo-priority"
            className="d-inline-flex">Priority:&nbsp;&nbsp;
          </label>
          <select id="newTodo-priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="form-control form-control-sm d-inline-flex"
          >
            <option value={1}>Ultra-Über</option>
            <option value={2}>Über</option>
            <option value={3}>Meh</option>
          </select>
        </div>
        <button className="btn-primary rig btn btn-sm NewTodoForm-addBtn">
          Gø!
        </button>
      </div>

    </form>
  );
}

export default TodoForm;
