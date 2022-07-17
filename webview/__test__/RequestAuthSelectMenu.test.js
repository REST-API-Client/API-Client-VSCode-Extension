import { fireEvent, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import RequestAuthSelectMenu from "../features/Request/Authorization/RequestAuthSelectMenu";

describe("RequestAuthSelectMenu component test", () => {
  it("should select option should display correct default option", () => {
    const { getByRole } = render(<RequestAuthSelectMenu />);

    expect(getByRole("option", { name: "No Auth" }).selected).toBe(true);
  });

  it("should display the correct number of options", () => {
    const { getAllByRole } = render(<RequestAuthSelectMenu />);

    expect(getAllByRole("option").length).toBe(3);
  });

  it("should allow user to select request method", async () => {
    const { getByRole } = render(<RequestAuthSelectMenu />);

    await waitFor(() =>
      userEvent.selectOptions(
        getByRole("combobox"),

        getByRole("option", { name: "Basic Auth" }),
      ),
    );

    expect(getByRole("option", { name: "Basic Auth" }).selected).toBe(true);
    expect(getByRole("option", { name: "No Auth" }).selected).toBe(false);
  });

  it("should display basic auth input placeholder text correctly", () => {
    const { getByRole, getByPlaceholderText } = render(
      <RequestAuthSelectMenu />,
    );

    userEvent.selectOptions(
      getByRole("combobox"),

      getByRole("option", { name: "Basic Auth" }),
    );

    expect(getByPlaceholderText(/Username/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/Password/i)).toBeInTheDocument();
  });

  it("should change basic auth username input value when user types", () => {
    const usernameValue = "somethingAwesomeID";
    const { getByRole } = render(<RequestAuthSelectMenu />);

    userEvent.selectOptions(
      getByRole("combobox"),

      getByRole("option", { name: "Basic Auth" }),
    );

    fireEvent.change(getByRole("option", { name: "Basic Auth" }), {
      target: { value: usernameValue },
    });

    expect(getByRole("option", { name: "Basic Auth" }).value).toBe(
      usernameValue,
    );
  });

  it("should change basic auth password input value when user types", async () => {
    const passwordValue = "someSecretPassword!@#";

    const { getByRole } = render(<RequestAuthSelectMenu />);

    userEvent.selectOptions(
      getByRole("combobox"),

      getByRole("option", { name: "Basic Auth" }),
    );

    await waitFor(() => userEvent.type(getByRole("textbox"), passwordValue));

    expect(getByRole("textbox")).toHaveValue(passwordValue);
  });
});
