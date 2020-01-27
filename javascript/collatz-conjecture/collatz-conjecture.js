export const steps = n => {
  if (n <= 0) {
    throw new Error("Only positive numbers are allowed");
  }
  let res = n;
  let steps = 0;
  while (res != 1) {
    res = res % 2 ? res * 3 + 1 : res / 2;
    steps++;
  }
  return steps;
};
