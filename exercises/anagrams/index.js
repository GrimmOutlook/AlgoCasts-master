// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const aObj = stringToObject(stringA);
  const bObj = stringToObject(stringB);

  if(Object.keys(aObj).length !== Object.keys(bObj).length){
    return false;
  }

  for(let char in aObj){
    if(aObj[char] !== bObj[char]){
      return false;
    }
  }

  return true;
}

function stringToObject(str){
  const obj = {};
  for(let char of str.replace(/[^\w]/g, '').toLowerCase()){
    obj[char] = obj[char] + 1 || 1;
  }
  return obj;
}


// anagrams('liars', 'lairs');
// anagrams('liarsaabbccdd', 'aabbccddlairs');
// anagrams('liarsaabbccdd', 'aabbccddppppppppppkkkkkkkkksisisi');


module.exports = anagrams;
