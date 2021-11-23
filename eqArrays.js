function eqArrays(arr1, arr2){
    if (arr1.length !== arr2.length) return false;
    for (var i = 0, len = arr1.length; i < len; i++){
        if (arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true; 
}


  // FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    console.log(actual);
};


assertEqual(eqArrays([1,2,3], [1,2,3]), true);