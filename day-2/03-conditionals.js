// Conditionals in JS

// Conditional statements allow your program to make decisions and execute different blocks of code depending on whether a condition is true of false.

/*
Use Case:

Form validation: if(!input.value) showError()
Authorization: if(user.role === "admin")
Navigation: if(route === "/home")
Game logic: if(score === 0) restartGame()
API response handling: if(status === 200)

*/

// if statement

if (true) {
  console.log("this code will execute if the condition is true");
}

let age = 19;

if (age >= 18) {
  console.log("you can vote");
}

// with else

if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You are too young to vote.");
}

// else if

let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else if (score >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// Switch Statement: useful when you are checking a variable against multiple specific values.

// Syntax
// switch (expression) {
//   case value1:
//     // code
//     break;
//   case value2:
//     // code
//     break;
//   default:
//   // code
// }

let day = "Friday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("End of the week");
    break;
  default:
    console.log("Just another day");
}
