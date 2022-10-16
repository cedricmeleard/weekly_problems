import { truncate } from "./truncate";

describe("truncate test should", () => {
  test("return 'nev gon giv you up' when passing 'never gonna give you up' and 3", () => {
    expect(truncate("never gonna give you up", 3, 3)).toBe("nev gon giv you up");
  });

  test("return 'nev' when passing 'never' and 3", () => {
    expect(truncate("never", 3)).toBe("nev");
  });

  test("return 'nev nev' when passing 'never nevermind' and 3", () => {
    expect(truncate("never nevermind", 3)).toBe("nev nev");
  });

  test("return 'never nevermi' when passing 'never nevermind' and 7", () => {
    expect(truncate("never nevermind", 7)).toBe("never nevermi");
  });

  test("return '*hel* dar, my ~old_fri' when passing '*hello* darkness, my ~old_friend' and 3", () => {
    expect(truncate("*hello* darkness, my ~old_friend", 3)).toBe("*hel* dar, my ~old_fri");
  });

  test("return '*Hel* Dar, my ~old_fri' when passing '*Hello* Darkness, my ~old_friend' and 3", () => {
    expect(truncate("*Hello* Darkness, my ~old_friend", 3)).toBe("*Hel* Dar, my ~old_fri");
  });
});
