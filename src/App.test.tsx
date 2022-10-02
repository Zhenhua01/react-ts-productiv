import { render } from "@testing-library/react";
import App from "./App";

describe("productiv app", function () {
  it("renders without crashing", function () {
    render(<App />);
  });

  it("contains expected title", function () {
    const result = render(<App />);
    expect(result.queryByText("Prøductïv")).toBeInTheDocument();
  });

  it("contains todo list", function () {
    const result = render(<App />);
    expect(result.queryByText("Todos")).toBeInTheDocument();
  });

  it("rendered quotes app", function () {
    const result = render(<App />);
    expect(result.queryByText("Click here for an inspirational quøte!")).toBeInTheDocument();
  });
});

