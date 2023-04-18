import { render } from "@testing-library/react";
import React from "react";

import RequestAuthBearerToken from "../features/Request/Authorization/RequestAuthBearerToken";
import useStore from "../store/useStore";

jest.mock("../store/useStore", () => jest.fn());

describe("RequestAuthBearerToken component test", () => {
  it("should display the correct input placeholder text", () => {
    useStore.mockImplementationOnce(() => ({
      authData: { username: "", password: "", token: "" },
    }));

    const { getByPlaceholderText } = render(<RequestAuthBearerToken />);

    expect(getByPlaceholderText(/Token/i)).toBeInTheDocument();
  });

  it("should display the data from requestDataSlice", () => {
    useStore.mockImplementationOnce(() => ({
      authDataToken: "secret token value!!",
    }));

    const { getByPlaceholderText } = render(<RequestAuthBearerToken />);

    expect(getByPlaceholderText("token").value).toBe("secret token value!!");
  });
});
