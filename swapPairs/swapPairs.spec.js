import theoretically from "jest-theories";
import swapPairs from "./swapPairs";

const theories = [{ input: [], expected: [] }];

describe("swapPairs", () => {
  theoretically("the array [{input}]\tshould be swaped like [{expected}]", theories, theory => {
    const output = swapPairs(theory.input);
    expect(output).toEqual(theory.expected);
  });
});
