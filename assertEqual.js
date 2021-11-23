function isNumber(n) {
  return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
}

let commands = [
  ["🛑", "🛑", "🛑"],
  ["✅", "✅", "✅"]
];

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (isNumber(actual) === true) {

    if (actual === expected) {
      return commands[0] + " Assertion failed : " + actual + " !== " + expected;
    } else {
      return commands[1] + "Assertion Passed : " + actual + " === " + expected;
    }


  } else if (isNumber(actual) === false) {
    if (actual === expected) {
      return commands[0] + " Assertion failed : " + actual + " !== " + expected;
    } else {
      return commands[1] + "Assertion Passed : " + actual + " === " + expected;
    }
  }
};

console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
