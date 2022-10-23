import theoretically from "jest-theories";
import passDoors from "./passdoors";

const theories = [
  { input: { n: 7, numberOfPasses: 1 }, expected: [0, 0, 0, 0, 0, 0, 0] },
  { input: { n: 7, numberOfPasses: 2 }, expected: [0, 1, 0, 1, 0, 1, 0] },
  { input: { n: 7, numberOfPasses: 3 }, expected: [0, 1, 1, 1, 0, 0, 0] },
  { input: { n: 7, numberOfPasses: 4 }, expected: [0, 1, 1, 0, 0, 0, 0] },
  { input: { n: 7, numberOfPasses: 5 }, expected: [0, 1, 1, 0, 1, 0, 0] },
  { input: { n: 8, numberOfPasses: 1 }, expected: [0, 0, 0, 0, 0, 0, 0, 0] },
  { input: { n: 8, numberOfPasses: 2 }, expected: [0, 1, 0, 1, 0, 1, 0, 1] },
  { input: { n: 8, numberOfPasses: 3 }, expected: [0, 1, 1, 1, 0, 0, 0, 1] },
  { input: { n: 8, numberOfPasses: 4 }, expected: [0, 1, 1, 0, 0, 0, 0, 0] }
];

describe("testing passdoors should", () => {
  theoretically(
    "return [{expected}]\twhen passing {{ n : {input.n}, numberOfPasses : {input.numberOfPasses} }}]",
    theories,
    theory => {
      let result = passDoors(theory.input.n, theory.input.numberOfPasses);
      expect(result).toEqual(theory.expected.join(" "));
    }
  );
});
