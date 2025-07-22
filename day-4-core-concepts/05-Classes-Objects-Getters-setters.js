// Classes in JS

/*

Class: Ek template/blueprint hota hai jisse multiple objects create karte hai jinke paas same properties aur methods hote hai. 

Object: Class ka ek instance hota hai -- actual usable form. 

Getter/Setter: Special functions hote hai jo object ki property get karne ya set/change karne ke liye use hote hai with added control or logic.

*/

//  How to Create a Class

class Person {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  // method
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
// object create karna hai class se
const person1 = new Person("Yogesh", 30, "myemail@gmail.com");

console.log(person1); // Person { name: 'Yogesh', age: 30, email: 'myemail@gmail.com' }

person1.greet(); // Hello, my name is Yogesh

// Getters and Setters
/*
 
JavaScript mai Getter aur Setter khas tarah ke method hote hai jo aapko object properties ko access(getter) aur modify(setter) karte waqt custom logic add karne ki suvidha dete hai. Yeh properties "virtual" lag sakti hai, khunki aap unhe directly access karte hai jaise woh regular properties hon, lekin background mai ek function call ho raha hota hai.

Getter

    1. Kya hai: Getter woh methods hai jo aapko object ki property ki value get karte waqt code execute karne ki anumati deta hai.

    2. Kaise kaam karta hai: Aap unhein property ki tarah access karte hai(bina parentheses ke), lekin andar hi andar ek function run hota hai.

    3. Syntax: get propertyName() {.....}

*/

// example

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // getter for fullName
  // jab bhi user.fullName ko read kiya kayega, yeh method call hoga.
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // setter for fullName
  // jab bhi user.fullName = "..." kiya jayega, yeh method call hoga.
  // 'newValue' wo value hogi jo assign ki ja rahi hai.

  set fullName(newValue) {
    if (typeof newValue !== "string" || newValue.trim() === "") {
      console.error("Error: Full name must be a non-empty string.");
      return; // invalid input, don't update
    }
    const parts = newValue.split(" ");
    this.firstName = parts[0];
    // agar middle name ya multiple spaces hon, toh last part ko lastName maan lo
    this.lastName = parts.slice(1).join(" ");
  }
}

const user1 = new User("Yogesh", "Kumar");
console.log(user1.fullName); // getter called

user1.fullName = "Saurav Kumar"; // setter called
console.log(user1.firstName);
console.log(user1.lastName);
console.log(user1.fullName);
/*
1. fullName koi actual property nahi hai jismein data store ho raha hai. yeh virtual property hai.

2. get fullName() data ko combine karke dikhata hai.

3. set fullName(newValue) incoming data ko parse karke firstName aur lastName ko update karta hai, aur validation bhi karta hai.
*/

//----------------------------------------------
//----------------------------------------------

// Getter/Setter ke Usecases

// Getter aur Setter bohot saare practical scenarios mein kaam aata hai:

// 1. Data Validation

//// => Usecase: jab aap chahte hai ki property main koi value set karte waqt kuchh rules ya checks follow hon.
//// => Example: Ek age property jo sirf valid numbers accept kare.

class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge > 0 && newAge < 110) {
      this._age = newAge; // store in a different(private-like) property
    } else {
      console.error("Invalid age provided.");
    }
  }
  get age() {
    return this._age; // return the stored value
  }
}

const p = new Person1("Gaurav", 17);
console.log(p.age);

p.age = -20;
console.log(p.age);

p.age = 45;
console.log(p.age);

// Note: Yahaan maine _age (underscore ke saath) use kiya hai. Yeh JavaScript mein ek convention hai jo indicates karta hai ki yeh property "internally used" ya "private-like" hai. Jab bhi aap getter/setter banate hain, us property name se direct data store na karein, warna infinite loop ban jaayega (e.g., set age(newAge) { this.age = newAge; } will call itself recursively).

// 2. Computed Properties / Derived Properties

//// => Usecase: Jab ek property ki value doosri ya doosri properties se calculate hoti hai, aur aap use regular property ki tarah access karna chahte hain.

//// => Example: Geometry ke liye area property.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // Getter called: Output: 50 (calculated on the fly)

rect.width = 12;
console.log(rect.area); // Output: 60 (re-calculated)

// 3. Side Effects on Property Access/Modification

//// => Usecase: Jab property read ya write karte waqt aap koi doosra action trigger karna chahte hain (e.g., UI update, logging, internal state change).

//// => Example: UI ko update karna jab temperature change ho.

class Thermostat {
  constructor(initialTemp) {
    this._temperature = initialTemp;
  }

  get temperature() {
    console.log("Reading temperature...");
    return this._temperature;
  }

  set temperature(newTemp) {
    if (newTemp !== this._temperature) {
      // Check if value actually changed
      console.log(
        `Temperature changed from ${this._temperature} to ${newTemp}. Updating UI...`
      );
      // Imagine some UI update function call here
      this._temperature = newTemp;
    }
  }
}

const device = new Thermostat(20);
console.log(device.temperature); // Output: Reading temperature... 20
device.temperature = 22; // Output: Temperature changed from 20 to 22. Updating UI...
device.temperature = 22; // No output, as value didn't change

// 4. Lazily Loaded Properties

//// => Usecase: Jab kisi property ki value calculate karna expensive ho, aur aap use tab tak calculate nahi karna chahte jab tak use actually access na kiya jaye.

//// => Example: Heavy data processing.

class DataSet {
  constructor(rawData) {
    this._rawData = rawData;
    this._processedData = null; // Initially null
  }

  get processedData() {
    if (this._processedData === null) {
      console.log("Processing data (this happens only once!)...");
      // Simulate a heavy computation
      this._processedData = this._rawData.map((item) => item * 2);
    }
    return this._processedData;
  }
}

const data = new DataSet([1, 2, 3, 4]);
console.log("Before accessing processedData");
console.log(data.processedData); // Output: Processing data... [2, 4, 6, 8]
console.log("After first access");
console.log(data.processedData); // Output: [2, 4, 6, 8] (no re-processing)

/*
Important Considerations:

1. Performance: Getters/setters function calls hain, toh direct property access se thode slower ho sakte hain. Lekin modern JS engines is difference ko minimize karte hain. Performance-critical loops mein dhyan rakhein.

2. No Parameters for Getters: Getters koi arguments nahi lete hain.

3. One Parameter for Setters: Setters hamesha ek hi argument lete hain (woh value jo assign ki ja rahi hai).

4. Internal Storage Convention: Jab aap getter/setter use karte hain, toh actual data ko store karne ke liye usually ek alag internal property (_propertyName) ka use kiya jaata hai, jisse recursion na ho.

Note: Getters aur Setters aapke code ko zyada encapsulated aur maintainable banate hain. Woh aapko object ki internal state par behtar control dete hain bina uski interface ko change kiye.

*/
