// map, filter and reduce in JS

// map() : map(): Returns a new array after applying a function to every element of the original array.

// filter(): Returns a new array containing only those elements that pass a condition (return true in callback).

// reduce(): Returns a single value by applying a function on each element of the array and accumulating the result.

// map() – Transform Each Element

const numbers = [1, 2, 3, 4];

// Double every number
const doubled = numbers.map((num) => {
  return num * 2;
});

console.log(doubled); // [2, 4, 6, 8]

// filter() – Select Elements Based on Condition

const numbers1 = [10, 25, 30, 45];

// Get numbers > 25
const filtered = numbers1.filter((num) => {
  return num > 25;
});

console.log(filtered); // [30, 45]

// reduce() – Combine Array into Single Value

const numbers2 = [5, 10, 15];

// Add all numbers
const total = numbers2.reduce((accumulator, current) => {
  return accumulator + current;
}, 0); // 0 is initial value of accumulator

console.log(total); // 30
