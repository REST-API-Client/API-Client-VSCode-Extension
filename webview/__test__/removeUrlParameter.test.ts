import removeUrlParameter from "../utils/removeUrlParameter";

describe("calculateCollectionTime utility function tests", () => {
  it("should return correct time when milliseconds is passed to a function", () => {
    const firstMockParameter = removeUrlParameter("?");
    const secondMockParameter = removeUrlParameter("https://?google.com");
    const thirdMockParameter = removeUrlParameter("https://facebook.com?");

    expect(firstMockParameter).toBe("");
    expect(secondMockParameter).toBe("https://");
    expect(thirdMockParameter).toBe("https://facebook.com");
  });
});
