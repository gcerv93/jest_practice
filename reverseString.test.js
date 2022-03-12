import { reverseString } from "./reverseString";

test("it reverses the string", () => {
  expect(reverseString("doobie")).toBe("eibood");
});

test("reverses multi-word string", () => {
  expect(reverseString("Damn bro")).toBe("orb nmaD");
});
