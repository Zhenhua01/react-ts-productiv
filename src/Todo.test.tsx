import { render } from "@testing-library/react";
import Todo from "./Todo";

const todo = {
  id: 1,
  title: "Code!",
  description: "Write some code",
  priority: 2,
};

it("renders with correct Todo text", function () {
  const result = render(<Todo todo={todo} />);
  expect(result.queryByText(
    "Write some code")).toBeInTheDocument();
});

it("renders with correct Todo text", function () {
  const result = render(<Todo todo={todo} />);
  expect(result.queryByText(
    "Code!")).toBeInTheDocument();
});

it("renders with correct Todo text", function () {
  const result = render(<Todo todo={todo} />);
  expect(result.queryByText(
    "(priority: 2)")).toBeInTheDocument();
});