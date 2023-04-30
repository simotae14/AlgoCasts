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

function steps(n, row = 0, stair = '') {
  // base case no more rows
  if (n === row) {
    return;
  }
  // other base case when stair has length n
  if (n === stair.length) {
    console.log(stair);
    // recursion on next row
    steps(n, row + 1);
    return ;
  }
  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(n, row, stair);
}

module.exports = steps;
