const numberOfVowels = function(data) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (const char of data) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
};

console.log(numberOfVowels("orange")); // Output: 3
console.log(numberOfVowels("lighthouse labs")); // Output: 5
console.log(numberOfVowels("aeiou")); // Output: 5
