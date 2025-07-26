// Debounce and Throttle

// Debouncing is a technique used to delay the execution of a function until after a specified time has passed since the last time the event was triggered.

// Throttling ensures that a function is executed at most once in a specified time interval, regardless of how many times the event is triggered.

// Debounce — Concept
// Debounce waits for the event to “settle down” before running the function.
// Useful for search inputs, window resize, etc.

// Debounce Function
function debounce(fn, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId); // Clear previous timer
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Usage Example
const handleSearch = debounce(() => {
  console.log("Search API called...");
}, 500);

document.getElementById("searchInput").addEventListener("input", handleSearch);

// 📌 Jab tak user type karta jaa raha hai, function call delay hota rahega. Sirf last typing ke baad 500ms ka gap milta hai tabhi call hota hai.

// Throttle — Concept
// Throttle ensures the function runs at regular intervals.
// Useful for scroll, resize, mouse movement where you want to limit execution rate.

function throttle(fn, interval) {
  let lastTime = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      fn.apply(this, args);
      lastTime = now;
    }
  };
}

// Usage Example
const handleScroll = throttle(() => {
  console.log("Scroll event fired...");
}, 1000);

window.addEventListener("scroll", handleScroll);

// 📌 Scroll kitna bhi fast ho, ye function sirf har 1 second mein ek baar chalega.
