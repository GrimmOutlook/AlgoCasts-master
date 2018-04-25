// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(N) {
  let arrayOfSteps = [];
  const step = '#';

  for(let i = N; i>= 1; i--){
    let stepNum = step.repeat(i);
    stepNum = stepNum.padEnd(N,' ');
    arrayOfSteps.unshift(stepNum);
  }

  // console.log('arrayOfSteps: ', arrayOfSteps);

  for(let x = 0; x < arrayOfSteps.length; x++){
    console.log(arrayOfSteps[x]);
    // arrayOfSteps.shift(arrayOfSteps[x]);
  }

}

// steps(8);

module.exports = steps;
