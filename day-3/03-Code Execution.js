// Code Execution in JS

/*
Global Execution Context is the default environment in which JavaScript code starts executing. It consists of two main phases: the memory creation phase(where variables and functions are allocated in memory) and the execution phase(Where code is run line by line)
*/

/*

// Code Execution in 2 Phases

// Phase 1: Memory Creation Phase (Creation Phase)

// js engine scan the code.
// Allocates memory for:
    // Variables -> initially set to undefined
    // Functions -> actual function code is stored

// Phase 2: Code Execution Phase
    Code is executed line by line
    Variables get assigned real values
    function calls are made
*/

console.log(a);
var a = 100;

console.log(b());
function b() {
  return "Function called";
}

// Hoisting
// Hoisting means variables and functions are moved to the top of their scope during the memory phase.

// Global Object & this:-

// this refers to window object(in browsers)
// All global variables become properties of the global object
