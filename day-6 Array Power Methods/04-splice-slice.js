// splice() and slice()

// slice(start, end)
/*

slice(start, end)

Returns a shallow copy of a portion of an array into a new array object.

1. It does not modify the original array.
2. end index is not included.

splice(start, deleteCount, ...items)

Changes the contents of an array by:

1. Removing existing elements
2. Adding new elements
3. It modifies the original array

*/

// slice() – Copy a portion
const fruits = ["apple", "banana", "mango", "grape", "orange"];

// Get fruits from index 1 to 3 (excluding index 3)
const slicedFruits = fruits.slice(1, 3);

console.log(slicedFruits); // ['banana', 'mango']
console.log(fruits); // Original array is unchanged

// splice() – Remove / Insert / Replace in original array
// Remove elements:
const colors = ["red", "green", "blue", "yellow"];

// Remove 2 items starting from index 1
const removed = colors.splice(1, 2);

console.log(removed); // ['green', 'blue']
console.log(colors); // ['red', 'yellow'] - original array modified

// Insert elements:
const nums = [1, 2, 5];

// Insert 3, 4 at index 2
nums.splice(2, 0, 3, 4);

console.log(nums); // [1, 2, 3, 4, 5]

// Replace elements:
const languages = ["C", "C++", "Ruby"];

// Replace 'Ruby' with 'JavaScript'
languages.splice(2, 1, "JavaScript");

console.log(languages); // ['C', 'C++', 'JavaScript']
