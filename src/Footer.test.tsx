import { render } from "@testing-library/react";
import Footer from "./Footer";

it("renders with correct footer text", function () {
  const result = render(<Footer />);
  expect(result.queryByText(
    "Prødutïv is copyright ©2022 by Flüffy Data Enterprises, Inc."))
    .toBeInTheDocument();
});