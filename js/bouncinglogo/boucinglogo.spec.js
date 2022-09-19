import { cornerHit, BouncingLogo } from "./boucinglogo";

describe("testing cornerHit", () => {
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

describe("testing cornerHit", () => {
  test("should hit the corner", () => {
    const sut = new BouncingLogo().withDimensions([5, 5]).withStartPosition([0, 0]).withScreenSize([100, 100]);

    expect(sut.getNumberOfMove()).toEqual(1);
  });

  test("should not hit the corner", () => {
    const sut = new BouncingLogo().withDimensions([5, 5]).withStartPosition([45, 70]).withScreenSize([400, 200]);

    expect(sut.getNumberOfMove()).toEqual(100);
  });
});
