import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import ResponseBodyMenuOption from "../features/Response/Body/ResponseBodyMenuOption";

describe("ResponseBodyMenu component test", () => {
  it("should render correct default response body option", () => {
    const { getByText } = render(<ResponseBodyMenuOption />);

    expect(getByText(/json/i)).toBeInTheDocument();
    expect(getByText(/html/i)).toBeInTheDocument();
    expect(getByText(/text/i)).toBeInTheDocument();
  });

  it("should render correct default response body pretty option", () => {
    const { getByRole } = render(<ResponseBodyMenuOption />);

    expect(getByRole("option", { name: "JSON" }).selected).toBe(true);
  });

  it("should display the correct number of options", () => {
    const { getAllByRole } = render(<ResponseBodyMenuOption />);

    expect(getAllByRole("option").length).toBe(3);
  });

  it("should allow user to select body menu option", async () => {
    const { getByRole } = render(<ResponseBodyMenuOption />);

    await userEvent.selectOptions(
      getByRole("combobox"),

      getByRole("option", { name: "HTML" }),
    );

    expect(getByRole("option", { name: "HTML" }).selected).toBe(true);
    expect(getByRole("option", { name: "JSON" }).selected).toBe(false);

    await userEvent.selectOptions(
      getByRole("combobox"),

      getByRole("option", { name: "Text" }),
    );

    expect(getByRole("option", { name: "Text" }).selected).toBe(true);
  });
});
