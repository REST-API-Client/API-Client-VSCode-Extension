import { render } from "@testing-library/react";
import React from "react";

import Wrapper from "../components/Wrapper";

describe("Wrapper component test", () => {
  it("should render children component text correctly", () => {
    const { getByText } = render(
      <Wrapper>
        <div>
          <h1>REST API Tester</h1>
          <p>Welcome</p>
        </div>
      </Wrapper>,
    );

    expect(getByText(/REST API Tester/i)).toBeInTheDocument();
  });
});
