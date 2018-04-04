function ransomNote (noteText, magazineText){
  let note = noteText.split(' ');
  let mag = magazineText.split(' ');
  let magObject = {};

  mag.forEach(item => {
    if(!magObject[item]){
      magObject[item] = 0;
    }
      magObject[item]++;
  });

  console.log('magObject: ', magObject);

  let isNotePossible = true;
  note.forEach(word =>{
    if(magObject[word]){
      magObject[word]--
    }
    else{
      isNotePossible = false;
    }
  });

  console.log('isNotePossible: ', isNotePossible);

}


ransomNote('this is a note for you 121', 'Joe, 121 you are helpful to note that a bee is an insect not a bird. this is true for all bees.');

ransomNote('stuff the notstuff Dave Dave', 'Dave Dave really stuff stuff stuff stuff stuff the notstuff stuff no the stuff here is the notstuff');

