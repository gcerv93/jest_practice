import { analyzeArray } from "./analyzeArray";

test("it contains an average", () => {
  const result = analyzeArray([4, 5, 6, 7]);
  expect(result).toHaveProperty("average");
});

test("it contains a min value", () => {
  const result = analyzeArray([3, 2, 9, 5, 4]);
  expect(result).toHaveProperty("min");
});

test("it contains a max value", () => {
  const result = analyzeArray([5, 4, 6, 8]);
  expect(result).toHaveProperty("max");
});

test("it contains a length", () => {
  const result = analyzeArray([6, 5, 3, 1]);
  expect(result).toHaveProperty("length");
});

test("it returns the correct average", () => {
  const resultObj = analyzeArray([4, 5, 6, 7]);
  expect(resultObj.average).toBeCloseTo(5.5);
});

test("it returns the correct min value", () => {
  const resultObj = analyzeArray([2, 1, 4, 6]);
  expect(resultObj.min).toBe(1);
});

test("it returns the correct max value", () => {
  const resultObj = analyzeArray([5, 6, 8, 31, 2]);
  expect(resultObj.max).toBe(31);
});

test("it returns the correct length", () => {
  const resultObj = analyzeArray([3, 4, 6, 13, 15]);
  expect(resultObj.length).toBe(5);
});
