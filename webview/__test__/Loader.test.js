import { render } from "@testing-library/react";
import React from "react";

import Loader from "../components/Loader";

describe("Loader component test", () => {
  it("should display loading message correctly", () => {
    const { getByText } = render(<Loader />);

    expect(getByText(/Sending request.../i)).toBeInTheDocument();
  });
});
