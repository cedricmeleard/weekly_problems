import theoretically from "jest-theories";
import { combineStrings } from "./combineStrings";

const theories = [
  {
    input: {
      strings: ["a", "b", "c", "d", "e", "f", "g"],
      size: 0
    },
    expected: []
  },
  {
    input: {
      strings: ["alpha", "beta", "gamma", "delta", "epsilon"],
      size: 3
    },
    expected: [] // no word should fit
  },
  {
    input: {
      strings: ["a", "b", "c", "d", "e", "f", "g"],
      size: 1
    },
    expected: ["a", "b", "c", "d", "e", "f", "g"]
  },
  {
    input: {
      strings: ["a", "b", "c", "d", "e", "f", "g"],
      size: 5
    },
    expected: ["a b c", "d e f", "g"]
  },
  {
    input: {
      strings: ["a", "b", "c", "d", "e", "f", "g"],
      size: 12
    },
    expected: ["a b c d e f", "g"]
  },
  {
    input: {
      strings: ["alpha", "beta", "gamma", "delta", "epsilon"],
      size: 20
    },
    expected: ["alpha beta gamma", "delta epsilon"]
  }
];

describe("combineStrings should", () => {
  theoretically("return [{expected}]\twhen passing [{input.strings}] and {input.size}", theories, theory => {
    const output = combineStrings(theory.input.strings, theory.input.size);
    expect(output).toEqual(theory.expected);
  });
});
