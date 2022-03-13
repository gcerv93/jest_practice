import { caesarCipher } from "./caesarCipher";

test("it correctly ciphers the text", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("wraps from a-z", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("it ignores punctuation", () => {
  expect(caesarCipher("hello world!$.", 13)).toBe("uryyb jbeyq!$.");
});

test("it works with big numbers", () => {
  expect(caesarCipher("hello, world", 1000)).toBe("tqxxa, iadxp");
});
