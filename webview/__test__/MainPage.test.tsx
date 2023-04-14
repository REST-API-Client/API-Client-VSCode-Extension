import { render } from "@testing-library/react";
import React from "react";

import SidebarPage from "../pages/SidebarPage";

describe("SidebarPage component test", () => {
  it("should display default menu with correct message", () => {
    const { getByText } = render(<SidebarPage />);

    expect(getByText("History")).toBeInTheDocument();
    expect(getByText("Favorites")).toBeInTheDocument();
    expect(
      getByText("Your history collection seems to be empty."),
    ).toBeInTheDocument();
    expect(
      getByText("Start making requests to view your history collection."),
    ).toBeInTheDocument();
  });
});
