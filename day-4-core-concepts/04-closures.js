// Closure in JS

// Closure is a feature in JavaScript where an inner function has access to the variables of its outer (enclosing) function even after the outer function has finished executing.

// It gives us lexical scoping -- yaani inner functions remember their environment.

// Function inside a Function

function outerFunction() {
  let outerVariable = "I am from outer!";

  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction;
}

const myFunc = outerFunction();

myFunc(); // I am from outer!
console.log(myFunc); // [Function: innerFunction]

// Closure Preserves State

function counter() {
  let count = 0;

  return function () {
    count++;
    console.log("Count: ", count);
  };
}

const increment = counter();
increment();
increment();
increment();
increment();
increment();
