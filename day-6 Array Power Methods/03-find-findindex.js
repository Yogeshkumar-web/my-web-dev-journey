// find findIndex

// find(callbackFn) : Returns the first element in the array that satisfies the condition provided by the callbackFn.

// findIndex(callbackFn) : Returns the index of the first element that satisfies the condition. If none found, returns -1.

// 1. find() Method
// 👇 Example: Find the first even number in array
const numbers = [3, 5, 8, 11, 14];

const firstEven = numbers.find((num) => num % 2 === 0);

console.log(firstEven); // Output: 8

// 2. findIndex() Method
// 👇 Example: Find index of the first number greater than 10
const numbers1 = [2, 7, 11, 4];

const index = numbers1.findIndex((num) => num > 10);

console.log(index); // Output: 2
