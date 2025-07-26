// DOM Selectors

// DOM Selectors are JavaScript methods that allow you to access and manipulate HTML elements in the Document Object Model (DOM).

/**
 DOM = Document Object Model → Webpage ka structure jo browser ke memory mein hota hai.

Selectors = Tarike jinse hum DOM ke elements ko "select" karte hain, so we can read, change, or delete them.

*/

// getElementById() : Selects a single element by its ID.

const para = document.getElementById("myPara");
console.log(para.textContent);

// getElementsByClassName() : Selects multiple elements that share the same class. Returns an HTMLCollection (array-like).

const infoItems = document.getElementsByClassName("info");
console.log(infoItems.length);

// getElementsByTagName() : Selects elements based on their HTML tag name like div, p, li.

const listItems = document.getElementsByTagName("li");
console.log(listItems[0].textContent);

// querySelector() : Selects the first matching element using CSS selector syntax.

const firstHingLight = document.querySelector(".highlight");
console.log(firstHingLight.textContent);

// querySelectorAll() : Selects all matching elements using CSS selector syntax. Returns a NodeList (array-like).

const allHighlights = document.querySelectorAll(".highlight");
allHighlights.forEach((el) => console.log(el.textContent));
