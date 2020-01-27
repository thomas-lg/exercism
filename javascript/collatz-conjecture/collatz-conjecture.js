//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = n => {
  if (n <= 0) {
    throw "Only positive numbers are allowed";
  }
  let res = n;
  let steps = 0;
  while (res != 1) {
    res = res % 2 ? res * 3 + 1 : res / 2;
    steps++;
  }
  return steps;
};
