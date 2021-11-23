const failed = 'Assertion failed :';
const pass = 'Assertion Passed :';


function isNumber(n) {
  return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
}

let commands = [
  [  "🛑", "🛑","🛑"],
  [  "✅", "✅", "✅"]
];

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (isNumber(actual) === true) {

    if (actual === expected) {
      return  commands[1] + `${pass}` + actual + " === " + expected;
    } else {
      return  commands[0] + `${failed}` + actual + " !== " + expected;
    }
        

  } else if (isNumber(actual) === false) {

    if (actual === expected) {
      return  commands[1] + `${pass}` + actual + " === " + expected;
    } else {
      return  commands[0] + `${failed}` + actual + " !== " + expected;
    }
        

  }


};

console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
