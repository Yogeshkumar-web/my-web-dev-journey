// Form Validation

/*

=> Form Validation is the process of checking user input in an HTML form to ensure it is correct, complete, and secure before it is sent to the server.

Form validation is of two types:

1. Client-side validation (JavaScript/browser pe hoti hai)

2. Server-side validation (backend pe hoti hai - Express/Node/Mongo level)

*/

document.getElementById("loginForm").addEventListener("submit", function (e) {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    alert("All fields are required!");
    e.preventDefault();
  }
});
