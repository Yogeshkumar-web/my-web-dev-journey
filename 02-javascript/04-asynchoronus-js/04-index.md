### **Promises in JavaScript**

#### **What are Promises?**

A **Promise** in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation. It allows you to write cleaner asynchronous code and avoid Callback Hell.

-   A promise can be in one of three states:
    1. **Pending**: The operation has not completed yet.
    2. **Fulfilled**: The operation completed successfully.
    3. **Rejected**: The operation failed.

Once a promise is either fulfilled or rejected, it becomes **settled**, and its state cannot change.

---

#### **Creating a Promise**

A promise is created using the `Promise` constructor, which takes a function (executor) as an argument. The executor function has two parameters:

-   `resolve`: Call this when the operation is successful.
-   `reject`: Call this when the operation fails.

**Example**:

```javascript
const myPromise = new Promise((resolve, reject) => {
    let success = true; // Simulating an operation
    if (success) {
        resolve("Operation succeeded!");
    } else {
        reject("Operation failed.");
    }
});
```

---

#### **Using a Promise**

Promises are consumed using the `.then()` and `.catch()` methods.

**Example**:

```javascript
myPromise
    .then((message) => {
        console.log("Success:", message); // Runs if resolved
    })
    .catch((error) => {
        console.error("Error:", error); // Runs if rejected
    });
```

**Key Methods**:

1. `.then()`: Runs when the promise is resolved.
2. `.catch()`: Runs when the promise is rejected.
3. `.finally()`: Runs regardless of the outcome (resolved or rejected).

---

#### **Chaining Promises**

Promises can be chained to handle a sequence of asynchronous tasks.

**Example**:

```javascript
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched"), 1000);
});

fetchData
    .then((data) => {
        console.log(data);
        return "Processing data";
    })
    .then((result) => {
        console.log(result);
        return "Data processed";
    })
    .then((finalResult) => {
        console.log(finalResult);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
```

---

#### **Common Use Cases**

1. **Fetching data from an API**:

    ```javascript
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
    ```

2. **Simulating asynchronous operations**:

    ```javascript
    function delayedMessage() {
        return new Promise((resolve) => {
            setTimeout(() => resolve("Hello after 2 seconds"), 2000);
        });
    }

    delayedMessage().then((message) => console.log(message));
    ```

---

### Key Concepts:

1. **State**: Pending, Fulfilled, Rejected.
2. **Methods**: `.then()`, `.catch()`, `.finally()`.
3. **Chaining**: Handling sequential tasks using promises.

---

### **Top 10 Questions on Promises in JavaScript**

1. **What are the three possible states of a Promise in JavaScript, and how do they work?**

2. **Explain the purpose of the `resolve` and `reject` functions in the Promise constructor. How are they used?**

3. **Write a code example to demonstrate how to create a Promise and handle both the resolved and rejected states.**

4. **What is the difference between `.then()`, `.catch()`, and `.finally()` methods in Promises? Provide examples of their usage.**

5. **What happens if you return a Promise from within a `.then()` block? How does it affect chaining?**

6. **How can Promises help avoid callback hell in JavaScript? Illustrate with an example.**

7. **What is the difference between synchronous and asynchronous code? How does a Promise make asynchronous code easier to manage?**

8. **What will happen if a Promise is neither resolved nor rejected? Does it affect the application?**

9. **How does error handling work in Promises? Write a code example where you handle both successful and failed asynchronous operations.**

10. **Explain the concept of promise chaining with an example. Why is it considered better than nesting `.then()` blocks?**
