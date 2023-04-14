import { render } from "@testing-library/react";
import React from "react";

import MenuOption from "../components/MenuOption";

describe("MenuOption component test", () => {
  it("should render children element correctly", () => {
    const { getAllByRole } = render(
      <MenuOption currentOption="Korea" menuOption="Korea">
        <ul>
          <li>Korea</li>
          <li>USA</li>
          <li>Japan</li>
          <li>Switzerland</li>
        </ul>
      </MenuOption>,
    );

    expect(getAllByRole("listitem").length).toEqual(4);
  });
});
