### **Accessing and Modifying Object Properties**

In JavaScript, objects are collections of key-value pairs (properties). To work with these properties, you need to understand how to access and modify them effectively.

---

#### **1. Accessing Properties**

You can access properties in an object using:

-   **Dot Notation**
-   **Bracket Notation**

Example:

```javascript
const person = {
    name: "Alice",
    age: 25,
    job: "Developer",
};

// Dot notation
console.log(person.name); // Output: Alice

// Bracket notation
console.log(person["job"]); // Output: Developer
```

#### **When to Use Bracket Notation**

-   When the property name is dynamic or stored in a variable:

```javascript
const key = "age";
console.log(person[key]); // Output: 25
```

-   When the property name includes spaces or special characters:

```javascript
const product = { "item-name": "Laptop" };
console.log(product["item-name"]); // Output: Laptop
```

---

#### **2. Modifying Properties**

You can add, update, or delete properties in an object.

##### **Adding or Updating Properties**

-   Simply assign a value to a property. If it doesn’t exist, it will be created.

```javascript
person.age = 30; // Updates age
person.city = "New York"; // Adds a new property
console.log(person);
// Output: { name: 'Alice', age: 30, job: 'Developer', city: 'New York' }
```

##### **Deleting Properties**

-   Use the `delete` operator to remove a property.

```javascript
delete person.job;
console.log(person);
// Output: { name: 'Alice', age: 30, city: 'New York' }
```

---

#### **3. Checking if a Property Exists**

-   Use the **`in`** operator:

```javascript
console.log("name" in person); // Output: true
console.log("salary" in person); // Output: false
```

-   Use the **`hasOwnProperty()`** method:

```javascript
console.log(person.hasOwnProperty("age")); // Output: true
console.log(person.hasOwnProperty("salary")); // Output: false
```

---

#### **4. Iterating Over Properties**

To loop through an object’s properties, use:

-   **`for...in` Loop**

```javascript
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// Output:
// name: Alice
// age: 30
// city: New York
```

-   **`Object.keys()`**

```javascript
Object.keys(person).forEach((key) => {
    console.log(`${key}: ${person[key]}`);
});
// Output is the same as `for...in`
```

---

#### **5. Dynamic Property Names**

You can dynamically create or access properties:

```javascript
const dynamicKey = "email";
person[dynamicKey] = "alice@example.com";
console.log(person.email); // Output: alice@example.com
```

---

### **Examples: Practical Use Cases**

1. **Creating an Object with Dynamic Keys**

```javascript
const key = "favoriteColor";
const user = {};
user[key] = "blue";
console.log(user); // Output: { favoriteColor: 'blue' }
```

2. **Merging Two Objects**

```javascript
const additionalInfo = { country: "USA", age: 35 };
Object.assign(person, additionalInfo);
console.log(person);
// Output: { name: 'Alice', age: 35, city: 'New York', country: 'USA' }
```

3. **Using Optional Chaining for Safe Access**

```javascript
const user = { profile: { name: "Bob" } };
console.log(user.profile?.name); // Output: Bob
console.log(user.address?.city); // Output: undefined (does not throw an error)
```

---

### **Top 10 Questions: Accessing and Modifying Object Properties**

1. **Basics of Accessing Properties**

    - What are the differences between dot notation and bracket notation in JavaScript for accessing object properties?
    - When should you use bracket notation instead of dot notation to access a property?

2. **Dynamic Property Access**

    - How can you access an object’s property when the property name is stored in a variable?
    - Write a program to dynamically add a property to an object using a variable as the key.

3. **Modifying Properties**

    - How do you add a new property to an existing object in JavaScript?
    - What happens if you try to assign a value to a property that already exists in an object?

4. **Deleting Properties**

    - How does the `delete` operator work, and what happens if you try to delete a non-existent property?

5. **Checking for Property Existence**

    - What is the difference between the `in` operator and the `hasOwnProperty()` method when checking for a property in an object?

6. **Iterating Over Properties**

    - How can you loop through all properties of an object using a `for...in` loop?
    - How does `Object.keys()` differ from `Object.entries()` in iterating over an object?

7. **Merging Objects**

    - How can you merge two objects into one using `Object.assign()` or the spread operator (`...`)?

8. **Optional Chaining**

    - What is optional chaining (`?.`) in JavaScript, and how can it help when accessing nested properties in an object?

9. **Dynamic Property Creation**

    - Write a program where a user provides a key and value, and you dynamically add it to an object.

10. **Use Cases**
    - Given the following object, what is the output of the code? Why?
    ```javascript
    const car = { brand: "Tesla", model: "Model S" };
    const key = "year";
    car[key] = 2022;
    delete car.brand;
    console.log(car.model);
    console.log("brand" in car);
    console.log(car.hasOwnProperty("year"));
    ```
