// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const strLower = str.toLowerCase();
  let counter = 0;
  for(let i = 0; i < strLower.length; i++){
    if(strLower[i] === 'a' || strLower[i] === 'e' || strLower[i] === 'i' || strLower[i] === 'o' || strLower[i] === 'u'){
      counter++;
    }
  }
  return counter;
}

module.exports = vowels;

// Alternate Solutions:
// function vowels(str) {
//   const strLower = str.toLowerCase();
//   let counter = 0;
//   const checkVowel = ['a', 'e', 'i', 'o', 'u'];
//   for(char of strLower){
//     if(checkVowel.includes(char)){
//       counter++;
//     }
//   }

//   return counter;
// }

// function vowels(str) {
//   const matchArray = str.match(/[aeiou]/gi);
//   return matchArray === null ? 0 : matchArray.length;

// }
