import { capitalize } from "./capitalize";

test("it capitalizes the first letter", () => {
  expect(capitalize("doobie")).toBe("Doobie");
});

test("only the first letter is capitalized", () => {
  expect(capitalize("dAmN bRO")).toBe("Damn bro");
});
