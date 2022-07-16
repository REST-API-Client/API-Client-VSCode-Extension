import { render, screen } from "@testing-library/react";
import React from "react";

import Button from "../components/Button";

describe("Button Component test", () => {
  it("Should render children", () => {
    render(
      <Button>
        <h1>It works?!</h1>
      </Button>,
    );

    const text = screen.getByText(/It works?1/i);

    expect(text).toBeInTheDocument();
  });
});
