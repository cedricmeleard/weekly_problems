import { cornerHit } from "./boucinglogo";

describe("testing boucing logo", () => {
  test("should hit the corner", () => {
    let dimensions = [5, 5];
    let initialCoordinates = [0, 0]; // you decide which part of the logo the coords map to
    let screenSize = [100, 100];

    expect(cornerHit(dimensions, initialCoordinates, screenSize)).toBeTruthy();
  });

  test("should not hit the corner", () => {
    let dimensions = [5, 5];
    expect(cornerHit(dimensions, [45, 70], [400, 200])).toBeFalsy();
  });
});
