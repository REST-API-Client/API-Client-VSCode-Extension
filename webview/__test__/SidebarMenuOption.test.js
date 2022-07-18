import { render } from "@testing-library/react";
import React from "react";

import SidebarMenuOption from "../features/Sidebar/Menu/SidebarMenuOption";
import useStore from "../store/useStore";

jest.mock("../store/useStore", () => jest.fn());

describe("SidebarMenuOption component test", () => {
  it("should render empty history collection message", () => {
    useStore.mockImplementationOnce(() => ({
      sidebarOption: "History",
      userRequestHistory: [],
    }));

    const { getByText } = render(<SidebarMenuOption />);

    expect(
      getByText(/Your history collection seems to be empty./i),
    ).toBeInTheDocument();
    expect(
      getByText(/Start making requests to view your history collection./i),
    ).toBeInTheDocument();
  });

  it("should render empty favorites collection message", () => {
    useStore.mockImplementationOnce(() => ({
      sidebarOption: "Favorites",
      userRequestHistory: [],
    }));

    const { getByText } = render(<SidebarMenuOption />);

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
