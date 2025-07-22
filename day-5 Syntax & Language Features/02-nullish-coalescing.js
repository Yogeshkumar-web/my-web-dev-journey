// Nullish Coalescing Operator

// The Nullish Coalescing Operator (??) in JavaScript returns the right-hand side operand only when the left-hand side operand is null or undefined. It's useful to set default values for potentially null or undefined variables without mistakenly treating 0, false, or '' as "missing".

// let result = leftValue ?? fallbackValue;

// Core Concepts & Code
// Concept 1: Only checks for null and undefined

let name = null;
let displayName = name ?? "Guest";
console.log(displayName); // Output: "Guest"

// Concept 2: Falsy values (0, '', false) are NOT treated as nullish

let age = 0;
let userAge = age ?? 18;
// let userAge = age || 18;
console.log(userAge); // Output: 0
// 0 ek valid value hai, fallback 18 use nahi hoga. If we had used || instead of ??:

// Note: || operator considers 0, false, and "" as falsy and replaces them. But ?? only replaces null or undefined. 👈

// Concept 3: Chaining with ??

let username = null;
let fallback1 = undefined;
let fallback2 = "Anonymous";

let finalName = username ?? fallback1 ?? fallback2;
console.log(finalName); // Output: "Anonymous"

// Concept 4: Use with functions or input

function greet(name) {
  let finalName = name ?? "Stranger";
  console.log(`Hello, ${finalName}`);
}

greet("Yogesh"); // Hello, Yogesh
greet(null); // Hello, Stranger
greet(undefined); // Hello, Stranger
greet(""); // Hello,
// Notice: "" (empty string) is NOT null or undefined, so it won't trigger fallback.
