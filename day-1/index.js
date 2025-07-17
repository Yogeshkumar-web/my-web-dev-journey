// Variables in JS

// Why Variables
/*
You'll store data from forms.
You'll manage state in apps. etc.
Variables are the foundation of logic in any application.
*/

// -> A variable in JS is a named container for storing data values. Var, let and const are three keywords used to declare variables. They differ is scope, hoisting behavior, and mutability.

// Var : the bad way

var myName = "Yogesh";

var myName = "Saurav";

console.log(myName); // Saurav
/*
 You can accidently overwrite variable names in a large project.
 var is function scoped, not block scoped.
 Gets hoisted weirdly.
 */

// Let
let age = 25;
//  let age = 24; // error
age = 26; // you can re-assign

console.log(age);

/*
let is block-scoped.
can be reassigned, but not redeclared in the same scope.
*/

// const

const country = "India";
// const country = "USA" // error, Assignment to constant variable
// country = "USA"; // TypeError: Assignment to constant variable.

console.log(country);
/*
Use const for values that should not change, like configuration, constants etc.

const means you can't reassign, but if the value is an object/array, you can still modify its contents.
*/

const user = { name: "Yogesh" };

user.name = "Saurav";

console.log(user.name);
