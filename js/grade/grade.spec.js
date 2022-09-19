import theoretically from "jest-theories";
import { calculateGPA } from "./grade";

const theories = [
  { input: ["A+"], expected: 0 }, // looks like invalid value
  { input: ["A"], expected: 4 },
  { input: ["F", "F", "F"], expected: 0 },
  { input: ["A", "A-", "B+", "B", "B-"], expected: 3.3 },
  { input: ["A", "B+", "C-", "A"], expected: 3.3 },
  { input: ["A", "B+", "C-", "A", "F-"], expected: 2.6 } // score down average with invalid value ?
];

describe("numberofones - naive way", () => {
  theoretically("the average grade of {input}\tshould be {expected}", theories, theory => {
    const output = calculateGPA(theory.input);
    expect(output).toBe(theory.expected);
  });
});
