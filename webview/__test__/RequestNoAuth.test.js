import { render } from "@testing-library/react";
import React from "react";

import RequestNoAuth from "../features/Request/Authorization/RequestNoAuth";

describe("RequestNoAuth component test", () => {
  it("should display correct message when auth option is not selected", () => {
    const { getByText } = render(<RequestNoAuth />);

    expect(
      getByText(/This request does not use any authorization./i),
    ).toBeInTheDocument();

    expect(
      getByText(
        /If you want to use authorization, select your authorization type from above./i,
      ),
    ).toBeInTheDocument();
  });
});
