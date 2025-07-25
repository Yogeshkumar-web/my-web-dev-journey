## 🔹 1. Simple Analogy: Real-World Example

Soch lo ek **juice machine** hai.

- Aap ne usme **2 santre (orange)** daale → usne hamesha **ek hi taste ka juice** banaya.
- Na juice machine ne aapke kitchen ka saman chhuna, na fridge khola.
- Sirf jo andar gaya, ussi se juice bana.

👉 **Yeh hai Pure Function**:
➡️ Har baar same input doge → same output milega.
➡️ Machine (function) kuch aur side-effect nahi karti — sirf result nikalti hai.

---

## 🔹 2. Formal Definition: What is a Pure Function?

> **A Pure Function** is a function that:
> 1️⃣ **Always returns the same output** for the same input.
> 2️⃣ **Does not cause side effects** (no modification of external state).

---

## 🔹 3. Core Concepts & Code Examples

### ✅ Concept 1: **Same input → Same output**

```js
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Always 5
console.log(add(2, 3)); // Still 5
```

Yeh function hamesha same result deta hai, chahe kitni baar call karo.

---

### ❌ Concept 2: **Impure Function — External Dependency**

```js
let taxRate = 0.18;

function calculatePrice(price) {
  return price + price * taxRate;
}
```

👎 Yeh **impure** hai kyunki:

- `taxRate` ek external variable hai.
- Agar kisi din `taxRate` change ho gaya, same input se **different output** aa jayega.

✅ Convert it to a **pure function**:

```js
function calculatePrice(price, taxRate) {
  return price + price * taxRate;
}
```

Ab har cheez function ke andar aa gayi → function is pure now.

---

### ❌ Concept 3: **Side Effects**

```js
let total = 0;

function addToTotal(num) {
  total += num; // modifies external variable!
}
```

👎 Yeh bhi impure hai — external variable `total` change ho raha hai.

✅ Pure version:

```js
function getNewTotal(currentTotal, num) {
  return currentTotal + num;
}
```

---

### ✅ Concept 4: **No console.log, no DOM, no DB inside pure functions**

```js
// Impure
function greet(name) {
  console.log(`Hello, ${name}`); // side effect: console
}

// Pure
function getGreeting(name) {
  return `Hello, ${name}`;
}
```

---

## 🔹 4. The "Why": Pure Functions Kyun Important Hai?

### ✅ Benefits:

| Feature               | Benefit                                          |
| --------------------- | ------------------------------------------------ |
| **Predictable**       | Same input = same output. Easy to debug.         |
| **Testable**          | No external dependencies. Unit testing is easy.  |
| **Reusable**          | Pure functions are modular and reusable.         |
| **Parallel-friendly** | No shared state = safe for concurrent execution. |

### ✅ Real-World Use:

- React JS me **component rendering** pure function jaisa hota hai.
- Redux reducers = pure functions.
- Functional utilities like `.map()`, `.filter()` etc — ye sab pure functions use karte hain.

---

## 🔹 5. Practical Project Idea

💡 **Mini Project:** `Simple Calculator`

**Goal:** Build a 4-button calculator (Add, Subtract, Multiply, Divide)
**Use Pure Functions Only**

```js
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return b !== 0 ? a / b : "Cannot divide by 0";
}
```

- Build UI in HTML+CSS (Two input boxes + 4 buttons + Result area)
- Use only pure functions to calculate results
- DOM manipulation should be **outside** pure functions

---

## 🔹 6. Test My Knowledge (Your Turn):

Please answer these 7 questions. I'll review your answers one-by-one.

### Questions:

1. What are the **two main conditions** of a pure function?
2. Is this function pure or impure?

   ```js
   let x = 10;
   function multiplyWithX(n) {
     return n * x;
   }
   ```

3. Why are pure functions easier to test?
4. Give one real-life use case of pure functions in React.
5. What is the difference between a pure function and a function that updates global state?
6. Can pure functions access a database or API? Why or why not?
7. Rewrite this impure function into a pure one:

   ```js
   let discount = 0.1;
   function applyDiscount(price) {
     return price - price * discount;
   }
   ```
