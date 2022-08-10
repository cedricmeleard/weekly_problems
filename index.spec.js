import theoretically from "jest-theories";
import numberOfOnes from "./index";

describe("numberofones", () => {
  const theories = [
    { input: 0, expected: 0 },
    { input: 1, expected: 1 },
    { input: 2, expected: 1 },
    { input: 11, expected: 4 }, // 1, 10, 11
    { input: 14, expected: 7 }, // 1, 10, 11, 12, 13, 14
    { input: 50, expected: 15 }, // 1, 1x -> 10 + 1 (11), 21, 31, 41,
    { input: 150, expected: 86 }
    //{ input: 15000000, expected: 16000001 }, // will slow down
    //{ input: 1000000000, expected: "too much" } // will go out of bound ?
  ];

  theoretically("the number {input} contains {expected} number 1", theories, theory => {
    const output = numberOfOnes(theory.input);
    expect(output).toBe(theory.expected);
  });
});
