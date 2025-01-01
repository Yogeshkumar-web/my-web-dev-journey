### **Polymorphism and Encapsulation in JavaScript**

Object-oriented programming (OOP) in JavaScript includes key principles like **polymorphism** and **encapsulation** to enhance code reusability, modularity, and maintainability. Let’s break these concepts down.

---

### **1. Polymorphism**

**Polymorphism** means "many forms." In OOP, it refers to the ability of a method to perform different actions based on the object it is associated with. It allows objects of different types to be treated as instances of the same class through a shared interface.

#### **Polymorphism Example: Method Overriding**

When a child class provides its own implementation of a method that overrides the parent class’s method:

```javascript
class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Cat meows");
    }
}

const animals = [new Dog(), new Cat(), new Animal()];

animals.forEach((animal) => {
    animal.speak(); // Output: Dog barks, Cat meows, Animal makes a sound
});
```

#### **Polymorphism with Interfaces**

In JavaScript, interfaces can be implemented using shared methods or properties.

```javascript
class Shape {
    calculateArea() {
        throw new Error("This method must be overridden");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

const shapes = [new Circle(5), new Rectangle(10, 20)];
shapes.forEach((shape) => console.log(shape.calculateArea()));
// Output: Area of Circle, Area of Rectangle
```

---

### **2. Encapsulation**

**Encapsulation** refers to the bundling of data (properties) and methods into a single unit (a class or object) and restricting access to some components to ensure controlled interaction.

#### **Access Modifiers**

JavaScript uses **public**, **private**, and **protected** properties to achieve encapsulation (ES6+ uses private fields).

#### **Encapsulation Example with Private Fields**

```javascript
class Person {
    #name; // Private field

    constructor(name, age) {
        this.#name = name; // Encapsulation of name
        this.age = age; // Public field
    }

    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name = name;
    }
}

const person = new Person("John", 30);
console.log(person.getName()); // Output: John
person.setName("Doe");
console.log(person.getName()); // Output: Doe
console.log(person.#name); // Error: Private field '#name' must be accessed within the class
```

#### **Encapsulation with Getters and Setters**

Getters and setters provide controlled access to properties.

```javascript
class Product {
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }

    // Getter
    get price() {
        return this._price;
    }

    // Setter
    set price(value) {
        if (value < 0) {
            console.log("Price cannot be negative");
        } else {
            this._price = value;
        }
    }
}

const product = new Product("Laptop", 1000);
console.log(product.price); // Output: 1000
product.price = -500; // Output: Price cannot be negative
product.price = 1200;
console.log(product.price); // Output: 1200
```

---

### **3. Combining Polymorphism and Encapsulation**

By combining these concepts, you can create robust and reusable code that is both secure and flexible.

#### **Example: Payment Processing System**

```javascript
class Payment {
    processPayment(amount) {
        console.log(`Processing payment of $${amount}`);
    }
}

class CreditCardPayment extends Payment {
    processPayment(amount) {
        console.log(`Processing credit card payment of $${amount}`);
    }
}

class PayPalPayment extends Payment {
    processPayment(amount) {
        console.log(`Processing PayPal payment of $${amount}`);
    }
}

class PaymentHandler {
    #paymentMethod; // Encapsulation

    setPaymentMethod(paymentMethod) {
        this.#paymentMethod = paymentMethod;
    }

    process(amount) {
        if (!this.#paymentMethod) {
            console.log("No payment method set");
        } else {
            this.#paymentMethod.processPayment(amount); // Polymorphism
        }
    }
}

const paymentHandler = new PaymentHandler();

paymentHandler.setPaymentMethod(new CreditCardPayment());
paymentHandler.process(100); // Output: Processing credit card payment of $100

paymentHandler.setPaymentMethod(new PayPalPayment());
paymentHandler.process(200); // Output: Processing PayPal payment of $200
```

---

### **Key Questions**

1. What is polymorphism, and how is it implemented in JavaScript?
2. Explain the concept of method overriding with an example.
3. How can you use `super` in a subclass to access parent methods?
4. What is encapsulation, and why is it important?
5. How do private fields (`#field`) differ from public properties?
6. What are getters and setters, and how do they contribute to encapsulation?
7. How does polymorphism make a program flexible and maintainable?
8. Can you demonstrate polymorphism using an array of different object types?
9. How can encapsulation prevent unauthorized access to sensitive data?
10. Write a program that uses both polymorphism and encapsulation to manage users and roles.
