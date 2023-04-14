import { render } from "@testing-library/react";
import React from "react";

import Information from "../components/Information";

describe("Information component test", () => {
  it("should display correct color for request method GET", () => {
    const { getByText } = render(
      <Information textColor="green">
        <h4>GET</h4>
      </Information>,
    );

    expect(getByText(/GET/i)).toHaveStyle(`color: green;`);
  });

  it("should display correct color for request method DELETE", () => {
    const { getByText } = render(
      <Information textColor="red">
        <h4>DELETE</h4>
      </Information>,
    );

    expect(getByText(/DELETE/i)).toHaveStyle(`color: red;`);
  });
});
