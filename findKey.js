const failed = 'Assertion failed :';
const pass = 'Assertion Passed :';


function isNumber(n) {
  return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
}

let commands = [
  [  "🛑", "🛑","🛑"],
  [  "✅", "✅", "✅"]
];



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

//console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
//console.log(assertEqual(1, 1));

const findKey = function(obj , func) {
	for(let a in obj)
  {
  	let subObj = obj[a];
    if(func(subObj))
    {
    	return a;
    }
  }
} 

let result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

//testing
console.log (assertEqual(result,"noma"))

//testing
result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 5) // => "undefined"

console.log(assertEqual(result,undefined));