## 🔰 1. Simple Analogy: "Pizza Banane Wala vs Pizza Machine"

**Scenario**:
सोचो तुम्हारे पास 2 तरीके हैं एक pizza बनाने के:

1. **Pizza Chef** (जो ingredients की हालत बदलता है: आधे cheese खा लेता है, dough ko reuse karta hai — unpredictable)
2. **Pizza Machine** (Input दो → Output लो → कोई side-effect नहीं, repeatable और भरोसेमंद)

🧠 **Functional Programming = Pizza Machine Approach**

- Input → Output (predictable)
- No side effects (no cheese churao)
- Reusable and clean

---

## 📘 2. Formal Definition

> **Functional Programming** is a programming paradigm where you build software by composing _pure functions_, avoiding shared state, mutable data, and side effects.

Key principles:

- **Pure Functions**
- **Immutability**
- **First-Class & Higher-Order Functions**
- **Declarative over Imperative code**

---

## 🧩 3. Core Concepts & Code

Let's break down **4 core pillars**:

---

### ✅ 3.1. Pure Functions

**Definition**:
A pure function ka matlab hai — same input dene par _hamesha same output_ milega, aur koi external cheez (jaise global variable) change nahi hogi.

```js
// ❌ Not pure
let count = 0;
function increaseCount() {
  count++;
  return count;
}

// ✅ Pure Function
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Always 5
```

---

### ✅ 3.2. Immutability

**Definition**:
FP mein data ko mutate (change) nahi karte — hum _naya copy_ banate hain.

```js
// ❌ Mutable
let person = { name: "Yogee" };
person.name = "Rohan"; // modifies original

// ✅ Immutable
let original = { name: "Yogee" };
let updated = { ...original, name: "Rohan" }; // new object
```

---

### ✅ 3.3. First-Class & Higher-Order Functions

**First-Class Functions**: Functions ko variables mein store kar sakte ho, as arguments de sakte ho, return kar sakte ho.

```js
// First-Class
const greet = function (name) {
  return "Hello, " + name;
};
```

**Higher-Order Functions (HOFs)**: Functions that **accept another function as argument** or **return a function**.

```js
// Higher-Order Function
function processArray(arr, callback) {
  return arr.map(callback);
}

const doubled = processArray([1, 2, 3], (n) => n * 2);
console.log(doubled); // [2, 4, 6]
```

---

### ✅ 3.4. Declarative vs Imperative Code

**Imperative**: Step-by-step _kaise karo_ batate ho.
**Declarative**: _Kya chahiye_ batate ho. FP is declarative.

```js
// Imperative
let nums = [1, 2, 3];
let squares = [];
for (let i = 0; i < nums.length; i++) {
  squares.push(nums[i] * nums[i]);
}

// Declarative (FP style)
let squares2 = nums.map((n) => n * n);
```

---

## 🎯 4. The "Why": Why Functional Programming Matters in React

### 🔍 Real-world Usage (React mindset):

- React mein har component ek **pure function** ki tarah likha jaata hai.
- State ko mutate nahi karte → always return new state (immutability).
- Props ko kabhi change nahi karte.
- HOFs jaise `.map()`, `.filter()` sabse zyada use hote hain JSX me.

👉 Functional mindset = cleaner code, fewer bugs, more reusable UI components.

### 🔥 Problems FP Solves:

- Predictable behavior (no random bugs from global mutation)
- Easier testing (pure functions ko test karna asaan hai)
- Reusability (same logic multiple jagah use kar sakte ho)

---

## 🛠️ 5. Practical Project Idea: "Functional Card Generator"

**Goal**:
Build a small web page using vanilla JS + HTML + CSS that:

- Takes an array of users.
- Maps over them (functional style).
- Generates user cards with name and email.

**Input Data**:

```js
const users = [
  { name: "Yogee", email: "yogee@example.com" },
  { name: "Ravi", email: "ravi@example.com" },
];
```

**Expected Output**:
User cards generated using `.map()` without mutating anything.

> You’ll use `map()`, pure function approach, and create DOM elements using JS.

---

## ✅ 6. Test Your Knowledge (Answer these before I proceed)

**Answer in your own words ya short code likh kar — main check karunga.**

1. What is a pure function? Give an example.
2. Why is immutability important in functional programming?
3. What is a higher-order function? Give one real example.
4. React mein hum functional mindset kyun use karte hain?
5. What is the difference between declarative and imperative code?
6. Does a pure function rely on or modify any external state?
7. Can you mutate state directly in React? Why not?
8. Write a small function that doubles every number in an array using `.map()`.
9. What does “first-class function” mean in JavaScript?
10. Which is better for long-term maintainability: mutating data or returning a new copy? Why?
