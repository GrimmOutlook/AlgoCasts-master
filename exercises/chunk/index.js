// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// empty newArray to push each 'chunk' array into
// loop thru entire array
// create a subArray to push each value into
// once subArray.length === size, push subArray into new Array
// set subArray to an empty array after pushing.

// ------------ My Solution ----------------------
// function chunk(array, size) {
//   const totalArray = [];
//   let subArray = [];
//   for(let i = 0; i < array.length; i++){
//     if(subArray.length < size){
//       subArray.push(array[i]);
//     }
//     else if(subArray.length === size){
//       totalArray.push(subArray);
//       subArray = [];
//       subArray.push(array[i]);
//     }
//   }
//   totalArray.push(subArray);
//   return totalArray;
// }

// console.log(chunk([1,2,3,4,5,6,7,8,9], 2));

module.exports = chunk;

//-------------- Alternate Solution ----------------
function chunk(array, size) {
  const chunked = [];

  for(let element of array){
    const last = chunked[chunked.length-1];

    if(!last || last.length === size){
      chunked.push([element])
    }
    else{
      last.push(element);
    }
  }
  return chunked;
}
















