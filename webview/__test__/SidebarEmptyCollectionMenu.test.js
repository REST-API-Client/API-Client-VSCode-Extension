import { render } from "@testing-library/react";
import React from "react";

import SidebarEmptyCollectionMenu from "../features/Sidebar/Menu/SidebarEmptyCollectionMenu";

describe("SidebarEmptyCollectionMenu component test", () => {
  it("should display correct empty history collection menu", () => {
    const { getByText } = render(
      <SidebarEmptyCollectionMenu currentSidebarOption="History" />,
    );

    expect(
      getByText(/Your history collection seems to be empty./i),
    ).toBeInTheDocument();
    expect(
      getByText(/Start making requests to view your history collection./i),
    ).toBeInTheDocument();
  });

  it("should display correct empty favorites collection menu", () => {
    const { getByText } = render(
      <SidebarEmptyCollectionMenu currentSidebarOption="Favorites" />,
    );

    expect(
      getByText(/Your favorites collection seems to be empty./i),
    ).toBeInTheDocument();
    expect(
      getByText(
        /Press the heart icon from your history collection to add it to your favorites collection./i,
      ),
    ).toBeInTheDocument();
  });
});
