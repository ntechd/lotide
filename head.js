function head(p1) {
	if(p1.length < 1 || p1 == undefined){
			return 'undefined';
	} else {
			return p1[0];
	}// The function returns the product of p1 and p2
}

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

	if (actual === undefined){
			console.log('undefined')
	} else {
			console.log(actual)
	}
 
 
};


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");