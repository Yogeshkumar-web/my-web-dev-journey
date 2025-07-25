// first-class-function

// First-Class Functions in JavaScript means: Functions are treated as values. They can be stored in variables, passed as arguments, and returned from other functions — just like any other data type (string, number, object, etc.)

// Functions can be stored in variables

// Store a function in a variable
const greet = function () {
  console.log("Hello, Yogee!");
};

greet();

// Functions can be passed as arguments
function sayHi() {
  console.log("Hi there!");
}

function executeFunction(fn) {
  // fn is a function passed as an argument
  fn();
}

executeFunction(sayHi);

// Functions can be returned from other functions
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2); // double is a function now
console.log(double(5));

// Functions can be assigned to object properties or array elements
const utils = {
  sayHello: function () {
    console.log("Namaste!");
  },
};

utils.sayHello(); // ✅ Output: Namaste!

const arr = [
  function () {
    return "I am inside array!";
  },
];
console.log(arr[0]());
