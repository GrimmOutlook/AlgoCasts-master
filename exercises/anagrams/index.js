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
  const aObj = {};
  const bObj = {};
  const aArray = stringA.split('');
  const bArray = stringB.split('');

  for(let i=0; i < aArray.length; i++){
    if(!aObj[aArray[i]]){
      aObj[aArray[i]] = 1;
    }
    else aObj[aArray[i]]++
  }

  for(let j=0; j < bArray.length; j++){
    if(!bObj[bArray[j]]){
      bObj[bArray[j]] = 1;
    }
    else bObj[bArray[j]]++
  }

  let matchCount = 0;
  for(let x=0; x < Object.keys(aObj).length; x++){
      // how to compare aObj.s to bObj.s
    console.log('aObj[x]: ', aObj.x);    // undefined

    if(aObj[x] !== bObj[x]){
      console.log('false');
      return false;
    }
    matchCount++
  }

  if(matchCount === Object.keys(aObj).length){
    console.log('true');
    return true;
  }


}


anagrams('liars', 'lairs');
// anagrams('liarsaabbccdd', 'aabbccddlairs');
// anagrams('liarsaabbccdd', 'aabbccddppppppppppkkkkkkkkksisisi');


// module.exports = anagrams;
