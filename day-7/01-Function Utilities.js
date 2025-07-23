// call(), apply(), and bind()

// In JavaScript, call(), apply(), and bind() are function methods that allow you to manually set the this context of a function and optionally pass arguments. They are especially useful when you're working with object methods, inheritance, or function borrowing.

// call():
// Immediately invokes the function with a specified this and arguments provided one by one.
function greet(language) {
  console.log(`${language}: Hello, my name is ${this.name}`);
}

const person = { name: "Yogee" };

greet.call(person, "English"); // English: Hello, my name is Yogee

// 👉 call() ne function ko immediately call kiya with this = person.

// apply():
// Same as call(), but arguments are passed as an array.
greet.apply(person, ["Hindi"]); // Hindi: Hello, my name is Yogee

// 👉 Useful when you already have arguments in array format.

// bind():
// Does not call the function immediately. Instead, returns a new function with this permanently bound.
const greetHindi = greet.bind(person, "Hindi");
greetHindi(); // Hindi: Hello, my name is Yogee

// 👉 Yeh ek function object return karta hai jo later use ho sakta hai.

// Bonus Concept: Borrowing Methods

const user1 = {
  name: "Rahul",
  greet: function () {
    console.log("Hi, I'm " + this.name);
  },
};

const user2 = { name: "Simran" };

// Borrow user1's greet for user2
user1.greet.call(user2); // Hi, I'm Simran
