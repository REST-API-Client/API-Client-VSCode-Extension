import { render } from "@testing-library/react";
import React from "react";

import InputWrapper from "../components/InputWrapper";

describe("InputWrapper component test", () => {
  it("should render children component text correctly", () => {
    const { getByText } = render(
      <InputWrapper>
        <h1>Request url input</h1>
      </InputWrapper>,
    );

    expect(getByText(/Request url input/i)).toBeInTheDocument();
  });
});
