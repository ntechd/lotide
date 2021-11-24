const bestTVShowsByGenre = { 
	sci_fi: "The Expanse",
	comedy: "Brooklyn Nine-Nine",
	drama:  "The Wire"
};

function getKeyByValue(object, value) {
	return Object.keys(object).find(key => object[key] === value);
}

 // FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
	console.log(actual);
};


assertEqual(getKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(getKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);