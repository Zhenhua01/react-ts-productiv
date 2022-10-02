import React from "react";
import { render } from "@testing-library/react";
import TodoApp from "./TodoApp";

const todos = [
  {
    id: 1,
    title: "Code!",
    description: "Write some code",
    priority: 2,
  },
  {
    id: 2,
    title: "Make dinner",
    description: "Cook something healthy",
    priority: 1,
  },
  {
    id: 3,
    title: "Go to bed",
    description: "In bed by 11:15",
    priority: 3,
  },
];

describe('Tests TodoApp component', function () {
  it("Component renders correctly", function () {

    const { container } = render(<TodoApp initialTodos={todos} />);
    expect(container.querySelectorAll(".Todo").length).toEqual(4);
    expect(container.querySelector(".NewTodoForm")).toBeTruthy();
    expect(container).toContainHTML("Top Todo");
  });

  it("Component renders correctly, no initial todos", function () {

    const { container } = render(<TodoApp initialTodos={[]} />);
    expect(container.querySelectorAll(".Todo").length).toEqual(0);
    expect(container.querySelector(".NewTodoForm")).toBeTruthy();
    expect(container).not.toContainHTML("Top Todo");
  });

});