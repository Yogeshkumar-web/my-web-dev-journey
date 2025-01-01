### **Introduction to Object-Oriented Programming (OOP) in JavaScript**

Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects." In OOP, objects represent real-world entities with properties (data) and methods (functions). JavaScript supports OOP and enables developers to write modular, reusable, and maintainable code.

---

### **Core Concepts of OOP in JavaScript**

1. **Objects**  
   Objects are collections of key-value pairs (properties and methods). In JavaScript, objects can be created using object literals, constructor functions, or classes.

    **Example: Object Literal**

    ```javascript
    const car = {
        brand: "Toyota",
        model: "Corolla",
        start: function () {
            console.log("Car started");
        },
    };

    console.log(car.brand); // Access property
    car.start(); // Call method
    ```

2. **Classes**  
   Classes are templates for creating objects. They define the structure (properties) and behavior (methods) of the objects.

    **Example: Using a Class**

    ```javascript
    class Car {
        constructor(brand, model) {
            this.brand = brand;
            this.model = model;
        }
        start() {
            console.log(`${this.brand} ${this.model} started.`);
        }
    }

    const myCar = new Car("Toyota", "Corolla");
    myCar.start();
    ```

3. **Encapsulation**  
   Encapsulation restricts direct access to some of the object’s properties and methods and allows controlled access via public methods.

    **Example: Encapsulation with Private Fields**

    ```javascript
    class BankAccount {
        #balance = 0; // Private field
        deposit(amount) {
            this.#balance += amount;
        }
        getBalance() {
            return this.#balance;
        }
    }

    const account = new BankAccount();
    account.deposit(100);
    console.log(account.getBalance()); // 100
    ```

4. **Inheritance**  
   Inheritance allows a class to inherit properties and methods from another class. It enables code reuse.

    **Example: Inheritance**

    ```javascript
    class Animal {
        constructor(name) {
            this.name = name;
        }
        speak() {
            console.log(`${this.name} makes a sound.`);
        }
    }

    class Dog extends Animal {
        speak() {
            console.log(`${this.name} barks.`);
        }
    }

    const dog = new Dog("Buddy");
    dog.speak(); // Buddy barks.
    ```

5. **Polymorphism**  
   Polymorphism allows objects to take on many forms, meaning a child class can override methods from its parent class.

    **Example: Polymorphism**

    ```javascript
    class Shape {
        area() {
            return 0;
        }
    }

    class Circle extends Shape {
        constructor(radius) {
            super();
            this.radius = radius;
        }
        area() {
            return Math.PI * this.radius ** 2;
        }
    }

    const circle = new Circle(5);
    console.log(circle.area()); // 78.54
    ```

---

### **Why Use OOP in JavaScript?**

1. **Code Reusability**: Write once, use many times.
2. **Scalability**: Handle large codebases efficiently.
3. **Maintainability**: Easier debugging and updates.
4. **Modularity**: Encapsulation ensures that objects have a clear structure.

---

### **Key Features of OOP in JavaScript**

-   Objects and Prototypes
-   ES6 Classes and Inheritance
-   Encapsulation using private fields or closures
-   Dynamic and flexible object creation

---

### **Key Questions**

1. What is Object-Oriented Programming (OOP) and why is it important?
2. How are objects created in JavaScript?
3. Explain the difference between object literals and classes in JavaScript.
4. What is the purpose of encapsulation, and how can it be implemented in JavaScript?
5. How does inheritance work in JavaScript, and how do you implement it using `extends`?
6. What is polymorphism, and how is it achieved in JavaScript?
7. Explain the role of the `constructor` in a JavaScript class.
8. What is the difference between public and private fields in JavaScript?
9. How does JavaScript’s prototype chain support OOP principles?
10. Why might you use OOP in JavaScript instead of functional programming?
