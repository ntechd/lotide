// program to compare two array
const eqArrays = require("./eqArrays");
/*
function eqArrays (arr1, arr2) {

	// compare arrays
	const result = JSON.stringify(arr1) == JSON.stringify(arr2)

	// if result is true
	if(result) {
			return true;
	}
	else {
			return false;
	}

}
*/


// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(arr1, arr2) {
	let actual = eqArrays(arr1, arr2);
	if (actual === true) console.log(`✅✅✅ Assertion Passed: ${actual} === ${true}`);
	else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${true}`);
	
};

module.exports = assertArraysEqual;