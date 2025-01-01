### **Function Declaration vs Function Expression in JavaScript**

In JavaScript, both **function declarations** and **function expressions** are used to define functions, but they differ in syntax, behavior, and when they are available in your code.

---

### **1. Function Declaration**

A **function declaration** defines a named function using the `function` keyword. It is hoisted, meaning it is available to use before the code where it is defined.

**Syntax:**

```javascript
function functionName(parameters) {
    // Code to execute
}
```

**Example:**

```javascript
// Function declaration
function add(a, b) {
    return a + b;
}

// Calling the function
console.log(add(5, 3)); // Output: 8
```

**Key Features:**

-   **Hoisting:** Function declarations are moved to the top of their scope during the compilation phase, so they can be called before their definition in the code.
-   **Named Function:** The function always has a name.

**Example of Hoisting:**

```javascript
console.log(multiply(4, 5)); // Output: 20

function multiply(a, b) {
    return a * b;
}
```

---

### **2. Function Expression**

A **function expression** creates a function and assigns it to a variable. It can be anonymous or named. Unlike function declarations, function expressions are **not hoisted**, so they can only be called after they are defined.

**Syntax:**

```javascript
const functionName = function (parameters) {
    // Code to execute
};
```

**Example:**

```javascript
// Function expression
const subtract = function (a, b) {
    return a - b;
};

// Calling the function
console.log(subtract(10, 4)); // Output: 6
```

**Key Features:**

-   **No Hoisting:** Function expressions are not available before their definition.
-   **Anonymous Functions:** Function expressions often use unnamed (anonymous) functions.
-   **Variable Association:** They are tied to a variable, so the function name depends on the variable name.

**Example Without Hoisting:**

```javascript
// console.log(divide(10, 2)); // This would throw an error

const divide = function (a, b) {
    return a / b;
};

console.log(divide(10, 2)); // Output: 5
```

---

### **Comparison: Function Declaration vs Function Expression**

| Feature                    | Function Declaration                      | Function Expression                       |
| -------------------------- | ----------------------------------------- | ----------------------------------------- |
| **Syntax**                 | `function name(parameters) {}`            | `const name = function(parameters) {}`    |
| **Hoisting**               | Hoisted to the top of the scope           | Not hoisted                               |
| **Named Function**         | Always named                              | Can be anonymous or named                 |
| **Execution Availability** | Can be called before declaration          | Can only be called after definition       |
| **Use Cases**              | Preferred for defining reusable functions | Ideal for one-time functions or callbacks |

---

### **3. Example: Named Function Expression**

A function expression can also be named, though this is less common. The name is local to the function’s scope.

**Example:**

```javascript
const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1); // Recursive call
};

console.log(factorial(5)); // Output: 120
```

---

### **4. When to Use Which?**

1. **Function Declaration:**

    - Use when you need a globally or locally reusable function.
    - Example:
        ```javascript
        function calculateArea(length, width) {
            return length * width;
        }
        ```

2. **Function Expression:**

    - Use for conditional function definitions, callbacks, or to create private scoped functions.
    - Example:

        ```javascript
        const isEven = function (num) {
            return num % 2 === 0;
        };

        console.log(isEven(4)); // Output: true
        ```

---

### **5. Arrow Functions as a Variant of Function Expressions**

Arrow functions are a concise form of function expressions introduced in ES6.

**Example:**

```javascript
const square = (x) => x * x;
console.log(square(5)); // Output: 25
```

---

### **Conclusion**

-   Use **function declarations** when you need hoisting or want to define standard reusable functions.
-   Use **function expressions** for more flexibility, especially in cases like callbacks or closures.

---

### **Top 10 Questions: Functions – Building Blocks of JavaScript**

1. **What is the primary purpose of a function in JavaScript, and how does it improve code reusability?**

2. **Explain the difference between function declarations and function expressions with examples.**

3. **How does JavaScript handle hoisting for function declarations and function expressions?**

4. **What are the advantages of using named function expressions compared to anonymous functions?**

5. **Describe the difference between global scope, local scope, and block scope in the context of functions.**

6. **How can you pass parameters to a function, and what happens if you pass more or fewer arguments than expected?**

7. **What is the role of the `return` statement in a function? Can a function return multiple values? If so, how?**

8. **What are arrow functions in JavaScript, and how do they differ from traditional function expressions?**

9. **How would you use a function expression in a callback? Provide an example.**

10. **Explain the concept of closures and how they relate to functions in JavaScript. Why are closures important?**
