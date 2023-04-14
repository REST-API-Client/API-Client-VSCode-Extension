import { render } from "@testing-library/react";
import React from "react";

import SidebarGuideMenu from "../features/Sidebar/Guide/SidebarGuideMenu";

describe("SidebarGuideMenu component test", () => {
  it("should display correct guide message when extension activity icon is clicked", () => {
    const { getByText } = render(<SidebarGuideMenu />);

    expect(
      getByText(
        /To start sending HTTP requests, press the `Open Menu` button below./i,
      ),
    ).toBeInTheDocument();
  });
});
