import { render } from "@testing-library/react";
import React from "react";

import LoadButtonsBlock from "../components/LoadButtonsBlock";
import { COMMON } from "../constants";

describe("LoadButtonsBlock component test", () => {
  it("should render text correctly", () => {
    const { getByText } = render(<LoadButtonsBlock optionsType={COMMON.HEADERS} />);

    expect(getByText(/Set data from file/i)).toBeInTheDocument();
    expect(getByText(/Add data from file/i)).toBeInTheDocument();
  });
});
