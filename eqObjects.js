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

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


const eqObjects = function (obj1, obj2) {
  let flag = []

  if(Object.keys(obj1).length === Object.keys(obj2).length) {
    for (let keys in obj1){
      if (Array.isArray(obj1[keys]) === true) { 
        flag.push(eqArrays(obj1[keys], obj2[keys]));
      } else {
        if (obj1[keys] === obj2[keys])
        {
          flag.push(true);
        }
      }
    }
  } else flag.push(false);

  if (flag.includes(false)) {
    return false; 
  } else {
    return true;
  }
}


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba), true)); // => true

const abc = { a: "1", b: "2", c: "3"};
console.log(assertEqual(eqObjects(ab, abc), false)); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects(cd, dc), true)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2), false )); // => false
