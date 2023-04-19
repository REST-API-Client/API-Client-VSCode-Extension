import { fireEvent, render } from "@testing-library/react";
import React from "react";

import RequestUrl from "../features/Request/Url/RequestUrl";

describe("RequestUrl component test", () => {
  it("should display input placeholder text correctly", () => {
    const { getByPlaceholderText } = render(<RequestUrl />);

    expect(getByPlaceholderText(/Enter Request URL/i)).toBeInTheDocument();
  });

  it("should change value when user inputs value", () => {
    const { getByPlaceholderText } = render(<RequestUrl />);

    const requestUrlInputElement = getByPlaceholderText(/Enter Request URL/i);

    const testInputValue = "https://google.com";

    fireEvent.change(requestUrlInputElement, {
      target: { value: testInputValue },
    });

    expect(requestUrlInputElement.value).toBe(testInputValue);
  });
});
