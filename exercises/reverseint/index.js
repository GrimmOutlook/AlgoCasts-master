// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let numberArray = n.toString().split('')

    if(numberArray[0] === '-'){
      numberArray.shift();
      numberArray.reverse().unshift('-');

      return parseInt(numberArray.join(''));
    }

  return parseInt(numberArray.reverse().join(''));
}

module.exports = reverseInt;
