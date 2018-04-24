// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const beginArray = str.split(' ');
  let firstLetter = '';
  let endOfWord = '';
  let fullWord = '';
  const endArray = [];

  for(word of beginArray){
    endOfWord = word.slice(1);
    firstLetter = word[0].toUpperCase();

    fullWord = firstLetter + endOfWord;
    endArray.push(fullWord);
  }

  console.log('endArray: ', endArray);

  return endArray.join(' ');

}

module.exports = capitalize;

// Alternate solution:
// function capitalize(str) {
//   let result = str[0].toUpperCase();

//   for(let i = 1; i < str.length; i++){
//     if(str[i-1] === ' '){
//       result += str[i].toUpperCase();
//     }
//     else{
//       result += str[i];
//     }
//   }
//   return result;
// }


















