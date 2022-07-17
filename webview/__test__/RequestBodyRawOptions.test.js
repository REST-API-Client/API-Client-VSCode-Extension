import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import RequestBodyRawOptions from "../features/Request/Body/RequestBodyRawOptions";

describe("RequestBodyRawOptions component test", () => {
  it("should select option should display correct default option", () => {
    const { getByRole } = render(<RequestBodyRawOptions />);

    expect(getByRole("option", { name: "Text" }).selected).toBe(true);
  });

  it("should display the correct number of options", () => {
    const { getAllByRole } = render(<RequestBodyRawOptions />);

    expect(getAllByRole("option").length).toBe(4);
  });

  it("should allow user to select request body raw options", async () => {
    const { getByRole } = render(<RequestBodyRawOptions />);

    await waitFor(() =>
      userEvent.selectOptions(
        getByRole("combobox"),

        getByRole("option", { name: "JavaScript" }),
      ),
    );

    expect(getByRole("option", { name: "JavaScript" }).selected).toBe(true);
    expect(getByRole("option", { name: "Text" }).selected).toBe(false);
  });
});
