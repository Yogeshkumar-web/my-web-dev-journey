## 🔹 1. Simple Analogy:

**Real-life Analogy:**
Socho aapke paas ek **car manufacturing factory** hai. Har baar ek **new car** banani hoti hai — color, model, speed alag hoti hai.
Ab aap baar-baar same process manually likhne ke bajay ek **Car blueprint (class)** bana lete ho. Isse jitni marzi cars **(objects)** bana sakte ho.

👉 `Class` = Factory ka **blueprint/design**
👉 `Object` = Us blueprint se banaya gaya **actual product** (car)

---

## 🔹 2. Formal Definition:

> **Class:** Ek template/blueprint hota hai jisse hum multiple objects create karte hain jinke paas same properties aur methods hote hain.
> **Object:** Class ka ek instance hota hai – actual usable form.
> **Getter/Setter:** Special functions hote hain jo object ki property **padhne (get)** ya **set karne (change)** ke liye use hote hain with added control or logic.

---

## 🔹 3. Core Concepts & Code:

### ✅ 3.1 How to Create a Class

```javascript
// 👇 Ek simple class banayi hai "Person"
class Person {
  constructor(name, age) {
    this.name = name; // property
    this.age = age;
  }

  // method
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// 🔸 Object create karte hain class se
const person1 = new Person("Yogee", 30);
person1.greet(); // Output: Hello, my name is Yogee
```

**Explanation:**

- `class Person {}` → blueprint
- `constructor` → jab naya object banta hai, yeh auto call hota hai
- `this.name` → object ki property assign karta hai
- `new Person()` → object banata hai

---

### ✅ 3.2 Getters and Setters

```javascript
class Product {
  constructor(name, price) {
    this.name = name;
    this._price = price; // underscore shows private-like property
  }

  // 🔸 Getter
  get price() {
    return `$${this._price.toFixed(2)}`;
  }

  // 🔸 Setter
  set price(newPrice) {
    if (newPrice < 0) {
      console.log("Price can't be negative.");
    } else {
      this._price = newPrice;
    }
  }
}

const item = new Product("Laptop", 499.99);
console.log(item.price); // $499.99

item.price = -100; // ❌ Invalid
item.price = 599.99; // ✅ Valid
console.log(item.price); // $599.99
```

**Explanation:**

- `get price()` → jab hum `item.price` likhte hain toh internally yeh method call hota hai
- `set price()` → jab hum value assign karte hain (`item.price = 200`) toh yeh setter call hota hai

---

## 🔹 4. The "Why": Importance in Real World

### ✔ Where You’ll Use This:

- **React components** can be class-based.
- Backend logic (like `User`, `Product`, `Order` models).
- Clean, modular, and reusable code ke liye.
- Encapsulation & data protection (via getters/setters).

### ✔ What Problems it Solves:

- **Code Reusability:** Ek bar class likho, har jagah use karo
- **Organization:** Logic aur data ek saath
- **Validation:** Setters se data validate kar sakte hain

---

## 🔹 5. Practical Project Idea

### 🛠 Mini Project: “Student Manager”

Build a simple web app (no backend needed) where:

- You can create a `Student` class with `name`, `rollNumber`, and `marks`.
- Add a method `getGrade()` that returns `"A"`, `"B"`, or `"Fail"` based on marks.
- Use getter to show grade and setter to update marks with validation.

**Bonus:** Use a simple HTML form to input data and display it using JS.

---

## 🔹 6. Test My Knowledge

Answer these 7 questions:

1. What is the difference between a class and an object?
2. What does the `constructor` function do in a class?
3. What is the purpose of a `get` method? How is it used?
4. Write a small class called `Book` with properties `title` and `author` and a method `getDetails()` that logs title and author.
5. Why should we use setters instead of directly modifying object properties?
6. What happens if you try to set a negative price using a setter with validation?
7. What is the output of this code?

```javascript
class Animal {
  constructor(type) {
    this.type = type;
  }

  speak() {
    console.log(`I am a ${this.type}`);
  }
}

const dog = new Animal("Dog");
dog.speak();
```

## //-----------------------------------------------------------------------------------------

## 🔹 1. Classes in JS:

## 🧠 1. What Exactly is a Class? (Deep Dive)

### ✅ In JavaScript:

- JavaScript mein **classes** are just **special functions** (syntactic sugar) introduced in **ES6 (2015)** to make **OOP (Object-Oriented Programming)** more intuitive and readable.
- Behind the scenes, JavaScript still uses **prototypes**, but class syntax makes it **cleaner and closer to classical OOP languages** like Java, C++, etc.

### ✅ Core Concepts:

- **Constructor**: Method that runs when a new object is created
- **Instance Properties**: Object-specific data
- **Prototype Methods**: Shared methods among all instances
- **Static Methods**: Belong to the class, not instances
- **Inheritance (extends)**: One class can inherit from another
- **Encapsulation**: Getters, setters to protect or control access

---

## 🔩 2. Internal Structure of a Class

```javascript
class User {
  constructor(username, email) {
    this.username = username; // instance property
    this.email = email;
  }

  // prototype method
  login() {
    console.log(`${this.username} logged in`);
  }

  // static method
  static register(user) {
    console.log(`User ${user.username} registered.`);
  }
}

const u1 = new User("Yogee", "yogee@example.com");
u1.login(); // ✅ method on instance
User.register(u1); // ✅ static method on class
```

---

## ⚒️ 3. Behind the Scenes: How Classes Work Internally

```javascript
// Classes are functions under the hood!
console.log(typeof User); // function

// Method defined in prototype
console.log(User.prototype.login); // function login()...
```

JavaScript internally does:

```javascript
function User(username, email) {
  this.username = username;
  this.email = email;
}

User.prototype.login = function () {
  console.log(`${this.username} logged in`);
};

User.register = function (user) {
  console.log(`User ${user.username} registered.`);
};
```

✅ **Conclusion:** Class syntax = cleaner way to use constructor functions and prototypes.

---

## 🔄 4. Inheritance & `super()`

```javascript
class Admin extends User {
  constructor(username, email, role) {
    super(username, email); // calls parent class constructor
    this.role = role;
  }

  deleteUser(user) {
    console.log(`${this.username} deleted ${user.username}`);
  }
}

const admin = new Admin("AdminYogee", "admin@site.com", "admin");
admin.login(); // from parent
admin.deleteUser(u1); // own method
```

---

## 📦 5. Encapsulation with Getters & Setters

```javascript
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this._balance = balance; // underscore = pretend private
  }

  get balance() {
    return `₹${this._balance}`;
  }

  set balance(amount) {
    if (amount < 0) {
      throw new Error("Balance can't be negative");
    }
    this._balance = amount;
  }
}

const acc = new BankAccount("Yogee", 1000);
console.log(acc.balance); // ₹1000
acc.balance = 500;
console.log(acc.balance); // ₹500
```

---

## ⚡ 6. Static Methods and Properties

```javascript
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtil.add(3, 4)); // 7
```

### ✅ Use-case: Utility/helper functions jinke liye object banana zaroori nahi hai.

---

## 🚀 7. Real-World Use Cases

### 🔹 Frontend (React/Next.js):

- Legacy class-based components (before hooks)
- Creating model-like structures for **form state**, **data modeling**
- Client-side data structures (e.g. Product, User)

### 🔹 Backend (Node/Express):

- Representing **database models** (e.g. User, Order, Product)
- Validation logic, computed values using getters/setters
- Reusable services (EmailSender, FileUploader, etc.)

### 🔹 Common Scenarios:

| Use Case            | Class Role                           |
| ------------------- | ------------------------------------ |
| User Authentication | `User` class with password hashing   |
| E-Commerce          | `Product`, `Cart`, `Order` classes   |
| File Upload System  | `FileUploader` with validate()       |
| Notification System | `NotificationService` static methods |
| Backend Services    | Classes with dependency injection    |

---

## 🎯 8. Best Practices

1. ✅ Keep class focused (Single Responsibility Principle)
2. ✅ Use getters/setters for sensitive properties
3. ✅ Prefer composition over inheritance (use functions inside objects instead of deep hierarchies)
4. ❌ Avoid stateful static classes unless needed
5. ✅ Organize reusable logic in small, modular classes

---

## 🔨 9. Mini Advanced Project Idea

### 💼 “TaskManager” App (Frontend Only)

- Create a `Task` class with `title`, `dueDate`, `isCompleted`
- Add methods: `markCompleted()`, `getStatus()`
- Use getter to show readable status (`"Completed"` / `"Pending"`)
- HTML + CSS UI: Form to add tasks, list them with buttons to mark complete

---

## 🧪 10. Advanced Test Your Knowledge (Take your time!)

1. How are **static methods** different from regular methods in a class?
2. What’s the role of the `super()` keyword?
3. Create a class `Employee` with name, salary and a getter `annualSalary` that returns salary × 12.
4. In what situation would you prefer using a getter instead of a method?
5. Why is `User.prototype.login` and not `User.login` in most cases?
6. What are some disadvantages of using too many class hierarchies?
7. How would you simulate private fields before ES2020 (before `#private`)?
8. When would you **avoid** using classes and prefer pure functions?
9. What’s the real difference between `this._value` and `this.value` when using setters?
10. What output will this give?

```javascript
class Counter {
  constructor() {
    this._count = 0;
  }

  get count() {
    return this._count;
  }

  set count(val) {
    if (val < 0) return;
    this._count = val;
  }
}

const c = new Counter();
c.count = -5;
console.log(c.count);
```
