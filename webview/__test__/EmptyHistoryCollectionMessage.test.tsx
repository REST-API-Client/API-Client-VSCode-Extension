import { render } from "@testing-library/react";
import React from "react";

import EmptyHistoryCollectionMessage from "../features/Sidebar/Message/EmptyHistoryCollectionMessage";

describe("EmptyHistoryCollectionMessage component test", () => {
  it("should display correct message when history collection is empty", () => {
    const { getByText } = render(<EmptyHistoryCollectionMessage />);

    expect(
      getByText(/Your history collection seems to be empty./i),
    ).toBeInTheDocument();
    expect(
      getByText(/Start making requests to view your history collection./i),
    ).toBeInTheDocument();
  });
});
