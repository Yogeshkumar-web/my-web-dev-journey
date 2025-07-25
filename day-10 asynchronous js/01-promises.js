// Promises in JS

// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// 1. Creating a Basic Promise

const meraVaada = new Promise((resolve, reject) => {
  let kaamHoGaya = true;

  if (kaamHoGaya) {
    resolve("Kaam ho gaya bhai! ✅");
  } else {
    reject("Kaam fail ho gaya 😞");
  }
});

meraVaada
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// 2. Simulating Asynchronous Work (setTimeout)

const waitPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("3 second baad ka kaam complete!");
  }, 3000);
});

waitPromise.then((result) => {
  console.log(result); // after 3 seconds
});

// 3. Consuming Promise from Async Function

async function fetchData() {
  try {
    const response = await waitPromise; // waits for the promise to resolve
    console.log("Inside async function:", response);
  } catch (err) {
    console.log("Error:", err);
  }
}

fetchData();
