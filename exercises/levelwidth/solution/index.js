// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const arr = [root, 's'];
  const counters = [0];

  // one if there is just the 's' in the array
  while (arr.length > 1) {
    const node = arr.shift();
    if (node === 's') {
      // add a new element to the counters
      counters.push(0);
      // and move the 's' value to the end of the array
      arr.push('s');
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  return counters
}

module.exports = levelWidth;
