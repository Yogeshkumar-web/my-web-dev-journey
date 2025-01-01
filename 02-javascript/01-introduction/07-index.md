### **Key Concepts: Variables, Data Types, Operators, and Conditionals**

This topic wraps up the core concepts we've explored so far in JavaScript. Here’s a concise overview and how they work together.

---

### **1. Variables**

Variables are containers used to store data values.

-   **Declaration keywords:**
    -   `var`: Function-scoped, can be re-declared, and prone to hoisting issues.
    -   `let`: Block-scoped and cannot be re-declared in the same scope.
    -   `const`: Block-scoped but immutable (cannot be reassigned).

**Example:**

```javascript
let name = "Alice"; // Declares a variable
const age = 25; // Immutable variable
```

---

### **2. Data Types**

JavaScript supports several data types, classified into **primitive** and **non-primitive**.

-   **Primitive types:**

    -   `string`, `number`, `boolean`, `undefined`, `null`, `bigint`, `symbol`

-   **Non-primitive types:**
    -   `object`, `array`, `function`

**Example:**

```javascript
let greeting = "Hello"; // string
let isActive = true; // boolean
let score = 42; // number
let items = ["apple", "banana"]; // array (non-primitive)
```

---

### **3. Operators**

Operators perform operations on values or variables.

-   **Arithmetic Operators:** `+`, `-`, `*`, `/`, `%`
-   **Comparison Operators:** `==`, `===`, `!=`, `!==`, `<`, `>`
-   **Logical Operators:** `&&`, `||`, `!`
-   **Assignment Operators:** `=`, `+=`, `-=`, `*=`, `/=`

**Example:**

```javascript
let x = 10;
let y = 5;
console.log(x + y); // 15
console.log(x === y); // false
console.log(x > y && y > 0); // true
```

---

### **4. Conditionals**

Conditionals control the flow of the program based on certain conditions.

-   **if-else:** Executes code if a condition is true.
-   **else if:** Adds multiple conditions.
-   **switch:** Handles multiple specific cases.
-   **Ternary operator:** A compact version of `if-else`.

**Examples:**

**If-Else:**

```javascript
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 75) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}
```

**Ternary:**

```javascript
let isLoggedIn = true;
console.log(isLoggedIn ? "Welcome back!" : "Please log in.");
```

**Switch:**

```javascript
let role = "admin";

switch (role) {
    case "admin":
        console.log("You have full access.");
        break;
    case "editor":
        console.log("You can edit content.");
        break;
    default:
        console.log("Guest access only.");
}
```

---

### **How They Work Together**

1. **Variables** store the data.
2. **Data Types** define the kind of data stored.
3. **Operators** manipulate data and variables.
4. **Conditionals** control the flow of the application based on conditions.

**Example Combining All:**

```javascript
let username = "Alice";
let age = 25;

// Conditional using operators
if (age >= 18) {
    console.log(`${username} is an adult.`);
} else {
    console.log(`${username} is a minor.`);
}

// Ternary
let accessLevel = age >= 18 ? "Full Access" : "Restricted Access";
console.log(accessLevel);
```

---

### **Key Takeaways**

-   **Variables** store values.
-   **Data Types** ensure proper handling of different types of values.
-   **Operators** enable value manipulation.
-   **Conditionals** decide the program's logic flow.
