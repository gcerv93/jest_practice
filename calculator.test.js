import { calculator } from "./calculator.js";

test("it correctly adds 2 numbers together", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("it correctly subtracts a number from another", () => {
  expect(calculator.sub(5, 3)).toBe(2);
});

test("it correctly divides a number from another", () => {
  expect(calculator.divide(20, 5)).toBe(4);
});

test("it correctly multiplies 2 numbers", () => {
  expect(calculator.multiply(5, 5)).toBe(25);
});
