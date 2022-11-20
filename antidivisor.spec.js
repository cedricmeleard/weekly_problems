import theoretically from "jest-theories";
import antiDivisor from "./antiDivisor";

const theories = [
  { input: 0, expected: [] },
  { input: 1, expected: [] },
  { input: 2, expected: [] },
  { input: 3, expected: [2] },
  { input: 4, expected: [3] },
  { input: 5, expected: [2, 3] },
  { input: 22, expected: [3, 4, 5, 9, 15] },
  { input: 77, expected: [2, 3, 5, 9, 14, 17, 22, 31, 51] }
];

describe("antiDivisor should", () => {
  theoretically("return [{expected}] when passing number input {input}\t", theories, theory => {
    const output = antiDivisor(theory.input);
    expect(output).toEqual(theory.expected);
  });
});
