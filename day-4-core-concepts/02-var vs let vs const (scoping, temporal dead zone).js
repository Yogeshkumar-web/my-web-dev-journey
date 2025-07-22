// var, let and const in JS

/*
var, let and const JavaScript ke variable declaration keywords hain. Inka behavior different hota hai scope, hoisting, aur reasssignment/mutation ke basic par.
*/

// var -> Function Scoped

function greet() {
  if (true) {
    var name = "Yogee";
  }
  console.log(name);
}
greet();

// TDZ

/*

TDZ ka matlab hai - variable declaration ho gai hoisting ke through, lekin tab tak use nahin kar sakte jab tak us line pe nahi aaye.


Note: let and const hoist hote hai, but TDZ mai rehte hai jab tak unke actual declaration nahi milte.
*/

// const with Objects (Reference is Constant)

const user = { name: "Yogesh" };
user.name = "Saurav"; // allow

// Note: Const means reference is fixed, values inside object/array can be mutated.
