import { render } from "@testing-library/react";
import React from "react";

import ResponseErrorMenu from "../features/Response/Error/ResponseErrorMenu";

describe("ResponseErrorMenu component test", () => {
  it("should display correct message when error response is received", () => {
    const { getByText } = render(
      <ResponseErrorMenu type="error" message="unable to find restapiclient" />,
    );

    expect(getByText(/unable to find restapiclient/i)).toBeInTheDocument();
  });

  it("should display correct message when image with correct alt", () => {
    const { getByAltText } = render(
      <ResponseErrorMenu type="unit test" message="unit test purpose" />,
    );

    expect(getByAltText("error")).toBeTruthy();
  });
});
