### **Understanding Scope and Hoisting in JavaScript**

Scope and hoisting are fundamental concepts in JavaScript that govern how variables and functions are accessed and executed. Let’s dive into these concepts step by step.

---

### **1. Scope in JavaScript**

Scope refers to the area of a program where a variable or function is accessible. JavaScript has three types of scope:

#### **A. Global Scope**

-   Variables declared outside of any function or block belong to the global scope.
-   These variables can be accessed from **anywhere** in the code.

**Example:**

```javascript
let globalVar = "I'm global";

function exampleFunction() {
    console.log(globalVar); // Accessible here
}
exampleFunction();
console.log(globalVar); // Accessible here too
```

---

#### **B. Local Scope (Function Scope)**

-   Variables declared inside a function are local to that function.
-   They cannot be accessed from outside the function.

**Example:**

```javascript
function exampleFunction() {
    let localVar = "I'm local";
    console.log(localVar); // Accessible here
}
// console.log(localVar); // Error: localVar is not defined
```

---

#### **C. Block Scope**

-   Introduced with `let` and `const`, block scope restricts variables to the block `{}` where they are defined.
-   Variables declared with `var` are **not** block-scoped; they are either function-scoped or global.

**Example:**

```javascript
{
    let blockScoped = "I'm block-scoped";
    console.log(blockScoped); // Accessible here
}
// console.log(blockScoped); // Error: blockScoped is not defined
```

---

### **2. Hoisting in JavaScript**

Hoisting is JavaScript's behavior of moving declarations to the top of their scope during the compilation phase. However, **only declarations are hoisted, not initializations**.

#### **A. Hoisting with `var`:**

-   Variables declared with `var` are hoisted and initialized as `undefined`.

**Example:**

```javascript
console.log(myVar); // undefined (hoisted)
var myVar = 10;
console.log(myVar); // 10
```

#### **B. Hoisting with `let` and `const`:**

-   These are also hoisted, but they are placed in a "temporal dead zone" (TDZ) and are **not accessible** until the code executes their declaration.

**Example:**

```javascript
// console.log(myLet); // Error: Cannot access 'myLet' before initialization
let myLet = 10;
console.log(myLet); // 10
```

#### **C. Hoisting with Functions:**

-   Function declarations are hoisted **entirely**, meaning you can call a function before it is defined.
-   Function expressions (e.g., with `const` or `let`) are **not hoisted**.

**Example:**

```javascript
// Hoisted function declaration
hoistedFunction();
function hoistedFunction() {
    console.log("I am hoisted!");
}

// Function expression (not hoisted)
// hoistedExpression(); // Error: Cannot access 'hoistedExpression' before initialization
const hoistedExpression = function () {
    console.log("I am not hoisted!");
};
```

---

### **Examples to Illustrate Scope and Hoisting**

#### **Global and Local Scope Example:**

```javascript
let globalVar = "Global";

function testScope() {
    let localVar = "Local";
    console.log(globalVar); // Global
    console.log(localVar); // Local
}

testScope();
// console.log(localVar); // Error: localVar is not defined
```

#### **Block Scope with `let` and `const`:**

```javascript
if (true) {
    let blockVar = "Block Scoped";
    const blockConst = "Also Block Scoped";
    console.log(blockVar); // Accessible
    console.log(blockConst); // Accessible
}
// console.log(blockVar); // Error: Not accessible outside block
```

#### **Hoisting with `var`:**

```javascript
console.log(a); // undefined (hoisted declaration)
var a = 5;
console.log(a); // 5
```

#### **Hoisting with `let`:**

```javascript
// console.log(b); // Error: Cannot access 'b' before initialization
let b = 10;
console.log(b); // 10
```

---

### **Key Points to Remember:**

-   **Global Scope**: Variables are accessible everywhere.
-   **Local Scope**: Variables are accessible only within their function.
-   **Block Scope**: Variables declared with `let` or `const` are restricted to the block they are declared in.
-   **Hoisting**:
    -   Declarations are moved to the top of their scope.
    -   `var` is initialized as `undefined`.
    -   `let` and `const` remain in a temporal dead zone until their declaration is reached.

---
