import { render } from "@testing-library/react";
import React from "react";

import ResponseBodyMenu from "../features/Response/Body/ResponseBodyMenu";

describe("ResponseBodyMenu component test", () => {
  it("should render correct default response body option", () => {
    const { getByText } = render(<ResponseBodyMenu />);

    expect(getByText(/pretty/i)).toBeInTheDocument();
    expect(getByText(/raw/i)).toBeInTheDocument();
    expect(getByText(/preview/i)).toBeInTheDocument();
  });

  it("should render correct default response body pretty option", () => {
    const { getByRole } = render(<ResponseBodyMenu />);

    expect(getByRole("option", { name: "JSON" }).selected).toBe(true);
  });

  it("should display the correct number of options", () => {
    const { getAllByRole } = render(<ResponseBodyMenu />);

    expect(getAllByRole("option").length).toBe(3);
  });
});
