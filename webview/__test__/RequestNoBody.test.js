import { render } from "@testing-library/react";
import React from "react";

import RequestNoBody from "../features/Request/Body/RequestNoBody";

describe("RequestNoBody component test", () => {
  it("should display correct message when body option is not selected", () => {
    const { getByText } = render(<RequestNoBody />);

    expect(
      getByText(/This request does not have a body./i),
    ).toBeInTheDocument();

    expect(
      getByText(
        /If you want body in your request, select your body option from above./i,
      ),
    ).toBeInTheDocument();
  });
});
