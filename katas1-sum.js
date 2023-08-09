const sumLargestNumbers = function(data) {
  if (data.length < 2) {
    return "Array should have at least two numbers.";
  }

  // Sort the array in descending order
  data.sort((a, b) => b - a);

  // Sum the two largest numbers
  const sum = data[0] + data[1];

  return sum;
};

console.log(sumLargestNumbers([1, 10])); // Output: 11
console.log(sumLargestNumbers([1, 2, 3])); // Output: 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // Output: 126
