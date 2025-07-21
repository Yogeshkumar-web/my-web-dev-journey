// Array in JavaScript

/*
Array ek built-in object hai js mai jo ek single variable mai multiple values ko ordered way mai store karne ki facility deta hai. Arrays are zero-indexed.

Real world use:

form data: store input values from forms.
shopping cart: product list in an e-commerce app.
quiz app: store questions, options, and correct answers.
chat app: messages ko list ke form mai rakhna.
*/

// Array Creation: Using square brackets

let fruits = ["apple", "banana", "mango"];

// Using array constructor

let numbers = new Array(1, 2, 3, 4, 5, 6, 7, 8);

console.log(numbers);

// empty array

let emptyArray = [];

// Accessing Elements (Indexing):

console.log(numbers[2]); // 3

// Modifying Elements:

fruits[0] = "cherry";

console.log(fruits);
console.log(fruits[0]); // cherry

// Array Length:

console.log(fruits.length); // 3

// Looping through an Array (Iteration):
// using for loop:
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit: ", fruits[i]);
}

// using for...of loop
for (let fruit of fruits) {
  console.log("Fruit: ", fruit);
}

// using forEach() => modern js

fruits.forEach(function (fruit, index) {
  console.log(`${index} : ${fruit}`);
});

fruits.forEach(function (fruit) {
  console.log(`${fruit}`);
});

fruits.forEach((fruit, index) => {
  console.log(`fruits in arrow ${index} : ${fruit}`);
});

let myArray = [12, "myName", true, { name: "yogesh", age: 30 }];

console.log(myArray); // we can store different types of data in an array.
