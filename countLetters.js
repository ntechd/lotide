function countLetters(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

function findUnique(str){
  // The variable that contains the unique values
  let uniq = "";
   
  for(let i = 0; i < str.length; i++){
    // Checking if the uniq contains the character
    if(uniq.includes(str[i]) === false){
      // If the character not present in uniq
      // Concatenate the character with uniq
      uniq += str[i]
    }
  }
  return uniq;
}

function combineResult(z, u){ 

    var finalOutput = "";

    for (let i = 0; i < z.length; i++) {
        finalOutput += z[i] + " Appear " + u[i] +" Times ";
    }

    return finalOutput
   

}

 // FUNCTION IMPLEMENTATION
 const assertEqual = function(actual, expected) {
    console.log(actual);
};


var x = findUnique('LHL')

const y = [];

for (let i = 0; i < x.length; i++) {
  y[i] = countLetters('LHL', x[i]);
}

console.log(combineResult(x, y))