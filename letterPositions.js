const assertEqual = function(actual, expected) {
	if (actual === expected) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
	else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`It has passed!`);
  } else {
    console.log(`It has failed!`);
  }
};

const letterPositions = function(sentence) {
  const newObject = {};
  for(let i = 0; i < sentence.length; i++){
    let character = sentence[i];
    if (character !== " ") {
      if (newObject[character]) {
        newObject[character].push[i];
      } else {newObject [character] = [i];
    }
  } 
 }
  return newObject;
 };

 
 assertArraysEqual(letterPositions("hello").e, [1]);
