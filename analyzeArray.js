const getAverage = (array) => {
  const num = array.reduce((prev, curr) => prev + curr, 0);

  return num / array.length;
};

export const analyzeArray = (array) => {
  let result = {};

  result.average = getAverage(array);
  result.min = Math.min(...array);
  result.max = Math.max(...array);
  result.length = array.length;

  return result;
};
