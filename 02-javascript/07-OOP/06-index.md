### **Key Concepts of Classes, Objects, Constructors, Inheritance, and Prototypes**

These concepts are the building blocks of **Object-Oriented Programming (OOP)** in JavaScript. Let’s break each concept down:

---

### **1. Classes**

A **class** is a blueprint for creating objects. It encapsulates data (properties) and methods that work on that data.

#### Example:

```javascript
class Car {
    constructor(brand, model) {
        this.brand = brand; // Properties
        this.model = model;
    }

    start() {
        // Method
        console.log(`${this.brand} ${this.model} is starting...`);
    }
}

const car1 = new Car("Tesla", "Model S");
car1.start(); // Output: Tesla Model S is starting...
```

---

### **2. Objects**

An **object** is an instance of a class. It contains properties and methods.

#### Example:

```javascript
const car = {
    brand: "Ford",
    model: "Mustang",
    start() {
        console.log(`${this.brand} ${this.model} is starting...`);
    },
};

car.start(); // Output: Ford Mustang is starting...
```

---

### **3. Constructors**

A **constructor** is a special method in a class that initializes the properties of an object when it is created.

#### Example:

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, I am ${this.name}, and I am ${this.age} years old.`);
    }
}

const person1 = new Person("Alice", 25);
person1.introduce(); // Output: Hi, I am Alice, and I am 25 years old.
```

---

### **4. Inheritance**

**Inheritance** allows a class (child class) to inherit properties and methods from another class (parent class).

#### Example:

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    makeSound() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Buddy");
dog.makeSound(); // Output: Buddy barks.
```

---

### **5. Prototypes**

JavaScript uses **prototypes** for inheritance. Every object in JavaScript has an internal `[[Prototype]]` property that points to another object or `null`.

#### Example:

```javascript
function Vehicle(type) {
    this.type = type;
}

Vehicle.prototype.drive = function () {
    console.log(`Driving a ${this.type}`);
};

const bike = new Vehicle("bike");
bike.drive(); // Output: Driving a bike
```

---

### **Key Questions**

1. What is a class, and how does it differ from an object?
2. Write a program that creates a class `Animal` with a method `speak()` and subclasses `Dog` and `Cat` with their own implementations of `speak()`.
3. How do constructors work in JavaScript, and why are they important?
4. What is inheritance, and how can it simplify code reusability?
5. Demonstrate how to call a parent class method from a child class using `super`.
6. What are prototypes, and how do they enable inheritance in JavaScript?
7. What is the difference between classical inheritance and prototypal inheritance?
8. How does the `Object.create()` method work for creating prototypes?
9. Explain how prototype chaining works with an example.
10. Why is inheritance considered a "has-a" or "is-a" relationship?
