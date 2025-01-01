### **Control Flow Statements in JavaScript**

Control flow statements allow you to determine the sequence in which code is executed based on conditions. Here’s a detailed breakdown of the key control flow statements:

---

### **1. `if`, `else if`, `else` Statements**

These are used to execute blocks of code based on conditions.

**Syntax:**

```javascript
if (condition) {
    // Code to execute if the condition is true
} else if (anotherCondition) {
    // Code to execute if the first condition is false and this one is true
} else {
    // Code to execute if none of the above conditions are true
}
```

**Example:**

```javascript
let age = 20;

if (age < 18) {
    console.log("You are a minor.");
} else if (age >= 18 && age < 60) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior.");
}
```

---

### **2. `switch` Statement**

The `switch` statement is used when you need to compare a value against multiple possibilities.

**Syntax:**

```javascript
switch (expression) {
    case value1:
        // Code to execute if expression === value1
        break;
    case value2:
        // Code to execute if expression === value2
        break;
    default:
    // Code to execute if no case matches
}
```

**Example:**

```javascript
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the work week.");
        break;
    case "Friday":
        console.log("End of the work week.");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!");
        break;
    default:
        console.log("Not a valid day.");
}
```

---

### **3. Ternary Operator**

The ternary operator is a shorthand for `if-else` statements. It takes three parts: a condition, a value if the condition is true, and a value if the condition is false.

**Syntax:**

```javascript
condition ? valueIfTrue : valueIfFalse;
```

**Example:**

```javascript
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"
```

---

### **4. Combining Statements**

You can combine these control flows to make more complex decisions.

**Example:**

```javascript
let weather = "sunny";
let time = "morning";

if (weather === "sunny") {
    console.log("Wear sunglasses!");
} else if (weather === "rainy") {
    console.log("Take an umbrella.");
} else {
    console.log("Enjoy the day!");
}

let greeting = time === "morning" ? "Good morning!" : "Have a great day!";
console.log(greeting);
```

---

### **Key Takeaways**

1. Use `if-else` for basic decision-making.
2. Use `switch` for multiple distinct cases.
3. Use the ternary operator for concise conditions.
4. Always include `break` in `switch` to prevent fall-through unless intentional.
