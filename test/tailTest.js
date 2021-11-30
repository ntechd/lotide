/*
const assertEqual = require("../assertEqual");
const tail = require("../tail.js");
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(assertEqual(tail(words).length,words.length-1)); // Checking our final array
console.log(assertEqual(words.length, 3)); // Checking original array

console.log(assertEqual(tail([]).length,0));
*/

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail",()=>{
	it("returns ['Lighthouse','Labs'] for ['Yo Yo','Lighthouse','Labs']",()=>{
		assert.deepEqual(tail(['Yo Yo','Lighthouse','Labs']),['Lighthouse','Labs'])
	});
	it("returns [] for ['Yo Yo']",()=>{
		assert.deepEqual(tail(['Yo Yo']),[])
	});
	it("returns [] for []",()=>{
		assert.deepEqual(tail([]),[])
	});

});