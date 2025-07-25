// Pure Functions

// A Pure Function is a function that: 1️⃣ Always returns the same output for the same input. 2️⃣ Does not cause side effects (no modification of external state).

// Same input → Same output
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Always 5
console.log(add(2, 3)); // Still 5

// Impure Function — External Dependency
let taxRate = 0.18;

function calculatePrice(price) {
  return price + price * taxRate;
}
/* 
Yeh impure hai kyunki:

taxRate ek external variable hai.
Agar kisi din taxRate change ho gaya, same input se different output aa jayega.
*/

//  Convert it to a pure function:
function calculatePrice(price, taxRate) {
  return price + price * taxRate;
}
// Ab har cheez function ke andar aa gayi → function is pure now.

// Side Effects
let total = 0;

function addToTotal(num) {
  total += num; // modifies external variable!
} // Yeh bhi impure hai — external variable total change ho raha hai.

//  Pure version:
function getNewTotal(currentTotal, num) {
  return currentTotal + num;
}

// No console.log, no DOM, no DB inside pure functions
// Impure
function greet(name) {
  console.log(`Hello, ${name}`); // side effect: console
}

// Pure
function getGreeting(name) {
  return `Hello, ${name}`;
}
