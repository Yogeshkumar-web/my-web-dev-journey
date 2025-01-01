### **Declaring Variables in JavaScript: `var`, `let`, and `const`**

JavaScript provides three ways to declare variables: `var`, `let`, and `const`. Understanding their differences is crucial for writing clean, efficient, and error-free code.

---

### **1. `var` - The Original Variable Keyword**

The `var` keyword was introduced in early JavaScript versions and is now considered outdated due to its quirks.

#### **Characteristics of `var`:**

-   **Function-scoped**: The variable is accessible within the function where it is declared.
-   **Can be redeclared**: The same variable can be declared multiple times in the same scope.
-   **Hoisting**: Variables declared with `var` are hoisted (moved to the top of the scope) and initialized as `undefined`.

#### **Example:**

```javascript
function example() {
    console.log(myVar); // undefined (hoisted)
    var myVar = 10;
    console.log(myVar); // 10
}

example();
```

**Why avoid `var`?**

-   It can lead to bugs because of unintentional redeclaration and scoping issues.

---

### **2. `let` - The Modern Variable**

The `let` keyword was introduced in ES6 (2015) and is now the preferred way to declare variables.

#### **Characteristics of `let`:**

-   **Block-scoped**: The variable is accessible only within the block `{}` where it is declared.
-   **Cannot be redeclared**: Avoids accidental overwrites.
-   **Hoisting**: It is hoisted but not initialized, so accessing it before declaration throws a `ReferenceError`.

#### **Example:**

```javascript
{
    let x = 10;
    console.log(x); // 10
}
// console.log(x); // Error: x is not defined (block-scoped)
```

---

### **3. `const` - For Constants**

The `const` keyword is used for variables whose value should not change during the program's execution.

#### **Characteristics of `const`:**

-   **Block-scoped**: Similar to `let`, it is accessible only within the block `{}` where it is declared.
-   **Immutable reference**: You cannot reassign the variable, but if it holds an object or array, the contents can still be modified.
-   **Must be initialized**: A `const` variable must be assigned a value when declared.

#### **Example:**

```javascript
const PI = 3.14;
console.log(PI); // 3.14

const fruits = ["Apple", "Banana"];
fruits.push("Cherry"); // Modifying array contents
console.log(fruits); // ["Apple", "Banana", "Cherry"]

// PI = 3.15; // Error: Assignment to constant variable
```

---

### **Comparison Table: `var` vs `let` vs `const`**

| Feature        | `var`                            | `let`                 | `const`               |
| -------------- | -------------------------------- | --------------------- | --------------------- |
| Scope          | Function-scoped                  | Block-scoped          | Block-scoped          |
| Redeclaration  | Allowed                          | Not allowed           | Not allowed           |
| Reassignment   | Allowed                          | Allowed               | Not allowed           |
| Hoisting       | Yes (initialized as `undefined`) | Yes (not initialized) | Yes (not initialized) |
| Initialization | Optional                         | Optional              | Mandatory             |

---

### **When to Use `var`, `let`, or `const`:**

-   Use `const` by default for all variables unless you plan to reassign them.
-   Use `let` if you need to reassign the variable (e.g., in loops or conditional logic).
-   Avoid using `var` unless you need backward compatibility with older JavaScript environments.

---

### **Examples: Best Practices**

#### **Using `let` and `const` for clarity:**

```javascript
const maxScore = 100; // A constant that should not change
let currentScore = 0; // A variable that will change

for (let i = 0; i < 5; i++) {
    currentScore += 20;
}
console.log(currentScore); // 100
```

#### **Avoiding `var` issues:**

```javascript
// With var
if (true) {
    var test = "hello";
}
console.log(test); // hello (unexpected scope)

// With let
if (true) {
    let test = "hello";
}
// console.log(test); // Error: test is not defined (expected behavior)
```

---

### **Summary**

-   **`const`**: Use for values that won't change (e.g., configuration constants, fixed values).
-   **`let`**: Use for values that will change (e.g., counters, mutable variables).
-   **`var`**: Avoid using unless absolutely necessary for legacy code.
