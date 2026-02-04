import calculateCollectionTime from "../utils/calculateCollectionTime";

describe("calculateCollectionTime utility function tests", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2022-07-18T12:00:00.000Z"));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("should return correct time when milliseconds is passed to a function", () => {
    const now = Date.now();

    const firstMockTime = calculateCollectionTime(now - 40 * 24 * 60 * 60 * 1000);
    const secondMockTime = calculateCollectionTime(now);
    const thirdMockTime = calculateCollectionTime(now - 1 * 24 * 60 * 60 * 1000);
    const fourthMockTime = calculateCollectionTime(now - 19 * 60 * 60 * 1000);

    expect(firstMockTime).toBe("40 days ago");
    expect(secondMockTime).toBe("Just now");
    expect(thirdMockTime).toBe("1 day ago");
    expect(fourthMockTime).toBe("19 hours ago");
  });
});
