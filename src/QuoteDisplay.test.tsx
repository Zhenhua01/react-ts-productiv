import { render, fireEvent } from "@testing-library/react";
import QuoteDisplay from "./QuoteDisplay";

describe("QuoteDisplay Tests", function () {

  const quote = {
      "text": "Society develops wit, but its contemplation alone forms genius.",
      "author": "Madame de Stael"
  };

  it("renders without crashing", function () {
    render(<QuoteDisplay getQuote={jest.fn} quote={null} />);
  });

  it("renders correct button when a quote is not provided", function () {
    const result = render(<QuoteDisplay getQuote={jest.fn} quote={null} />);
    expect(result.queryByText("Click here for an inspirational quøte!")).toBeInTheDocument();
    expect(result.queryByText("Nü quøte")).not.toBeInTheDocument();
  });

  it("renders correct button when a quote is provided", function () {
    const result = render(<QuoteDisplay getQuote={jest.fn} quote={quote} />);
    expect(result.queryByText("Click here for an inspirational quøte!")).not.toBeInTheDocument();
    expect(result.queryByText("Nü quøte")).toBeInTheDocument();
  });

  it("renders correct button after a quote is requested by clicking button", function () {
    function handleClick() {
      expect(true).toBe(true);
    }
    expect.assertions(1);
    const { container } = render(<QuoteDisplay quote={null} getQuote={handleClick} />);
    const button = container.querySelector(".QuoteDisplay-button");
    fireEvent.click(button!);
  });
});