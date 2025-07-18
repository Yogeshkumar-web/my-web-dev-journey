## **1. Simple Analogy: Traffic Light System 🚦**

Imagine you're driving and reach a traffic light:

- 🔴 **Red** means **Stop**
- 🟡 **Yellow** means **Slow down / Prepare**
- 🟢 **Green** means **Go**

You're making decisions based on **conditions**:

> “If the light is red, then I’ll stop. Otherwise, if it’s yellow, I’ll slow down. If it’s green, I’ll go.”

**This is exactly how conditional statements work in programming** — based on different situations, the computer chooses a different path of action.

---

## **2. Formal Definition**

**Conditional statements** allow your program to **make decisions** and **execute different blocks of code** depending on whether a condition is **true or false**.

JavaScript provides:

- `if`, `else if`, `else`
- `switch`

---

## **3. Core Concepts & Code**

---

### ✅ 3.1 IF Statement

### 🔹 Basic Syntax

```js
if (condition) {
  // block of code executes if condition is true
}
```

---

### 🔹 Example (Simple Way)

```js
let age = 17;

if (age >= 18) {
  console.log("You can vote.");
}
```

➡ **Output:** Nothing (because condition is false)

---

### 🔹 With `else`

```js
if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You are too young to vote.");
}
```

➡ **Output:** "You are too young to vote."

---

### 🔹 With `else if`

```js
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else if (score >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
```

➡ **Output:** "Grade: B"

---

### 🔹 "Bad" vs "Better" Example

❌ **Bad Way: Nested ifs (Hard to read)**

```js
let num = 10;

if (num > 0) {
  if (num < 100) {
    console.log("Number is between 1 and 99");
  }
}
```

✅ **Better: Use Logical Operators**

```js
if (num > 0 && num < 100) {
  console.log("Number is between 1 and 99");
}
```

> **Why better?** Cleaner, easier to understand, fewer lines.

---

### ✅ 3.2 SWITCH Statement

Useful when you are checking a variable against **multiple specific values**.

---

### 🔹 Syntax

```js
switch (expression) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
  // code
}
```

---

### 🔹 Example

```js
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("End of the week");
    break;
  default:
    console.log("Just another day");
}
```

➡ **Output:** "Start of the week"

---

### 🔹 Bad vs Good Practice in switch

❌ **Bad: Forgetting break**

```js
switch (day) {
  case "Monday":
    console.log("Start");
  case "Tuesday":
    console.log("Work");
}
```

➡ **Output:** "Start" and "Work" — even if only Monday matched!

✅ **Good: Always use `break` (unless intentional fall-through)**

```js
switch (day) {
  case "Monday":
    console.log("Start");
    break;
  case "Tuesday":
    console.log("Work");
    break;
}
```

---

## **4. The “Why” – Real-World Importance**

You’ll use conditionals **everywhere**:

- Form validation: `if (!input.value) showError();`
- Authorization: `if (user.role === 'admin')`
- Navigation: `if (route === '/home')`
- Game logic: `if (score === 0) restartGame();`
- API response handling: `if (status === 200)`

Without conditionals, your code is just a straight line — you can’t make **choices** or **respond to user interaction**.

---

## **5. Mini Project Idea: “Simple Grade Calculator”**

> Create an HTML form where user inputs a number (0-100).
> When the user clicks “Get Grade”, use JavaScript to:

- Check the input number
- Display a message like “You got Grade A” or “Invalid input” based on conditionals

🧠 You’ll practice:

- `if/else if/else`
- `document.querySelector()`
- `onclick` events
- Dynamic message updates in DOM

---

## **6. Test Your Knowledge**

👨🏻‍🏫 **Answer these before we continue:**

1. What will this output?

   ```js
   let temp = 32;
   if (temp > 30) {
     console.log("Hot");
   } else {
     console.log("Cold");
   }
   ```

2. When should you prefer `switch` over `if-else`?

3. What happens if you forget `break` inside a switch case?

4. Fix this code:

   ```js
   let role = "user";
   if ((role = "admin")) {
     console.log("Welcome Admin");
   }
   ```

5. What will be the output?

   ```js
   let x = 5;
   if (x > 10) {
     console.log("Greater");
   } else if (x > 3) {
     console.log("Medium");
   } else {
     console.log("Smaller");
   }
   ```

---
