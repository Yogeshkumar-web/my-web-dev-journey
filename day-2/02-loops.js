// Loops in JavaScript

// In JavaScript, loops are control flow statements that allow code to be executed repeatedly based on a condition.

// for loop: use it when you know how many times you want to repeat a task.
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// while loop: Use it when you don't know how many times the loop should run. You just want to repeat as long as the condition is true.

// let i = 0;
// while (i <= 10) {
//   console.log("while loop: ", i);
//   i++;
// }

// do...while loop: Runs the code at least once, then repeats as long as the condition is true.

let i = 0;
do {
  console.log("do...while: ", i);
  i++;
} while (i <= 10);

// Use case:
/*
to display lists of items
to iterate over arrays
to keep asking user input
to perform calculations or animations
to fetch data repeatedly like pagination or polling
*/

// number guessing game

let secretNumber = Math.floor(Math.random() * 10) + 1;
console.log("SecretNumber: ", secretNumber);

let guess;

do {
  guess = prompt("Guess a number between 1 and 10: ");

  if (parseInt(guess) === secretNumber) {
    alert("Correct!");
  } else {
    alert("Try again!");
  }
} while (parseInt(guess) !== secretNumber);
