import { render } from "@testing-library/react";
import React from "react";

import ResponsePreview from "../features/Response/Preview/ResponsePreview";

describe("ResponseEResponsePreviewmptyMenu component test", () => {
  it("should display iframe with correct title", () => {
    const { getByTitle } = render(<ResponsePreview sourceCode="" />);

    expect(getByTitle("Response Data Preview")).toBeInTheDocument();
  });
});
