import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

const todo = {
  id: 1,
  title: "Code!",
  description: "Write some code",
  priority: 2,
};

describe("Tests EditableTodo component", function () {
  it("renders without crashing", function () {
    render(<EditableTodo todo={todo} />);
  });

  it("contains correct fields", function () {
    const result = render(<EditableTodo todo={todo} />)

    expect(result.queryByText("Edit")).toBeInTheDocument();
    expect(result.queryByText("Code!")).toBeInTheDocument();
    expect(result.queryByText("Fluffy")).not.toBeInTheDocument();
  });

  // it("delete button should call delete", function () {
  //   const removeMock = jest.fn();
  //   removeMock.mockClear();

  //   const { container } = render(<EditableTodo todo={todo} remove={removeMock}/>)
  //   const deleteButton = container.querySelector(
  //       ".EditableTodo-delBtn");
  //   fireEvent(deleteButton, "click");

  //   expect(removeMock).toHaveBeenCalledTimes(1);
  // });
});