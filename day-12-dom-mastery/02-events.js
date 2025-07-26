// Events

// An event in JavaScript is a signal that something has happened in the web page—like a user interaction (click, scroll, keypress, etc.). JavaScript can detect and respond to these events using Event Listeners.

// Event Types

/*

click → mouse click
mouseover → mouse hover
keydown → keyboard key press
submit → form submission
change → input field change
load → page fully loaded

*/

// Event Listener (addEventListener())
/*

Syntax:

element.addEventListener("event-type", callbackFunction);


*/

// const button = document.getElementById("myBtn");

// button.addEventListener("click", function () {
//   console.log("Btn clicked");
// });

// Using Arrow Function (Modern Style)
const button = document.getElementById("myBtn");
// button.addEventListener("click", () => {
//   console.log("Clicked using arrow fn");
// });

// Accessing the Event Object
// Every event listener automatically receives an event object, which contains details like event type, target, coordinates, etc.

button.addEventListener("click", (e) => {
  console.log("You clicked on :", e.target.textContent);
});
