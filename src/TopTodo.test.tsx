import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";
import { ITodo } from "./interfaces";

const todo1: ITodo = {
  id: "1",
  title: "Code!",
  description: "Write important code",
  priority: 2,
};

const todo2: ITodo = {
  id: "2",
  title: "Code again!",
  description: "Write less-important code",
  priority: 11,
}

const populatedTodos = [todo1, todo2];

it("tests when todos list is empty", function () {
  const result = render(<TopTodo todos={[]} />);
  expect(result.queryByText("priority")).not.toBeInTheDocument();
});

it("can correctly compare priority values", function () {
  const result = render(<TopTodo todos={populatedTodos} />);
  expect(result.queryByText("Write important code")).toBeInTheDocument();
  expect(result.queryByText("Write less-important code")).not.toBeInTheDocument();
});