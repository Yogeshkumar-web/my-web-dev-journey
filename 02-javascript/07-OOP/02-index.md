### **Defining Classes and Objects in JavaScript**

Classes and objects are fundamental concepts in JavaScript's object-oriented programming (OOP) model. Classes serve as blueprints for creating objects, while objects are instances of those classes, containing data (properties) and behavior (methods).

---

### **1. What is a Class in JavaScript?**

A **class** is a template that defines the structure (properties) and behavior (methods) of objects. Classes were introduced in ECMAScript 2015 (ES6) as syntactic sugar over JavaScript’s prototype-based inheritance.

#### **Defining a Class**

```javascript
class Person {
    constructor(name, age) {
        this.name = name; // property
        this.age = age; // property
    }

    // method
    greet() {
        console.log(
            `Hello, my name is ${this.name}, and I am ${this.age} years old.`
        );
    }
}
```

---

### **2. What is an Object in JavaScript?**

An **object** is an instance of a class. It is a collection of key-value pairs, where the keys are called properties (data) and values can be data or functions (methods).

#### **Creating an Object**

You can create an object using the `new` keyword with a class constructor:

```javascript
const person1 = new Person("Alice", 25);
person1.greet(); // Output: Hello, my name is Alice, and I am 25 years old.
```

---

### **3. Key Components of a Class**

1. **Constructor Method**

    - A special method called when an object is instantiated.
    - Used to initialize properties.

    ```javascript
    class Car {
        constructor(brand, model) {
            this.brand = brand;
            this.model = model;
        }
    }
    const myCar = new Car("Toyota", "Corolla");
    ```

2. **Properties**

    - Variables that belong to an object and store its data.
    - Accessed using `this` keyword inside the class.

    ```javascript
    console.log(myCar.brand); // Output: Toyota
    ```

3. **Methods**

    - Functions that belong to a class.
    - Define the behavior of objects.

    ```javascript
    class Animal {
        speak() {
            console.log("This animal makes a sound.");
        }
    }
    const animal = new Animal();
    animal.speak(); // Output: This animal makes a sound.
    ```

4. **Static Methods**
    - Defined with the `static` keyword and are called directly on the class, not on instances.
    ```javascript
    class MathUtils {
        static add(a, b) {
            return a + b;
        }
    }
    console.log(MathUtils.add(5, 10)); // Output: 15
    ```

---

### **4. Combining Classes and Objects**

```javascript
class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} says Woof!`);
    }
}

// Create instances (objects)
const dog1 = new Dog("Buddy", "Golden Retriever");
const dog2 = new Dog("Max", "Labrador");

dog1.bark(); // Output: Buddy says Woof!
dog2.bark(); // Output: Max says Woof!
```

---

### **5. Class vs Object**

| **Class**                   | **Object**                       |
| --------------------------- | -------------------------------- |
| A blueprint for objects.    | An instance of a class.          |
| Defines properties/methods. | Contains actual data/behavior.   |
| Created using `class`.      | Created using `new ClassName()`. |

---

### **6. Default and Custom Methods**

You can add methods to classes to define their behavior:

```javascript
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

const rect = new Rectangle(5, 10);
console.log(rect.area()); // Output: 50
```

---

### **Best Practices for Defining Classes and Objects**

1. Use **meaningful names** for classes and methods.
2. Encapsulate data to make it private (e.g., using `#` for private fields).
3. Follow DRY (Don’t Repeat Yourself) by reusing methods and properties.

---

### **Key Questions**

1. What is the syntax to define a class in JavaScript?
2. How is an object different from a class in JavaScript?
3. What is the role of the `constructor` method in a class?
4. How do you define and call static methods in JavaScript?
5. What is the purpose of the `this` keyword inside a class?
6. Can you explain the difference between instance methods and static methods?
7. How do you create and use properties and methods in an object?
8. What happens if you omit the `constructor` method in a class?
9. How do you access object properties dynamically using brackets notation?
10. How would you define and use private fields in a JavaScript class?
