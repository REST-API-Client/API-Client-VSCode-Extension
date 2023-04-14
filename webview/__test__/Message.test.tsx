import { render } from "@testing-library/react";
import React from "react";

import Message from "../components/Message";

describe("Message component test", () => {
  it("should display message from children component", () => {
    const { getByText } = render(
      <Message>
        <p>This is message children component</p>
      </Message>,
    );

    expect(
      getByText(/This is message children component/i),
    ).toBeInTheDocument();
  });

  it("should render primary message component with correct style", () => {
    const { container } = render(<Message primary>Test</Message>);

    expect(container.firstChild).toHaveStyle(`margin-top: 1rem`);
  });
});
