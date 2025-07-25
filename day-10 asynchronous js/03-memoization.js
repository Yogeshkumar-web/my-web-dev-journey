// Memoization

// Memoization is a performance optimization technique that involves caching the results of function calls based on their input parameters. If the same input is provided again, the cached result is returned instead of re-computing the result.

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

// Asynchronous Memoization (with Promises)
// Async functions (like API calls) bhi memoize ho sakte hain. Bas Promise ko cache mein store karna hota hai.

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
