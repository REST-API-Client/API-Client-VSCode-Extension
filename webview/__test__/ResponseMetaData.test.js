import { render } from "@testing-library/react";
import React from "react";

import ResponseMetaData from "../features/Response/MetaData/ResponseMetaData";

const mockData = {
  responseSize: 2600,
  requestTime: 398,
  statusCode: 200,
  statusText: "OK",
};

const errorMockData = {
  responseSize: 12410,
  requestTime: 398,
  statusCode: 404,
  statusText: "Not Found",
};

describe("ResponseMetaData component test", () => {
  it("should render meta data menu properly", () => {
    const { getByText } = render(<ResponseMetaData {...mockData} />);

    expect(getByText(/size:/i)).toBeInTheDocument();
    expect(getByText(/time:/i)).toBeInTheDocument();
    expect(getByText(/status:/i)).toBeInTheDocument();
  });

  it("should render meta data menu with correct data", () => {
    const { getByText } = render(<ResponseMetaData {...mockData} />);

    expect(getByText(/200 OK/i)).toBeInTheDocument();
    expect(getByText(/398ms/i)).toBeInTheDocument();
    expect(getByText(/0.26 KB/i)).toBeInTheDocument();
    expect(getByText(/200 OK/i)).toHaveStyle("color:rgb(66 245 66)");
  });

  it("should render meta data menu with 404 response properly", () => {
    const { getByText } = render(<ResponseMetaData {...errorMockData} />);

    expect(getByText(/404 Not Found/i)).toBeInTheDocument();
    expect(getByText(/398/i)).toBeInTheDocument();
    expect(getByText(/1.24 KB/i)).toBeInTheDocument();
    expect(getByText(/404 Not Found/i)).toHaveStyle("color:rgb(255 100 100)");
  });
});
