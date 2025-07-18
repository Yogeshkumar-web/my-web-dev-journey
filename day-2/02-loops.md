## 🧠 1. **Simple Analogy: "Washing a Pile of Clothes"**

Imagine you have **a basket of dirty clothes**, and your mom says:

> "Beta, wash each shirt one by one until the basket is empty."

You take out one shirt, wash it, repeat.

👉 **This repeating task** is exactly what loops do in programming — they **repeat a block of code** until a condition is met.

---

## 📘 2. **Formal Definition**

In JavaScript, **loops are control flow statements** that allow code to be **executed repeatedly** based on a condition.

Types we’ll learn today:

- `for` loop
- `while` loop
- `do...while` loop

---

## 🔍 3. **Core Concepts & Code**

Let’s go step-by-step.

---

### 🔁 A. **`for` loop**

#### 📖 Concept:

Use it when you **know how many times** you want to repeat a task.

#### ✅ Syntax:

```js
for (initialization; condition; increment) {
  // code to run each loop
}
```

#### ❌ Simple/Bad Way:

```js
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
```

➡️ Repetitive and hard to scale.

#### ✅ Better Way (Using `for` loop):

```js
// Print numbers 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i); // prints 1, 2, 3, 4, 5
}
```

#### 🔍 Explanation:

- `let i = 1` → Start
- `i <= 5` → Run while this is true
- `i++` → Increase i by 1 each loop

---

### 🔁 B. **`while` loop**

#### 📖 Concept:

Use it when you **don’t know how many times** the loop should run. You just want to repeat **as long as the condition is true**.

#### ✅ Syntax:

```js
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

Same output as `for` loop, but good when you initialize `i` earlier or outside the loop.

---

### 🔁 C. **`do...while` loop**

#### 📖 Concept:

Runs the code **at least once**, then repeats as long as the condition is true.

#### ✅ Syntax:

```js
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
```

### ⚠️ Use Case:

If you want to show something once before checking a condition (like asking for password at least once).

---

### 🔄 Comparison Table

| Loop Type    | When to Use                          | Runs At Least Once? |
| ------------ | ------------------------------------ | ------------------- |
| `for`        | Fixed number of repetitions          | ❌ No               |
| `while`      | Unknown number, condition controlled | ❌ No               |
| `do...while` | Unknown number, but must run once    | ✅ Yes              |

---

## ❓ 4. **The "Why": Why Loops Matter**

You'll use loops:

- To display lists of items
- To iterate over arrays (like products, users, posts)
- To keep asking user input (like form validation)
- To perform calculations or animations
- To fetch data repeatedly (like pagination or polling)

In short, loops are **everywhere** in real-world web apps.

---

## 🧩 5. **Mini Project Idea: Number Guessing Game**

**Goal:** Build a simple number guessing game.

### Features:

- Random number between 1 and 10
- User keeps guessing using `prompt()`
- Tell if guess is correct or not
- Loop continues until correct guess

```js
let secretNumber = Math.floor(Math.random() * 10) + 1;
let guess;

do {
  guess = prompt("Guess a number between 1 and 10:");
  if (parseInt(guess) === secretNumber) {
    alert("🎉 Correct!");
  } else {
    alert("❌ Try again!");
  }
} while (parseInt(guess) !== secretNumber);
```

📝 You can run this in the browser console or inside an HTML file with `<script>`.

---

## ✅ 6. **Test Your Knowledge**

**Q1.** Which loop should you use if you know you need to loop **exactly 10 times**?
**Q2.** What’s the difference between `while` and `do...while`?
**Q3.** What will be the output of this loop?

```js
let i = 3;
while (i < 3) {
  console.log("Hello");
}
```

**Q4.** Convert this to a `for` loop:

```js
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```
