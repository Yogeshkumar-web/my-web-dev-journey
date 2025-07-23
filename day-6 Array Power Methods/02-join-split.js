// join and split

// join(): join() is an array method that returns a new string by concatenating all elements of the array, separated by a specified string (separator).

// split(): split() is a string method that divides a string into an array of substrings, using a specified separator (delimiter).

/// join() – Convert Array → String
// - array.join(separator);

//  Example 1: Default Separator
const fruits = ["apple", "banana", "mango"];
const result = fruits.join(); // default separator is comma
console.log(result); // "apple,banana,mango"

// Example 2: Custom Separator
const letters = ["H", "E", "L", "L", "O"];
console.log(letters.join("-")); // "H-E-L-L-O"
console.log(letters.join("")); // "HELLO"

// Example 3: Joining Numbers
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.join(" + ")); // "1 + 2 + 3 + 4 + 5"

// split() – Convert String → Array
// string.split(separator);

//  Example 1: Split with comma
const data = "red,green,blue";
const colors = data.split(",");
console.log(colors); // ["red", "green", "blue"]

// Example 2: Split on space
const sentence = "Full stack web development";
const words = sentence.split(" ");
console.log(words); // ["Full", "stack", "web", "development"]

// Example 3: Split characters
const name = "Yogesh";
console.log(name.split("")); // ['Y', 'o', 'g', 'e', 's', 'h']

// Example 4: Split using limit
const line = "a-b-c-d-e";
const parts = line.split("-", 3);
console.log(parts); // ['a', 'b', 'c']
