import { fibonacci } from "./fibonacci";

describe("testing fibonacci like", () => {
  test("with 10,20 and 5 should return [10, 20, 30, 50, 80]", () => {
    expect(fibonacci(10, 20, 5)).toEqual([10, 20, 30, 50, 80]);
  });

  test("with 3,7 and 5 should return [3, 7, 10, 17, 27]", () => {
    expect(fibonacci(3, 7, 5)).toEqual([3, 7, 10, 17, 27]);
  });
});
