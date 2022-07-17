import { render } from "@testing-library/react";
import React from "react";

import RequestBodyFormatButton from "../features/Request/Button/RequestBodyFormatButton";

describe("RequestBodyFormatButton component test", () => {
  it("should render request body format button text correctly", () => {
    const { getByText } = render(<RequestBodyFormatButton />);

    expect(getByText(/Beautify Editor/i)).toBeInTheDocument();
  });

  it("should render primary button with correct style", () => {
    const { getByText } = render(<RequestBodyFormatButton />);

    expect(getByText("Beautify Editor")).toHaveStyle(
      `background-color: ButtonFace`,
    );
    expect(getByText("Beautify Editor")).toHaveStyle(`width: 12rem`);
    expect(getByText("Beautify Editor")).toHaveStyle(`margin-left: 2.7rem`);
  });
});
