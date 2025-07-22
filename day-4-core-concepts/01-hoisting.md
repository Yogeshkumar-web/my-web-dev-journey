## ✅ 1. Simple Analogy (Real-life Example)

**Analogy:**

Socho tum ek restaurant mein gaye ho. Tum order dene se pehle waiter tumhara naam likh leta hai, taaki jab tum order do tab wo ready ho jaye.
Isi tarah, **JavaScript** tumhara code **execute karne se pehle**, pehle **variables aur functions ko memory mein reserve** kar leta hai. Is process ko **"hoisting"** kehte hain.

🔁 **Matlab**: JavaScript sabse pehle "preparation" karta hai – variables aur functions ko memory mein upar (top) shift karta hai, **execution se pehle**.

---

## ✅ 2. Formal Definition

> **Hoisting is JavaScript’s default behavior of moving declarations (not initializations) of variables and functions to the top of their scope before code execution begins.**

- Sirf **declarations** hoist hoti hain, **assignments nahi.**
- `var`, `let`, `const` aur **function declarations** hoist hote hain, but unka behavior alag hota hai (aage dekhenge).

---

## ✅ 3. Core Concepts & Code Examples

### 🔹 3.1 `var` Hoisting

```js
console.log(name); // undefined, not error
var name = "Yogee";
```

#### Explanation:

- JavaScript ne pehle `var name;` ko top pe le gaya.
- Toh execution ke time tak declaration ho gayi, lekin assignment abhi baad mein hoti hai.

🧠 JavaScript interprets this as:

```js
var name;
console.log(name); // undefined
name = "Yogee";
```

---

### 🔹 3.2 `let` and `const` Hoisting (Temporal Dead Zone - TDZ)

```js
console.log(age); // ❌ ReferenceError
let age = 25;
```

#### Explanation:

- `let` aur `const` bhi hoist hote hain, **but they remain in TDZ (Temporal Dead Zone)** until the line where they're declared.
- Isliye `ReferenceError` aata hai.

✅ Always declare `let`/`const` before use.

---

### 🔹 3.3 Function Declaration Hoisting

```js
greet(); // ✅ Works fine

function greet() {
  console.log("Hello, Yogee!");
}
```

#### Explanation:

- Pure function declaration ko JavaScript poori tarah upar le jaata hai – iska matlab function body bhi hoist hoti hai.

---

### 🔹 3.4 Function Expression Hoisting (var)

```js
greet(); // ❌ TypeError: greet is not a function

var greet = function () {
  console.log("Hello");
};
```

#### Explanation:

- `var greet` hoist ho gaya, but uski value `undefined` thi jab tak assign nahi kiya.
- Toh `greet()` pe TypeError aata hai because `undefined` is not callable.

---

### 🔹 3.5 Function Expression Hoisting (let/const)

```js
sayHi(); // ❌ ReferenceError

const sayHi = function () {
  console.log("Hi");
};
```

#### Explanation:

- `const`/`let` function expressions bhi hoist to hoti hain, but TDZ mein rehti hain.
- Toh error aata hai if used before declaration.

---

## ✅ 4. The “Why” — Importance in Real World

### 💡 Real-World Use Cases:

- Code debugging mein bohot help karta hai.
- Unexpected `undefined` values ya `ReferenceError` ke reasons samajhne mein madad milti hai.
- Large projects mein code maintainability improve hoti hai jab aapko pata ho hoisting kaise kaam karta hai.

### 🧠 Problems It Solves:

- Helps avoid runtime bugs.
- Allows better understanding of **JavaScript execution context**.
- Crucial for writing predictable and safe code.

---

## ✅ 5. Practical Mini-Project Idea (Beginner Level)

### 🧪 **Mini Project: Hoisting Quiz App (Console Based)**

📝 **What you'll do**:

- Create a small quiz app in JS using `var`, `let`, `const`, and `function` declarations.
- Write 3 questions.
- Each question should be printed using a function.
- Declare all variables using `let` and try calling functions before declaration (to test hoisting).

Example:

```js
askQuestion(); // See if it works before declaration

function askQuestion() {
  const question = "What is Hoisting in JS?";
  console.log(question);
}
```

---

## ✅ 6. Test Your Knowledge

Answer the following questions one by one. I will wait for your answers before giving the correct ones.

### 🔍 Questions:

1. What will be the output of:

   ```js
   console.log(a);
   var a = 10;
   ```

2. What will happen here?

   ```js
   console.log(b);
   let b = 20;
   ```

3. Can you call a function declared using `function greet() {}` before it's defined in the code?

4. Is `const user = function() {}` hoisted? If yes, can we access it before its declaration?

5. What is the Temporal Dead Zone (TDZ) in simple words?

6. Which of the following are hoisted?

   - `var`
   - `let`
   - `const`
   - Function Declaration
   - Function Expression

7. True or False: `var` is block scoped.

8. Which gives error and which gives `undefined`?

   ```js
   console.log(x);
   var x = 5;

   console.log(y);
   let y = 10;
   ```
