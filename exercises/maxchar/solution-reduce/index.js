// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const strArray = str.split('');
  
  const objStr = strArray.reduce((acc, item) => {
    acc[item] = acc[item] ? acc[item] + 1 : 1;
    return acc;
  }, {});
  const maxObj = Object.keys(objStr).reduce((maxObj, key) => {
    return objStr[key] > maxObj.max ? {
      max: objStr[key],
      maxChar: key
    } : maxObj;
  }, {
    max: 0,
    maxChar: ''
  });

  return maxObj.maxChar;
}

module.exports = maxChar;
// Runtime Complexity = O(n)