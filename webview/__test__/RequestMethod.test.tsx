import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import RequestMethod from "../features/Request/Method/RequestMethod";

describe("RequestMethod component test", () => {
  it("should display correct default select option", () => {
    const { getByRole } = render(<RequestMethod />);
    const optionElement = getByRole("option", {
      name: "GET",
    }) as HTMLOptionElement;
    expect(optionElement.selected).toBe(true);
  });

  it("should display the correct number of options", () => {
    const { getAllByRole } = render(<RequestMethod />);

    expect(getAllByRole("option").length).toBe(7);
  });

  it("should allow user to select request method", async () => {
    const { getByRole } = render(<RequestMethod />);
    await waitFor(() =>
      userEvent.selectOptions(
        getByRole("combobox"),

        getByRole("option", { name: "POST" }),
      ),
    );

    const optionElement = getByRole("option", {
      name: "POST",
    }) as HTMLOptionElement;

    expect(optionElement.selected).toBe(true);
  });
});
