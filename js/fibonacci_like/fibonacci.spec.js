import theoretically from "jest-theories";
import { fibonacci } from "./fibonacci";

const theories = [
  { input: [3, 7, -1], expected: [] },
  { input: [3, 7, 1], expected: [3] },
  { input: [3, 7, 2], expected: [3, 7] },
  { input: [3, 7, 5], expected: [3, 7, 10, 17, 27] },
  { input: [10, 20, 5], expected: [10, 20, 30, 50, 80] }
];

describe("fibonacci should", () => {
  theoretically("the ordinal of {input}\tshould be {expected}", theories, theory => {
    const output = fibonacci(theory.input[0], theory.input[1], theory.input[2]);
    expect(output).toEqual(theory.expected);
  });
});
