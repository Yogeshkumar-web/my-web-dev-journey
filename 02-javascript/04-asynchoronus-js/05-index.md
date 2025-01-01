### **Understanding `async` and `await` in JavaScript**

The `async` and `await` keywords provide a more readable and intuitive way to work with asynchronous operations in JavaScript, compared to Promises alone.

#### **What is `async`?**

-   The `async` keyword is used to declare a function as asynchronous.
-   It ensures that the function returns a Promise, even if it contains synchronous code.
-   Any value returned by an `async` function is automatically wrapped in a resolved Promise.

#### **What is `await`?**

-   The `await` keyword is used inside `async` functions to pause the execution of the function until the Promise is resolved.
-   It makes the asynchronous code appear synchronous, enhancing readability.

---

### **How `async` and `await` Work Together**

1. An `async` function allows the use of `await` within it.
2. The `await` keyword pauses execution until the awaited Promise settles, and then it resumes with the resolved value.
3. Errors in the awaited Promises can be caught using `try...catch`.

---

### **Example: Basic Usage of `async` and `await`**

```javascript
// Simulating a fetch operation with a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data fetched!"), 2000);
    });
}

// Using async/await
async function getData() {
    console.log("Fetching data...");
    const result = await fetchData();
    console.log(result);
}

getData();
```

**Output:**

```
Fetching data...
(2-second delay)
Data fetched!
```

---

### **Error Handling with `async/await`**

```javascript
function fetchWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Fetch failed!")), 2000);
    });
}

async function handleError() {
    try {
        const data = await fetchWithError();
        console.log(data);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

handleError();
```

**Output:**

```
Error: Fetch failed!
```

---

### **Advantages of `async/await`**

1. **Improved Readability:** Makes asynchronous code look and behave more like synchronous code.
2. **Error Handling:** Easier to use `try...catch` blocks compared to chaining `.catch()`.
3. **Chaining:** Enables simple chaining without deeply nested `.then()` calls.

---

### **Top 10 Questions on `async` and `await` in JavaScript**

1. **What does the `async` keyword do when applied to a function in JavaScript? What is its return value?**

2. **What happens if you use `await` outside of an `async` function? Why is it not allowed?**

3. **Write a code example of an `async` function that uses `await` to fetch data from a simulated API.**

4. **How does `await` improve the readability of asynchronous code compared to using Promises with `.then()`?**

5. **What happens if the Promise awaited with `await` is rejected? How can you handle errors in such cases?**

6. **Explain how you would use `try...catch` with `async` and `await` to handle errors effectively. Provide a code example.**

7. **If an `async` function returns a value directly (not a Promise), what does the caller of the function receive?**

8. **What happens when multiple `await` statements are used inside an `async` function? How does JavaScript handle them?**

9. **How would you run multiple asynchronous operations in parallel while using `async` and `await`? Illustrate with an example.**

10. **Discuss the differences between `await` and `.then()` in terms of error handling, readability, and execution behavior.**
