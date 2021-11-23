function tail(p1) {
	if(p1.length < 1 || p1 == undefined){
			 return 'undefined';
	 } 
	 else if (p1.length == 1)
	 {
			 return p1[0]
	 }// The function returns the product of p1 and p2
	 else 
	 {
			 return p1.slice(0, p1.length);
	 }// The function returns the product of p1 and p2
}


 // FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

	 
	
};

const words = ["Yo Yo", "Lighthouse", "Labs"]
tail(words)
assertEqual(words.length, 3);