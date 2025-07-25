## 🔹 1. Simple Analogy (Hinglish)

**Analogy:**
Socho tumhare dost tumse baar-baar wahi sawaal poochte hain:

> "Bhai 12 ka table kya hota hai?"

Tum har baar soch ke jawab doge? Nahi na?

Ek smart banda kya karega? Pehli baar answer calculate karega, **usko likh lega ya yaad kar lega**, fir agli baar koi pooche toh seedha wahi answer de dega — bina dobara sochne ke.

➡️ यही होता है **memoization** — ek baar kisi expensive calculation ka result yaad rakh lena (cache), taaki baar-baar wohi kaam na karna पड़े.

---

## 🔹 2. Formal Definition

**Memoization** is a performance optimization technique that involves caching the results of function calls based on their input parameters. If the same input is provided again, the cached result is returned instead of re-computing the result.

---

## 🔹 3. Core Concepts & Code Examples

### 🔸 Concept 1: Basic Synchronous Memoization

#### ✅ Explanation:

Agar function baar-baar same input ke saath call ho raha ho, toh hum ek object ya Map mein result store kar sakte hain.

#### ✅ Code Example:

```javascript
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args); // unique key for each argument set

    if (cache[key]) {
      console.log("Fetching from cache...");
      return cache[key];
    }

    console.log("Calculating result...");
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// Normal slow function
function slowAddition(a, b) {
  for (let i = 0; i < 1e9; i++) {} // simulate heavy work
  return a + b;
}

const memoizedAdd = memoize(slowAddition);

console.log(memoizedAdd(5, 10)); // Calculating
console.log(memoizedAdd(5, 10)); // From Cache ✅
```

---

### 🔸 Concept 2: Asynchronous Memoization (with Promises)

#### ✅ Explanation:

Async functions (like API calls) bhi memoize ho sakte hain. Bas `Promise` ko cache mein store karna hota hai.

#### ✅ Code Example:

```javascript
function asyncMemoize(fn) {
  const cache = new Map();

  return async function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log("Fetching from async cache...");
      return cache.get(key); // already resolved promise
    }

    console.log("Fetching new async result...");
    const promise = fn(...args);
    cache.set(key, promise);
    return promise;
  };
}

// Simulated API
async function fetchUserData(id) {
  console.log("API call for user:", id);
  return new Promise((resolve) =>
    setTimeout(() => resolve({ id, name: "User " + id }), 2000)
  );
}

const memoizedFetch = asyncMemoize(fetchUserData);

// Usage
memoizedFetch(1).then(console.log); // API call
memoizedFetch(1).then(console.log); // From cache
```

---

## 🔹 4. The "Why"

**Memoization is crucial for:**

✅ Reducing redundant calculations (like factorials, Fibonacci, matrix operations)
✅ Caching API responses (to avoid rate limits / speed up UI)
✅ Enhancing performance of React components (e.g., `useMemo`, `useCallback`)
✅ Real-world use: Search bars, auto-suggestions, scroll-based pagination, etc.

**Example:**
News website ka search bar: same search query repeat hone pe fast suggestion chahiye — API call bar-bar nahi honi chahiye.

---

## 🔹 5. Practical Project Idea

### 🧠 Mini-Project: "Memoized Weather Fetcher"

📌 Build a small app using basic HTML + JavaScript:

- Input: City Name
- Output: Simulated weather info (fake API)
- Memoize the function so same city ka result cache se aaye instantly

#### Example:

```javascript
async function getWeather(city) {
  console.log("Calling API for:", city);
  return new Promise((resolve) =>
    setTimeout(() => resolve(`🌤️ Weather in ${city}: 30°C`), 1500)
  );
}

const memoizedWeather = asyncMemoize(getWeather);

// Hook it with input & button in HTML
```

---

## 🔹 6. Test My Knowledge

**Answer the following before I give you correct ones:**

1. What is memoization in simple terms?
2. Why do we use `JSON.stringify(args)` as a cache key?
3. What happens if we don’t memoize a slow function?
4. Can memoization be used with async functions like API calls?
5. What's the difference between `memoization` and `caching`?
6. In which real-world UI feature can memoization significantly improve performance?
7. Why is `Map()` preferred over `{}` in some memoization use-cases?
8. What does the returned function from `memoize()` do?
9. Will memoization work if inputs are different every time? Why or why not?
10. Can memoization reduce server costs in a production app?
