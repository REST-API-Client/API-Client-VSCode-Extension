import { render } from "@testing-library/react";
import React from "react";

import Button from "../components/Button";

describe("Button component test", () => {
  it("should render text correctly", () => {
    const { getByText } = render(<Button primary={false}>Send</Button>);

    expect(getByText(/Send/i)).toBeInTheDocument();
  });

  it("should render children element correctly", () => {
    const { getByText } = render(
      <Button primary={false}>
        <div>
          <h1>Beautify Editor</h1>
        </div>
      </Button>,
    );

    expect(getByText(/Beautify Editor/i)).toBeInTheDocument();
  });

  it("should render primary button with correct style", () => {
    const { container } = render(<Button primary>Send</Button>);

    expect(container.firstChild).toHaveStyle(
      `background-color: rgb(14, 99, 156)`,
    );
    expect(container.firstChild).toHaveStyle(`width: 8rem`);
    expect(container.firstChild).toHaveStyle(`margin-left: 1rem`);
  });

  it("should render non-primary button with correct style", () => {
    const { container } = render(<Button primary={false}>Send</Button>);

    expect(container.firstChild).toHaveStyle(`background-color: ButtonFace;`);
    expect(container.firstChild).toHaveStyle(`width: 12rem`);
    expect(container.firstChild).toHaveStyle(`margin-left: 2.7rem`);
  });

  it("should have correct attribute when value is passed through prop", () => {
    const { getByText } = render(
      <Button primary={false} buttonType="submit">
        Send
      </Button>,
    );

    expect(getByText(/Send/i)).toHaveAttribute("type", "submit");
  });
});
