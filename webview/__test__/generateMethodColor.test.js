import generateMethodColor from "../utils/generateMethodColor";

describe("generateMethodColor utility function tests", () => {
  it("Should return color rgb color depending on request method", () => {
    const getMethodColor = generateMethodColor("get");
    const postMethodColor = generateMethodColor("post");
    const putMethodColor = generateMethodColor("put");
    const patchMethodColor = generateMethodColor("patch");
    const deleteMethodColor = generateMethodColor("delete");

    expect(getMethodColor).toBe("rgb(12 187 82)");
    expect(postMethodColor).toBe("rgb(255 180 0)");
    expect(putMethodColor).toBe("rgb(9 123 237)");
    expect(patchMethodColor).toBe("var(--default-text)");
    expect(deleteMethodColor).toBe("rgb(235 32 19)");
  });
});
