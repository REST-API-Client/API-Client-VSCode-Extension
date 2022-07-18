import calculateCollectionTime from "../utils/calculateCollectionTime";

describe("calculateCollectionTime utility function tests", () => {
  it("should return correct time when milliseconds is passed to a function", () => {
    const firstMockTime = calculateCollectionTime(1654698982525);
    const secondMockTime = calculateCollectionTime(1675694952821);
    const thirdMockTime = calculateCollectionTime(1657998982525);
    const fourthMockTime = calculateCollectionTime(1658086010977);

    expect(firstMockTime).toBe("40 days ago");
    expect(secondMockTime).toBe("Just now");
    expect(thirdMockTime).toBe("1 day ago");
    expect(fourthMockTime).toBe("19 hours ago");
  });
});
