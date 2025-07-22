// Hoisting in JS

/*
Hoisting is JavaScript's default behavior of moving declarations (not initializations) of variables and functions to the top of their scope before code execution begins.

 Note: 
    1. sirf declaration hota hai assignments nahi.
    2. var, let, and const aur function declarations hoist hote hai, but unka behavior alag hota hai.
*/

// var hoisting
console.log(name); // undefined
var name = "yogesh";

//// let and const hoisting (TDZ)
// console.log(age); // ReferenceError: Cannot access 'age' before initialization
let age = 25;

// let aur const bhi hoist hote hai, but they remain in TDZ until the line where they're declared.
// isliye ReferenceError aata hai.

////  3.3 Function Declaration Hoisting

greet();
function greet() {
  console.log("Hello, Yogesh");
}

// Pure function declaration ko JavaScript poori tarah upar le jaata hai - iska matlab function body bhi hoist hoti hai.

//// function expression hoisting(var)

// greet1(); // TypeError: greet1 is not a function
var greet1 = function () {
  console.log("hello");
};

// var greet1 hoist ho gaya, but uski value undefined thi jab tak assign nahi kiya. Toh greet1() pe TypeError aata hai because undefined is not callable.

//// function expression hoisting(let/const)

// sayHi(); // ReferenceError: Cannot access 'sayHi' before initialization
const sayHi = function () {
  console.log("Hi");
};

// const/let function expressions bhi hoist to hoti hai, but TDZ mai rehti hai. Toh error aata hai if used before declaration.

sayHi1(); // no error
function sayHi1() {
  console.log("hello, yogee");
}
