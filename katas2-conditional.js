const conditionalSum = function(values, condition) {
  let sum = 0;

  for (const value of values) {
    if ((condition === "even" && value % 2 === 0) ||
        (condition === "odd" && value % 2 !== 0)) {
      sum += value;
    }
  }

  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even")); // Output: 6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));  // Output: 9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); // Output: 144
console.log(conditionalSum([], "odd")); // Output: 0
