// try-catch

// try-catch block is a JavaScript control structure used to handle errors in a safe and controlled manner. It allows the developer to attempt execution of code (try) and gracefully catch and handle exceptions (catch), preventing application crashes.

// Basic Syntax of try-catch

try {
  // Risky code
  let result = someUndefinedFunction();
  console.log("This line won't run if error above");
} catch (error) {
  console.error("Error caught:", error.message);
}

// Catch block automatically receives the error object
try {
  throw new Error("Custom error occurred!");
} catch (err) {
  console.log(err.name); // Error

  console.log(err.message); // Custom error occurred
}

// finally block (Optional but Powerful)
try {
  console.log("Trying risky logic...");
  let x = 10 / 0;
} catch (e) {
  console.log("Something went wrong!");
} finally {
  console.log("This always runs — cleanup, closing files, etc.");
}
