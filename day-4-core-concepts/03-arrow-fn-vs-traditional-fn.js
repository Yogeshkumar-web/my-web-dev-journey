// Arrow fn vs Traditional fn

// Traditional fn => Ghar ka malik, jo har room me jaake rules change kar sakta hai. Uske pass full power hai, aur "this" ka matlab har room me alag ho sakta hai.

// Arrow fn => Ghar ka naukri pe rakha employee, jo sirf ussi jagah ke rules follow karta hai jahan usse kaam diya gaya ho. Wo, "this" ka matlab change nahi karta.

// ==> Arrow function kabhi bhi apna this nahi banata, balki, apne parent (bahar wale) context ka this inherit karta hai.

/*
Definition:

Traditional Function: A function defined using the function keyword. It gets its own this context depending on how it is called(runtime binding).

Arrow Function: Introduced in es6, it uses a shorter syntax and does not have its own this, arguments, super, or new.target. It lexically binds this from its surrounding code.

*/

// Syntax Difference

// Traditional Function

function greet(name) {
  return "Hello" + name;
}

// Arrow Function

const greet1 = () => {
  return "Hello" + name;
};

// Note: shorter syntax in arrow functions makes it great for callbacks.

// this Behavior

const person = {
  name: "Yogee",
  traditional: function () {
    console.log("Traditional: ", this.name);
  },
  arrow: () => {
    console.log("Arrow :", this.name);
  },
};

person.traditional();
person.arrow(); // undefined

// Arrow functions ka use new ke saath nahi kar sakte because unka khud ka this nahi hota.

/////---------------------------------------------------

// Traditional fn vs Arrow fn

// JavaScript mein this keyword ka behavior is baat par depend karta hai ki function ko kaise call kiya gaya hai, na ki function ko kahaan define kiya gaya hai. Isi wajah se this confusing lagta hai.

// 1. Traditional Functions (Function Declarations / Expressions)

// Traditional functions mein this ki value dynamic hoti hai, yaani yeh is baat par depend karti hai ki function ko kis context mein call kiya gaya hai.

//    this ki Value Traditional Functions mein:
// 1. Global Context mein: Jab koi function global scope mein call hota hai, ya koi method kisi object ke bina call hota hai, toh this global object (browser mein window, Node.js mein global) ko point karta hai.

function showGlobalThis() {
  //   console.log(this === window); // Browser mein: true
  console.log(this); // window object
}
showGlobalThis(); // Output: true, window object

// 2. Method as a Property of an Object: Jab ek function ko kisi object ke method ke roop mein call kiya jaata hai, toh this us object ko point karta hai jiska woh method hai.

const user = {
  name: "Ankit",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
user.greet(); // Output: Hello, my name is Ankit (this is 'user' object)

const anotherGreet = user.greet;
anotherGreet(); // Output: Hello, my name is undefined (this is 'window' object, as it's called globally)
// Yahan 'anotherGreet' ko 'user' object ke context ke bahar call kiya gaya hai.
// Isliye 'this' window ko point karega, jiske paas 'name' property nahi hai.

// 3. Constructor Functions (new Keyword ke saath): Jab ek function ko new keyword ke saath call kiya jaata hai (constructor ki tarah), toh this naya banaya gaya object hota hai. Is par abhi detail mein baat karenge.

// 4. Event Handlers: DOM event handlers mein, this us element ko point karta hai jis par event fire hua hai.

// HTML: <button id="myBtn">Click Me</button>
// JS:
// const button = document.getElementById('myBtn');
// button.addEventListener('click', function() {
//   console.log(this); // <button id="myBtn"> element
// });

///// 2. Arrow Functions (=>)

// Arrow functions this ke behavior ko lexical scoping ke zariye handle karte hain. Iska matlab hai ki arrow functions ka this dynamic nahi hota. Woh this ki value ko us enclosing (surrounding) scope se inherit karte hain jahaan unhe define kiya gaya hai.

// this ki Value Arrow Functions mein:

// 1. Lexical this: Arrow functions mein this hamesha apne parent scope ke this ko point karta hai. Woh apna khud ka this context nahi banate.

const user1 = {
  name: "Ankit",
  // Traditional function as method
  greetTraditional: function () {
    console.log(`Traditional: ${this.name}`); // 'this' is 'user'
    const innerFunction = function () {
      console.log(`Inner Traditional: ${this.name}`); // 'this' is 'window' (global)
    };
    innerFunction();
  },

  // Arrow function as method (often avoided for top-level methods)
  greetArrow: () => {
    console.log(`Arrow: ${this.name}`); // 'this' is 'window' (global), because 'user' object itself is in global scope
  },

  // Arrow function inside a Traditional function (most common use case)
  greetWithDelay: function () {
    console.log(`Delay: ${this.name} (before timeout)`); // 'this' is 'user'
    setTimeout(() => {
      console.log(`Delayed Arrow: ${this.name}`); // 'this' is inherited from 'greetWithDelay' (which is 'user')
    }, 100);
  },
};

user1.greetTraditional();
// Output:
// Traditional: Ankit
// Inner Traditional: undefined

user1.greetArrow();
// Output: Arrow: undefined (kyunki arrow function 'user' object ke context ko nahi dekhta, balki uske parent 'window' ko dekhta hai)

user1.greetWithDelay();
// Output:
// Delay: Ankit (before timeout)
// Delayed Arrow: Ankit

// Key Takeaway: Arrow functions this ko fix kar dete hain. Yeh un situations mein bohot useful hain jahaan aap inner functions mein this ko maintain karna chahte hain, jaise event listeners ya callbacks mein.

//// bind() Method: this ko Fix Karna

// bind() ek function method hai jo aapko ek naya function return karta hai jismein this ki value permanently set ho jaati hai jo aapne bind karte waqt provide ki hai.

// Syntax: function.bind(thisArg, arg1, arg2, ...)

// thisArg: Woh object jisko aap this banana chahte hain.

// Kab istemal hota hai? Jab aap kisi traditional function ko aise context mein call kar rahe hon jahaan this ki value galat ho rahi ho, aur aap usko manually fix karna chahte ho.

const car = {
  brand: "Toyota",
  getBrand: function () {
    console.log(this.brand);
  },
};

car.getBrand(); // Output: Toyota (this is 'car')

const getCarBrand = car.getBrand;
getCarBrand(); // Output: undefined (this is 'window')

// Ab hum 'bind()' ka use karenge 'this' ko 'car' object par bind karne ke liye
const boundGetCarBrand = car.getBrand.bind(car);
boundGetCarBrand(); // Output: Toyota (this is now permanently 'car' for 'boundGetCarBrand')

// Ek aur example jahaan bind kaam aata hai:
const anotherCar = {
  brand: "Honda",
  // Ek function jo dusre function ko callback ke roop mein leta hai
  start: function (callback) {
    console.log(`${this.brand} is starting.`);
    setTimeout(callback, 1000);
  },
};

function stopCar() {
  // Yahan 'this' global context mein 'window' hoga agar bind na kiya.
  // Hum chahte hain ki 'this' 'anotherCar' ko point kare.
  console.log(`${this.brand} has stopped.`);
}

// Agar aise call kiya:
// anotherCar.start(stopCar); // Output: Honda is starting. ... undefined has stopped.

// 'bind()' ka use karke 'this' ko 'anotherCar' par set kiya:
anotherCar.start(stopCar.bind(anotherCar)); // Output: Honda is starting. ... Honda has stopped.

/////////////-----------------------------------

// new Keyword: Constructor Functions ke Saath this

// new keyword ka use constructor functions ko call karne ke liye hota hai. Jab aap new keyword ke saath ek function call karte hain, toh kuch steps hote hain jo this ki value ko affect karte hain:

// 1. Ek Naya Empty Object Banta Hai: new keyword ek naya, khaali JavaScript object ({}) banata hai.
// 2. this Naye Object Ko Point Karta Hai: Us naye banaye gaye object ko this ki value assign ki jaati hai us constructor function ke andar.
// 3. Properties Aur Methods Add Hote Hain: Constructor function ke andar jo bhi properties aur methods (this.propertyName = value;) banaye jaate hain, woh is naye this object mein add ho jaate hain.
// 4. Naya Object Return Hota Hai: Agar constructor function explicitely kuch return nahi karta, toh by default yahi naya this object return ho jaata hai.

// Ek Traditional function jise hum constructor ki tarah use karenge

function Person(name, age) {
  // Step 2 & 3: Jab 'new Person()' call hoga, 'this' naye empty object ko point karega.
  // Aur ye properties us naye object mein add ho jayengi.
  this.name = name;
  this.age = age;

  this.greet = function () {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  };
}

// Step 1 & 4: 'new' keyword ek naya object banata hai aur usko return karta hai.
const person1 = new Person("Alice", 30);
person1.greet(); // Output: Hi, I'm Alice and I'm 30 years old.

const person2 = new Person("Bob", 25);
person2.greet(); // Output: Hi, I'm Bob and I'm 25 years old.

console.log(person1 instanceof Person); // Output: true

// Important: Arrow functions ko constructor functions ke roop mein new keyword ke saath istemal nahi kiya ja sakta. Agar aap try karenge, toh error milega.
