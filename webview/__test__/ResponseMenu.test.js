import { render } from "@testing-library/react";
import React from "react";

import ResponseMenu from "../features/Response/Menu/ResponseMenu";

describe("ResponseMenu component test", () => {
  it("should render response menu with three options", () => {
    const { getAllByRole } = render(<ResponseMenu />);

    expect(getAllByRole("option").length).toEqual(3);
  });

  it("should render response menu option correctly", () => {
    const { getByText } = render(<ResponseMenu />);

    expect(getByText(/Body/i)).toBeInTheDocument();
    expect(getByText(/Headers/i)).toBeInTheDocument();
  });
});
