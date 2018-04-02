// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   let reverseString = str.split('').reverse().join('');
//   return str === reverseString ? true : false;
// }

// Alternative solution with every() - compare each letter at beginning to corresponding letter at end.

const palindrome = (str) => {
  // every() returns true or false for each comparison
  return str.split('').every((char, i) => {
    // i starts at zero automatically
    return char === str[str.length -i -1];
  });
}

module.exports = palindrome;
