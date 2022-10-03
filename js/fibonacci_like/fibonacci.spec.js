import theoretically from "jest-theories";
import { fibonacci, isFibonacci } from "./fibonacci";

const theories = [
  { input: [3, 7, -1], expected: [] },
  { input: [3, 7, 1], expected: [3] },
  { input: [3, 7, 2], expected: [3, 7] },
  { input: [3, 7, 5], expected: [3, 7, 10, 17, 27] },
  { input: [10, 20, 5], expected: [10, 20, 30, 50, 80] }
];

describe("fibonacci should", () => {
  theoretically("return {expected} when passing inputs {input}\t", theories, theory => {
    const output = fibonacci(theory.input[0], theory.input[1], theory.input[2]);
    expect(output).toEqual(theory.expected);
  });
});

const reversetheories = [
  { input: [], expected: true },
  { input: [3], expected: true },
  { input: [3, 7], expected: true },
  { input: [3, 7, 9], expected: false },
  { input: [3, 4, 9], expected: false },
  { input: [3, 7, 10], expected: true },
  { input: [3, 7, 10, 17], expected: true },
  { input: [3, 7, 10, 17, 27], expected: true },
  { input: [3, 7, 10, 17, 27, 44], expected: true },
  { input: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181], expected: true },
  { input: fibonacci(0, 1, 20), expected: true }
];

describe("isFibonacci should", () => {
  theoretically("return {expected} when {input}\t", reversetheories, theory => {
    const output = isFibonacci(theory.input);
    expect(output).toEqual(theory.expected);
  });
});
