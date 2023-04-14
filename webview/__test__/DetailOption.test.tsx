import { render } from "@testing-library/react";
import React from "react";

import DetailOption from "../components/DetailOption";

describe("DetailOption component test", () => {
  it("should render children component text correctly", () => {
    const { getByText } = render(
      <DetailOption>
        <h1>Detail Options child component</h1>
      </DetailOption>,
    );

    expect(getByText(/Detail Options child component/i)).toBeInTheDocument();
  });

  it("should render children element correctly", () => {
    const { getAllByRole } = render(
      <DetailOption>
        <ul>
          <li>Params</li>
          <li>Authorization</li>
          <li>Headers</li>
          <li>Body</li>
          <li>Code Snippet</li>
        </ul>
      </DetailOption>,
    );

    expect(getAllByRole("listitem").length).toEqual(5);
  });
});
