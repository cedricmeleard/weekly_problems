import { fromTo } from "./fromTo";

describe("testing fromTo", () => {
  test("should return 5 then 6 then 7 and then undefined, when passing 5, 7", () => {
    let gen = fromTo(5, 7);
    expect(gen()).toEqual(5);
    expect(gen()).toEqual(6);
    expect(gen()).toEqual(7);
    expect(gen()).toBeUndefined();
  });

  test("should return undefined, when passing a greater number first", () => {
    let gen = fromTo(9, 7);
    expect(gen()).toBeUndefined();
  });

  test("should return suite, when starting bellow 0", () => {
    let gen = fromTo(-2, 1);
    expect(gen()).toEqual(-2);
    expect(gen()).toEqual(-1);
    expect(gen()).toEqual(0);
    expect(gen()).toEqual(1);
    expect(gen()).toBeUndefined();
  });
});
