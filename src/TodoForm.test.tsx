import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("TodoForm Tests", function () {

  it("renders without crashing", function () {
    render(<TodoForm handleSave={jest.fn}/>);
  });

  it("stores priority as an integer", function () {

    function handleSave(formData) {
      expect(formData.priority).toEqual(expect.any(Number));
    }

    const { container } = render(<TodoForm handleSave={handleSave} />);

    const submitFormButton = container.querySelector(".NewTodoForm-addBtn");
    fireEvent.click(submitFormButton);
    expect.assertions(1);

  });
});