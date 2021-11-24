// TEST/ASSERTION FUNCTIONS
const eqArrays = function(x) {
	//...
}

const assertArraysEqual = function(actual, expected) {
	//...
}

// ACTUAL FUNCTION
const middle = function(array) {
	if (array.length % 2 === 0){ // even
			var x = array.length / 2
			return console.log(array[x - 1],array[x] )
	} 
	else
	{
			var x = array.length / 2
			return console.log(array[x + 0.5 - 1])
	}
}

middle([1,2,3,4])
middle([1,2,3,4,5])