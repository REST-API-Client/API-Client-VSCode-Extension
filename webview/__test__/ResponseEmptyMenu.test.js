import { render } from "@testing-library/react";
import React from "react";

import ResponseEmptyMenu from "../features/Response/Empty/ResponseEmptyMenu";

describe("ResponseEmptyMenu component test", () => {
  it("should display correct message when response empty menu", () => {
    const { getByText } = render(<ResponseEmptyMenu />);

    expect(
      getByText(/Enter request URL and click send to get a response/i),
    ).toBeInTheDocument();
  });

  it("should display svg when response is not sent yet", () => {
    const { getByAltText } = render(<ResponseEmptyMenu />);

    expect(getByAltText(/Connection SVG/i)).toBeTruthy();
  });
});
