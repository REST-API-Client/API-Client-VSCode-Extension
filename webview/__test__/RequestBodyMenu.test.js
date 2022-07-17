import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import RequestBodyMenu from "../features/Request/Body/RequestBodySelectMenu";

describe("RequestBodyMenu component test", () => {
  it("should render correct amount of request body option", () => {
    const { getAllByRole } = render(<RequestBodyMenu />);

    expect(getAllByRole("radio").length).toEqual(4);
  });

  it("should render correct radio button when first rendered", async () => {
    const { getByLabelText } = render(<RequestBodyMenu />);

    expect(getByLabelText("None")).toBeChecked();
  });

  it("should render correct request menu when radio button is clicked", async () => {
    const { getByLabelText } = render(<RequestBodyMenu />);

    await userEvent.click(getByLabelText("Form Data"));

    expect(getByLabelText("Form Data")).toBeChecked();
  });
});
