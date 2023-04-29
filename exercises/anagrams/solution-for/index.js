// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function createMap(string) {
  const obj = {};
  for (let char of string.replace(/[^\w]/g, '').toLowerCase()) {
    obj[char] = obj[char] + 1 || 1;
  }
  return obj;
}

function anagrams(stringA, stringB) {
  const stringAObj = createMap(stringA);
  const stringBObj = createMap(stringB);

  if (Object.keys(stringAObj).length !== Object.keys(stringBObj).length) {
    return false;
  }
  
  for (let char in stringAObj) {
    if (stringAObj[char] !== stringBObj[char]) {
      return false;
    }
  }
  return true;
}

module.exports = anagrams;
