import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import CopyIcon from "../components/CopyIcon";

const originalClipboard = { ...global.navigator.clipboard };

const handleCopyIconClick = (value) => {
  navigator.clipboard.writeText(value);
};

beforeEach(() => {
  let clipboardData = "";

  const mockClipboard = {
    writeText: jest.fn((data) => {
      clipboardData = data;
    }),
    readText: jest.fn(() => {
      return clipboardData;
    }),
  };
  global.navigator.clipboard = mockClipboard;
});

afterEach(() => {
  jest.resetAllMocks();
  global.navigator.clipboard = originalClipboard;
});

describe("CopyIcon component test", () => {
  it("should copy code to clipboard when icon is clicked", async () => {
    const stringValue = "Very important REST API Client code 🧐";

    const { getByRole } = render(
      <CopyIcon handleClick={handleCopyIconClick} value={stringValue} />,
    );

    await userEvent.click(getByRole("button"));

    expect(navigator.clipboard.readText()).toBe(stringValue);
    expect(navigator.clipboard.writeText).toBeCalledTimes(1);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(stringValue);
  });
});
