### **Key Concepts: Callbacks, Promises, Async/Await, `setTimeout`, `setInterval`**

This topic consolidates the foundational ideas of asynchronous programming in JavaScript. Let’s break it into concise sections:

---

#### **1. Callbacks**

-   **Definition**: A function passed as an argument to another function, to be executed later (e.g., after an asynchronous operation).
-   **Use case**: Handling async tasks like API calls or file reading.
-   **Challenge**: Can lead to **callback hell** when nesting becomes complex.

**Example**:

```javascript
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received!");
    }, 1000);
}
fetchData((data) => console.log(data)); // Outputs: Data received!
```

---

#### **2. Promises**

-   **Definition**: An object representing the eventual success or failure of an async operation.
-   **States**:
    -   Pending
    -   Fulfilled (Resolved)
    -   Rejected
-   **Methods**:
    -   `.then()` for success
    -   `.catch()` for errors
    -   `.finally()` for cleanup

**Example**:

```javascript
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data received!");
    }, 1000);
});
fetchData
    .then((data) => console.log(data)) // Outputs: Data received!
    .catch((error) => console.error(error));
```

---

#### **3. Async/Await**

-   **Definition**: A modern syntax for handling Promises in a synchronous-like manner.
-   **Key Features**:
    -   `async` marks a function as asynchronous.
    -   `await` pauses execution until the Promise resolves/rejects.
-   **Advantage**: Improved readability compared to chaining `.then()`.

**Example**:

```javascript
async function fetchData() {
    const data = await new Promise((resolve) =>
        setTimeout(() => resolve("Data received!"), 1000)
    );
    console.log(data); // Outputs: Data received!
}
fetchData();
```

---

#### **4. setTimeout and setInterval**

-   **setTimeout**: Executes a function once after a specified delay.
-   **setInterval**: Executes a function repeatedly at specified intervals.
-   **Key Difference**: `setTimeout` is for one-time delays, while `setInterval` repeats until cleared.

**Examples**:

-   **setTimeout**:

```javascript
setTimeout(() => console.log("Executed after 2 seconds"), 2000);
```

-   **setInterval**:

```javascript
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Count: ${count}`);
    if (count === 5) clearInterval(intervalId); // Stops after 5 iterations
}, 1000);
```

---

#### **5. Combining Concepts**

**Example of Using Async/Await with setTimeout**:

```javascript
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function processTask() {
    console.log("Starting task...");
    await delay(2000); // Pause for 2 seconds
    console.log("Task completed!");
}
processTask();
```

---

Here are the top 10 questions to test your understanding of **Key Concepts: Callbacks, Promises, Async/Await, `setTimeout`, `setInterval`**:

---

### **Callbacks**

1. What is a callback function, and how is it used in asynchronous programming?
2. Explain the concept of "callback hell" and how it can be avoided.
3. Write an example of a callback function that performs a task after a 3-second delay.
4. How can error handling be implemented in a callback-based function?

---

### **Promises**

5. What are the three states of a Promise? Explain each state with examples.
6. Write a Promise that resolves after 2 seconds and logs a success message using `.then()`.
7. How does the `.catch()` method help in handling errors in Promises?
8. What is the difference between `.then()` chaining and using multiple `.then()` methods?

---

### **Async/Await**

9. How does the `await` keyword simplify working with Promises? Write an example that fetches data asynchronously using `async/await`.
10. What happens when a Promise is rejected inside an `async` function? How can errors be caught and handled?

---

### Bonus Practice

-   Implement a function that uses both `setTimeout` and Promises to simulate an API call.
-   Explore the practical difference between using Promises and `async/await` in terms of readability and error handling.
