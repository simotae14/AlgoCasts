// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let capitalized = '';
  for (let index = 0; index < str.length; index++) {
    if (index === 0 || str[index - 1] === ' ') {
      capitalized += str[index].toUpperCase();
    } else {
      capitalized += str[index];
    }
    
  }
  return capitalized;
}

module.exports = capitalize;
// Runtime Complexity = O(n)