import { render } from "@testing-library/react";
import React from "react";

import EmptySearchResultMessage from "../features/Sidebar/Message/EmptySearchResultMessage";

describe("EmptyHistoryCollectionMessage component test", () => {
  it("should render search input value to empty search result message", () => {
    const { getByText } = render(<EmptySearchResultMessage value="google" />);

    expect(getByText(/google/i)).toBeInTheDocument();
  });
});
