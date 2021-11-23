// program to compare two arrays

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


// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
	console.log(actual);
};


assertEqual(eqArrays([1,2,3], [1,2,3]), true);