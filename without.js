// program to compare two arrays

function eqArrays (arr1, arr2) {

	for (let i = 0; i < arr2.length; i++) {
			for (let y = 0; y < arr1.length; y++) {
					if(arr1[i] === arr2[y]) { 
							arr1.splice(i, 1);
					}
			}
	}

	return arr1;
 
}


// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
	console.log(actual);
};


assertEqual(eqArrays([1,2,3], [1, 2,'3']), true);