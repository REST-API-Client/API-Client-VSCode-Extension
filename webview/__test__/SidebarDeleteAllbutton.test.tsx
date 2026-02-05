import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import SidebarDeleteAllButton from "../features/Sidebar/Button/SidebarDeleteAllButton";

describe("SidebarDeleteAllButton component test", () => {
  it("should render text correctly", () => {
    const { getByText } = render(
      <SidebarDeleteAllButton clickHandler={() => undefined} />,
    );

    expect(getByText(/delete all/i)).toBeInTheDocument();
  });

  it("should render sidebar with correct style", () => {
    const { getByText } = render(
      <SidebarDeleteAllButton clickHandler={() => undefined} />,
    );

    expect(getByText(/delete/i)).toHaveStyle(`background: rgb(133 51 51)`);
    expect(getByText(/delete/i)).toHaveStyle(`padding: 0.25rem 0.4rem`);
    expect(getByText(/delete/i)).toHaveStyle(`color: rgb(203 203 203)`);
    expect(getByText(/delete/i)).toHaveStyle(`border-radius: 1rem`);
  });

  it("should call clickHandler when clicked", async () => {
    const mockClickHandler = jest.fn();
    const { getByText } = render(
      <SidebarDeleteAllButton clickHandler={mockClickHandler} />,
    );

    await userEvent.click(getByText(/delete all/i));

    expect(mockClickHandler).toHaveBeenCalled();
  });
});
