import { render } from "@testing-library/react";
import React from "react";

import RequestButton from "../features/Request/Button/RequestButton";

describe("RequestNoAuth component test", () => {
  it("should display correct message when auth option is not selected", () => {
    const { getByText } = render(<RequestButton />);

    expect(getByText(/Send/i)).toBeInTheDocument();
  });
});
