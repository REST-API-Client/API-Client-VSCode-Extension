import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import RequestMethod from "../features/Request/Method/RequestMethod";

describe("RequestMethod component test", () => {
  it("should display correct default select option", () => {
    const { getByRole } = render(<RequestMethod />);
    const selectElement = getByRole("option", {
      name: "GET",
    }) as HTMLSelectElement;
    expect(selectElement.options).toBe(true);
  });

  it("should display the correct number of options", () => {
    const { getAllByRole } = render(<RequestMethod />);

    expect(getAllByRole("option").length).toBe(5);
  });

  it("should allow user to select request method", async () => {
    const { getByRole } = render(<RequestMethod />);
    await waitFor(() =>
      userEvent.selectOptions(
        getByRole("combobox"),

        getByRole("option", { name: "POST" }),
      ),
    );

    const selectElement = getByRole("option", {
      name: "POST",
    }) as HTMLSelectElement;

    expect(selectElement.options).toBe(true);
    expect(selectElement.options).toBe(false);
  });
});
