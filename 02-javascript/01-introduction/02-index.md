### **Understanding Variables and Data Types in JavaScript**

Variables in JavaScript are containers used to store data, and the type of data they hold determines how we can interact with it. Let’s explore variables and the primary data types in JavaScript.

---

### **1. Variables in JavaScript**

A **variable** is declared using one of three keywords:

1. `var` (older, function-scoped)
2. `let` (modern, block-scoped)
3. `const` (modern, block-scoped, for constants)

#### **Example: Declaring Variables**

```javascript
let name = "John"; // A variable that can be reassigned
const age = 30; // A constant variable, cannot be reassigned
var isStudent = true; // A function-scoped variable
```

---

### **2. JavaScript Data Types**

JavaScript has two categories of data types:

-   **Primitive types**: Immutable values.
-   **Non-primitive types**: Mutable objects.

#### **Primitive Data Types**

1. **String**: Textual data.
2. **Number**: Numeric values (integers and floating-point).
3. **Boolean**: Logical values (`true` or `false`).
4. **Undefined**: A variable declared but not assigned a value.
5. **Null**: An intentionally empty value.
6. **Symbol**: Unique and immutable values (used for advanced purposes).
7. **BigInt**: Used for very large numbers.

#### **Non-primitive Data Types**

-   **Object**: A collection of key-value pairs.
-   **Array**: Ordered lists of values.

---

### **3. Detailed Overview of Data Types**

#### **a. String**

-   Represents textual data enclosed in quotes (single, double, or backticks).
-   Can be concatenated or interpolated using template literals.

**Example:**

```javascript
let greeting = "Hello, World!";
let name = "Alice";
console.log(greeting + " " + name); // Concatenation
console.log(`Welcome, ${name}!`); // Template literal
```

---

#### **b. Number**

-   Represents both integers and decimals.
-   Includes special values like `Infinity`, `-Infinity`, and `NaN`.

**Example:**

```javascript
let age = 25; // Integer
let price = 19.99; // Decimal
let result = 5 / 0; // Infinity
console.log(result);
console.log(5 / "a"); // NaN (Not a Number)
```

---

#### **c. Boolean**

-   Represents logical values: `true` or `false`.

**Example:**

```javascript
let isLoggedIn = true;
let hasAccess = false;
console.log(isLoggedIn && hasAccess); // false
```

---

#### **d. Undefined**

-   A variable that is declared but not initialized.

**Example:**

```javascript
let user;
console.log(user); // undefined
```

---

#### **e. Null**

-   Represents the intentional absence of a value.

**Example:**

```javascript
let data = null;
console.log(data); // null
```

---

#### **f. Object**

-   A collection of key-value pairs.
-   Keys can be strings or symbols, and values can be any type.

**Example:**

```javascript
let person = {
    name: "Bob",
    age: 30,
    isStudent: false,
};
console.log(person.name); // Accessing a property
```

---

#### **g. Array**

-   A special type of object for storing ordered collections of values.
-   Values can be of different types.

**Example:**

```javascript
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Accessing first element
```

---

### **4. Checking Data Types**

You can check the data type of a variable using the `typeof` operator.

**Example:**

```javascript
console.log(typeof "Hello"); // string
console.log(typeof 42); // number
console.log(typeof true); // boolean
console.log(typeof null); // object (this is a known quirk in JavaScript)
console.log(typeof undefined); // undefined
```

---

### **5. Dynamic Typing in JavaScript**

JavaScript is dynamically typed, meaning variables can hold values of different types at different times.

**Example:**

```javascript
let value = 42; // Initially a number
value = "Hello"; // Now a string
console.log(value); // Output: Hello
```

---

### **6. Summary of Key Concepts**

| **Data Type** | **Example**           | **Description**                    |
| ------------- | --------------------- | ---------------------------------- |
| String        | `"Hello"`             | Textual data                       |
| Number        | `42`, `3.14`          | Numeric data                       |
| Boolean       | `true`, `false`       | Logical values                     |
| Undefined     | `let x;`              | Variable declared but not assigned |
| Null          | `null`                | Intentionally empty value          |
| Object        | `{ name: "Alice" }`   | Key-value pairs                    |
| Array         | `["Apple", "Banana"]` | Ordered collection of values       |

---

### **Practice Example**

Write a script that demonstrates all basic data types:

```javascript
let name = "John"; // String
let age = 25; // Number
let isStudent = true; // Boolean
let address; // Undefined
let phone = null; // Null
let hobbies = ["Reading", "Gaming"]; // Array
let person = {
    // Object
    firstName: "John",
    lastName: "Doe",
    age: 25,
};

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof address);
console.log(typeof phone);
console.log(typeof hobbies);
console.log(typeof person);
```
