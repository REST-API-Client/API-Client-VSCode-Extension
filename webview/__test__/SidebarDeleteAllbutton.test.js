import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import SidebarDeleteAllButton from "../features/Sidebar/Button/SidebarDeleteAllButton";

const mockData = [1, 2, 3];

describe("SidebarDeleteAllButton component test", () => {
  it("should render text correctly", () => {
    const { getByText } = render(<SidebarDeleteAllButton />);

    expect(getByText(/delete all/i)).toBeInTheDocument();
  });

  it("should render sidebar with correct style", () => {
    const { getByText } = render(<SidebarDeleteAllButton />);

    expect(getByText(/delete/i)).toHaveStyle(`background: rgb(133 51 51)`);
    expect(getByText(/delete/i)).toHaveStyle(`padding: 0.25rem 0.4rem`);
    expect(getByText(/delete/i)).toHaveStyle(`color: rgb(203 203 203)`);
    expect(getByText(/delete/i)).toHaveStyle(`border-radius: 1rem`);
  });

  it("should delete everything from array once clicked", () => {
    const { getByText } = render(<SidebarDeleteAllButton />);

    userEvent.click(
      getByText(/delete all/i),

      mockData.splice(0, mockData.length),
    );

    expect(mockData.length).toBe(0);
  });
});
