import generateParameterString from "../utils/generateParameterString";

describe("generateParameterString utility function tests", () => {
  it("should should correct parameter string when data is passed to a function", () => {
    const firstMockData = generateParameterString([]);
    const secondMockData = generateParameterString([{ key: "", value: "" }]);
    const thirdMockData = generateParameterString([
      { key: "hello", value: "world" },
    ]);
    const fouthMockData = generateParameterString([
      { key: "carrot", value: "5" },
      { key: "peach", value: "2" },
      { key: "apple", value: "99" },
    ]);
    const fifthMockData = generateParameterString([
      { key: "Asia", value: "Korea" },
      { key: "Asia", value: "Singapore" },
      { key: "Europe", value: "Switzerland" },
      { key: "Europe", value: "Italy" },
      { key: "Europe", value: "Spain" },
    ]);

    expect(firstMockData).toBe("?");
    expect(secondMockData).toBe("?=");
    expect(thirdMockData).toBe("?hello=world");
    expect(fouthMockData).toBe("?carrot=5&peach=2&apple=99");
    expect(fifthMockData).toBe(
      "?Asia=Korea&Asia=Singapore&Europe=Switzerland&Europe=Italy&Europe=Spain",
    );
  });
});
