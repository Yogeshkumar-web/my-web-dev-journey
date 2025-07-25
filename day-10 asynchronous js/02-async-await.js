// async/await

// async/await is a syntactic sugar over Promises in JavaScript, allowing you to write asynchronous code in a more readable and linear style, as if it were synchronous.

// async Function
async function fetchData() {
  return "Data fetched!";
}

fetchData().then(console.log);
// Async function always returns a Promise automatically.

// await Keyword : await kisi bhi Promise ke aage likha jaata hai — iska matlab: “Wait here until this Promise resolves.”

function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("👨‍💻 Yogesh Kumar");
    }, 2000);
  });
}

async function showUser() {
  console.log("Fetching user...");
  const user = await getUser(); // Wait until promise resolves
  console.log("User:", user);
}

showUser();

// Error Handling with try...catch

async function fetchData() {
  try {
    let res = await fetch("url");
    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(" Error fetching data:", error.message);
  }
}
