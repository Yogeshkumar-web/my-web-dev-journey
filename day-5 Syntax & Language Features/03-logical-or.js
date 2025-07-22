// Logical OR (||) operator

// "Koi bhi ek cheez true ho jaaye, toh kaam ho jaata hai." Yehi concept hai || ka — agar left ya right me se koi bhi value truthy hai, toh result wahi hoga.

// Definition :
// Logical OR (||) operator evaluates two expressions and returns the first truthy value, or the last value if none are truthy.

// result = expression1 || expression2;

// Concept 1: Basic Usage

const name = "" || "Guest";
console.log(name);

// Concept 2: Multiple Expressions

const result = 0 || null || undefined || "Hello" || false;
console.log(result); // Output: "Hello"

// Concept 3: Used for Default Values

function greet(name) {
  const finalName = name || "Guest";
  console.log("Hello, " + finalName);
}

greet("Yogesh"); // Hello, Yogesh
greet(""); // Hello, Guest

// Concept 4: Short-Circuiting

true || console.log("Will not run"); // No log
false || console.log("Will run"); // Logs: "Will run"

// Concept 5: Difference with Nullish Coalescing (??)

const val = 0 || "default"; // "default"
const val2 = 0 ?? "default"; // 0
// || treats 0, "", false as falsy ?? ignores 0, false and only checks null or undefined.
