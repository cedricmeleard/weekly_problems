import theoretically from "jest-theories";
import { numberOfOnes, numberOfOnes_optimized } from "./numberOfOnes";

const theories = [
  { input: 0, expected: 0 },
  { input: 1, expected: 1 },
  { input: 2, expected: 1 },
  { input: 11, expected: 4 }, // 1, 10, 11
  { input: 14, expected: 7 }, // 1, 10, 11, 12, 13, 14
  { input: 50, expected: 15 }, // 1, 1x -> 10 + 1 (11), 21, 31, 41,
  { input: 99, expected: 20 },
  { input: 150, expected: 86 },
  { input: 236, expected: 154 },
  { input: 401, expected: 181 },
  { input: 1337, expected: 812 },
  { input: 65536, expected: 36714 },
  { input: 2097152, expected: 2249189 },
  { input: 15000000, expected: 16000001 } // will slow down a bit - optimized algorithm goes to 2ms where naive takes 10s
  //{ input: 1000000000, expected: "Oh! it's way too much 4 me :'(" } // just freeze sadly
];

describe("numberofones - naive way", () => {
  theoretically("the number {input}\tcontains {expected}\tnumber 1", theories, theory => {
    const output = numberOfOnes(theory.input);
    expect(output).toBe(theory.expected);
  });
});

describe("numberofones - math way", () => {
  theoretically("the number {input}\tcontains {expected}\tnumber 1", theories, theory => {
    const output = numberOfOnes_optimized(theory.input);
    expect(output).toBe(theory.expected);
  });
});
