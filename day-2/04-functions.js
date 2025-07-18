// Functions in JS

/*
Used everywhere: from handling button clicks to complex data processing.
Keep your code DRY (Don’t Repeat Yourself)
Enable code reusability and modular development.
Essential in frameworks like React — everything revolves around functions/components.
*/

// Function Declaration

function greet(name = "Guest!") {
  // default parameter: Sometimes you want to have a fallback value.
  return `Hello, ${name}`;
}

console.log(greet("Yogesh"));
console.log(greet());

// Function Expression: this means storing a function inside a variable. Expressions can be passed around like variables, used in vallbacks etc.

const greet1 = function (name = "Guest") {
  return `Hello, ${name}!`;
};
console.log(greet1("yogee"));

/// Arrow functions: Simpler syntax, especially useful for shorter functions.

const greet2 = (name = "Guest") => {
  return `Hello, ${name}!`;
};

console.log(greet2());

// parameter vs arguments

// Parameters: Variables listed when defining the function
// Arguments: Actual values passed when calling the function

function add(a = 0, b = 0) {
  // a, b -> parameters
  return a + b;
}

console.log(add(5, 10)); // 5, 10 -> arguments
console.log(add());

// Return Statement: Every function can optionally return a value.

function square(num = 0) {
  return num * num;
}

console.log(square()); // 0
console.log(square(5)); // 25

// Note : If no return is written, the function returns undefined by default.
