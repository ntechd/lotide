/*function eqArrays(arr1, arr2){
    if (arr1.length !== arr2.length) return false;
    for (var i = 0, len = arr1.length; i < len; i++){
        if (arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true; 
}*/

function eqArrays(arr1,arr2){
    if(arr1===arr2)
        return true

    if(arr1.length!=arr2.length)
        return false

    for(let i=0 ; i<arr1.length ; i++)
    {
        if(!eqArrays(arr1[i],arr2[i]))
            return false;
    }
    return true;
}

/*
const assertEqual = function(actual, expected) {
	if (actual === expected) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
	else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};
*/
/*
console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]),true)) // => true 
console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]),false)) // => false
console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]),false)) // => false

assertEqual(eqArrays([1,2,3], [1,2,3]), true);
*/
module.exports = eqArrays;