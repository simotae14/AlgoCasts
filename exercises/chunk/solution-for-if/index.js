// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];
  // for (let start = 0; start < array.length; start = start + size) {
  //   chunked.push(array.slice(start, start + size));
  // }
  for (let ele of array) {
    const lastChunked = chunked[chunked.length - 1];
    if (!lastChunked || lastChunked.length === size) {
      chunked.push([ ele ])
    } else {
      lastChunked.push(ele);
    }
  }
  return chunked;
}

module.exports = chunk;
// Runtime Complexity = O(n)