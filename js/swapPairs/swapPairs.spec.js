import theoretically from "jest-theories";
import swapPairs from "./swapPairs";

const theories = [
  { input: [], expected: [] },
  { input: null, expected: [] },
  { input: undefined, expected: [] },
  { input: [1], expected: [1] },
  { input: [1, 2, 3, 4], expected: [2, 1, 4, 3] },
  { input: [1, 2, 3, 4, 5], expected: [2, 1, 4, 3, 5] },
  { input: [1, 2, 3, 4, 5, 6], expected: [2, 1, 4, 3, 6, 5] }
];

describe("swapPairs", () => {
  theoretically("the array [{input}]\tshould be swaped like [{expected}]", theories, theory => {
    const output = swapPairs(theory.input);
    expect(output).toEqual(theory.expected);
  });
});
