const assertEqual = require("../assertEqual");
const tail = require("../tail.js");
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(assertEqual(tail(words).length,words.length-1)); // Checking our final array
console.log(assertEqual(words.length, 3)); // Checking original array

console.log(assertEqual(tail([]).length,0));