import theoretically from "jest-theories";
import { parensSubstring, parensSubstring2 } from "./parensSubstring";

const theories = [
  { input: "", expected: 0 },
  { input: "()", expected: 2 },
  { input: "()())", expected: 4 },
  { input: ")()(()))", expected: 6 },
  { input: "(()())", expected: 6 },
  { input: "(()())(()())", expected: 12 },
  { input: "(()()))(()())", expected: 6 },
  { input: "(()())())(()())", expected: 8 },
  { input: "(()()))(()())())(()())", expected: 8 },
  { input: "(()((((", expected: 2 },
  { input: "(()()((((", expected: 4 },
  { input: "(((((()", expected: 2 },
  { input: "(()()(((()(", expected: 4 },
  { input: "((()()(()", expected: 4 },
  { input: "()()()()()", expected: 10 },
  { input: "()()()()())()()()()", expected: 10 },
  { input: "(()()()()())()()()()", expected: 20 },
  { input: "((()()(()((()()(()((()(())(()((()()(()", expected: 6 }
];

describe("parensSubstring", () => {
  theoretically('the number of valid parenthesis in "{input}"\tshould be {expected}', theories, theory => {
    const output = parensSubstring(theory.input);
    expect(output).toBe(theory.expected);
  });
});
