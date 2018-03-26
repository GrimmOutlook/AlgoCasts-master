// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // let arrayOfLetters = str.split('');
  let reverseString = str.split('').reverse().join('');
  console.log(reverseString);
  return reverseString;
}

module.exports = reverse;
