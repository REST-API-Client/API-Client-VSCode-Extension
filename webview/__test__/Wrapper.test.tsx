import { render } from "@testing-library/react";
import React from "react";

import Wrapper from "../components/Wrapper";

describe("Wrapper component test", () => {
  it("should render children component text correctly", () => {
    const { getByText } = render(
      <Wrapper>
        <div>
          <h1>Welcome to REST API Tester</h1>
        </div>
      </Wrapper>,
    );

    expect(getByText(/Welcome to REST API Tester/i)).toBeInTheDocument();
  });
});
