### **Basic Operators in JavaScript**

Operators are symbols or keywords used to perform operations on values and variables. Here's a breakdown of some fundamental operators in JavaScript:

---

### **1. Arithmetic Operators**

These operators are used for mathematical calculations.

| Operator | Description         | Example  | Output |
| -------- | ------------------- | -------- | ------ |
| `+`      | Addition            | `5 + 3`  | `8`    |
| `-`      | Subtraction         | `10 - 4` | `6`    |
| `*`      | Multiplication      | `4 * 2`  | `8`    |
| `/`      | Division            | `10 / 2` | `5`    |
| `%`      | Modulus (Remainder) | `10 % 3` | `1`    |

**Example:**

```javascript
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
```

---

### **2. Comparison Operators**

Used to compare two values. The result is always a boolean (`true` or `false`).

| Operator | Description                           | Example     | Output  |
| -------- | ------------------------------------- | ----------- | ------- |
| `==`     | Equal to (checks value only)          | `5 == '5'`  | `true`  |
| `===`    | Strict equal to (checks value & type) | `5 === '5'` | `false` |
| `!=`     | Not equal to (checks value only)      | `5 != '5'`  | `false` |
| `!==`    | Strict not equal to (value & type)    | `5 !== '5'` | `true`  |

**Example:**

```javascript
let x = 5;
let y = "5";

console.log(x == y); // true (values are equal)
console.log(x === y); // false (different types)
console.log(x != y); // false (values are equal)
console.log(x !== y); // true (different types)
```

---

### **3. Important Notes on `==` and `===`**

-   **`==` (Loose Equality)**: Converts the types of the values before comparison.
-   **`===` (Strict Equality)**: No type conversion; checks both value and type.

**Example:**

```javascript
console.log(0 == false); // true (type coercion happens)
console.log(0 === false); // false (different types)
```

---

### **4. Operator Precedence**

-   Operators have precedence, meaning some are evaluated before others.
-   Example: `*` and `/` are evaluated before `+` and `-`.

**Example:**

```javascript
let result = 10 + 5 * 2; // Multiplication first
console.log(result); // 20
```

If you want to control the order, use parentheses:

```javascript
let result = (10 + 5) * 2;
console.log(result); // 30
```

---

### **5. Practical Examples**

Let’s use these operators in a small program:

```javascript
let apples = 10;
let oranges = 3;

// Arithmetic
console.log("Total fruits:", apples + oranges); // 13
console.log("Difference:", apples - oranges); // 7

// Comparison
console.log("Do we have equal fruits?", apples == oranges); // false
console.log("Are the types also equal?", apples === oranges); // false

// Modulus
console.log("Remaining fruits when divided:", apples % oranges); // 1
```

---

### **Key Takeaways**

1. **Arithmetic Operators** perform calculations on numbers.
2. **Comparison Operators** return boolean results (`true` or `false`).
3. **`===`** is safer to use for equality checks as it avoids unintended type coercion.
4. Parentheses can control operator precedence.
