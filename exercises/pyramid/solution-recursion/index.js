// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n, row = 0, level = '') {
  const midpoint = Math.floor((2 * n - 1) / 2);
  
  // base case, no more rows
  if (n === row) {
    return;
  }
  // other base case, when level has lenght n * 2 -1
  if (2 * n - 1 === level.length) {
    console.log(level);
    pyramid(n, row + 1);
    return;
  }
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    pyramid(n, row, level + '#');
  } else {
    pyramid(n, row, level + ' ');
  }
}

module.exports = pyramid;
// Runtime Complexity = O(n)