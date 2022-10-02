import { render } from "@testing-library/react";
import EditableTodo from "./EditableTodo";
import { ITodo } from "./interfaces";

const todo: ITodo = {
  id: "1",
  title: "Code!",
  description: "Write some code",
  priority: 2,
};

describe("Tests EditableTodo component", function () {
  it("renders without crashing", function () {
    render(
      <EditableTodo
        todo={todo}
        update={jest.fn}
        remove={jest.fn} />);
  });

  it("contains correct fields", function () {
    const result = render(
      <EditableTodo
        todo={todo}
        update={jest.fn}
        remove={jest.fn} />);

    expect(result.queryByText("Edit")).toBeInTheDocument();
    expect(result.queryByText("Code!")).toBeInTheDocument();
    expect(result.queryByText("Fluffy")).not.toBeInTheDocument();
  });
});