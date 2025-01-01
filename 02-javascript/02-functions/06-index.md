### **Key Concepts: JavaScript Functions**

---

### **1. Function Declaration**

A function declaration is a named function that is hoisted to the top of its scope, meaning it can be called before its definition in the code.

#### Syntax:

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!
```

-   **Key Features**:
    -   Hoisted, so usable before declaration.
    -   Useful for reusable named functions.

---

### **2. Function Expression**

A function expression creates a function and assigns it to a variable. It is not hoisted, so it cannot be used before its definition.

#### Syntax:

```javascript
const greet = function (name) {
    return `Hello, ${name}!`;
};
console.log(greet("Bob")); // Output: Hello, Bob!
```

-   **Key Features**:
    -   Not hoisted.
    -   Often used for anonymous or inline functions.

---

### **3. Arrow Functions**

Introduced in ES6, arrow functions provide a concise way to write functions. They do not have their own `this` context, making them ideal for callback functions.

#### Syntax:

```javascript
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Charlie")); // Output: Hello, Charlie!
```

-   **Key Features**:
    -   No `this` binding.
    -   Cannot be used as constructors.
    -   Compact syntax for single expressions.

---

### **4. Closures**

A closure is a function that retains access to its lexical scope (variables of its outer function) even after the outer function has executed.

#### Example:

```javascript
function outerFunction(outerVar) {
    return function innerFunction(innerVar) {
        return `Outer: ${outerVar}, Inner: ${innerVar}`;
    };
}
const closure = outerFunction("OuterValue");
console.log(closure("InnerValue")); // Output: Outer: OuterValue, Inner: InnerValue
```

-   **Key Features**:
    -   Enables encapsulation.
    -   Useful for private variables or maintaining state.

---

### **5. Parameters**

Parameters are variables listed in the function definition and represent values passed into the function when it is called.

#### Example:

```javascript
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 3)); // Output: 8
```

-   **Key Features**:
    -   Default parameters can be set:
        ```javascript
        function greet(name = "Guest") {
            return `Hello, ${name}!`;
        }
        console.log(greet()); // Output: Hello, Guest!
        ```

---

### **6. Return**

The `return` statement specifies the value a function returns to its caller. If `return` is omitted, the function returns `undefined`.

#### Example:

```javascript
function multiply(a, b) {
    return a * b;
}
console.log(multiply(4, 5)); // Output: 20
```

-   **Key Features**:
    -   Stops the execution of a function.
    -   Can return any type of value, including objects or functions.

---

### **7. Key Comparisons**

| **Feature**        | **Function Declaration**  | **Function Expression**       | **Arrow Function**             |
| ------------------ | ------------------------- | ----------------------------- | ------------------------------ |
| **Hoisting**       | Yes                       | No                            | No                             |
| **Syntax**         | `function name() {}`      | `const name = function() {};` | `const name = () => {};`       |
| **`this` Context** | Dynamic                   | Dynamic                       | Lexical (inherited from scope) |
| **Usability**      | Named, reusable functions | Inline or anonymous functions | Callbacks or short expressions |

---

### **Example: Combining Key Concepts**

```javascript
// Function Declaration
function add(a, b) {
    return a + b;
}

// Function Expression
const multiply = function (a, b) {
    return a * b;
};

// Arrow Function
const divide = (a, b) => a / b;

// Closure
function createCounter() {
    let count = 0; // Private variable
    return function () {
        count++;
        return count;
    };
}

// Using All Together
const counter = createCounter();
console.log(add(2, 3)); // 5
console.log(multiply(2, 3)); // 6
console.log(divide(6, 2)); // 3
console.log(counter()); // 1
console.log(counter()); // 2
```

---

### **Top 10 Advanced Questions: Functions in JavaScript**

1. **Function Declaration vs Expression**

    - How does hoisting affect the behavior of function declarations and expressions in JavaScript? Provide examples to illustrate your answer.

2. **Arrow Functions and `this` Context**

    - Explain the differences in how `this` is handled in regular functions versus arrow functions. Provide a scenario where using an arrow function prevents errors.

3. **Closures in Real-World Applications**

    - What is a closure, and how can it be used to create private variables in JavaScript? Write a program demonstrating a counter function with private state using closures.

4. **Callback Functions and Higher-Order Functions**

    - What is a callback function? Explain how it is used in higher-order functions with an example, such as `Array.prototype.map` or `setTimeout`.

5. **Default Parameters**

    - How do default parameters work in JavaScript functions? Provide an example where default parameters prevent runtime errors.

6. **Recursive Functions**

    - What is a recursive function? Write a recursive function to calculate the factorial of a number and explain the concept of base cases.

7. **Rest and Spread Operators**

    - How do the rest (`...args`) and spread operators enhance function behavior? Provide an example of a function that uses the rest parameter to calculate the sum of any number of arguments.

8. **Immediately Invoked Function Expressions (IIFE)**

    - What is an IIFE, and why is it useful? Write an example to demonstrate its use in creating a private scope.

9. **Currying**

    - What is currying in JavaScript? Write a curried function to add three numbers and explain how it transforms functions into single-argument functions.

10. **Function Composition**
    - What is function composition, and how can it be achieved in JavaScript? Write an example that demonstrates function composition for processing data in a pipeline.
