import theoretically from "jest-theories";
import { ordinal } from "./ordinal";

const theories = [
  { input: 1, expected: "1st" },
  { input: 2, expected: "2nd" },
  { input: 3, expected: "3rd" },
  { input: 4, expected: "4th" },
  { input: 10, expected: "10th" },
  { input: 11, expected: "11th" },
  { input: 57, expected: "57th" },
  { input: 111, expected: "111th" },
  { input: 1111, expected: "1111th" },
  { input: 12345672, expected: "12345672nd" }
];

describe("ordinal", () => {
  theoretically("the ordinal of {input}\tshould be {expected}", theories, theory => {
    const output = ordinal(theory.input);
    expect(output).toBe(theory.expected);
  });
});
