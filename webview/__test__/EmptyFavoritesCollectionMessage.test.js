import { render } from "@testing-library/react";
import React from "react";

import EmptyFavoritesCollectionMessage from "../features/Sidebar/Message/EmptyFavoritesCollectionMessage";

describe("EmptyFavoritesCollectionMessage component test", () => {
  it("should display message from children component", () => {
    const { getByText } = render(<EmptyFavoritesCollectionMessage />);

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
