// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  // case max has value and the value of the node is greater
  // we have a problem
  if (max !== null && node.data > max) {
    return false;
  }
  // case min has value and the value of the node is lower
  // we have a problem
  if (min !== null && node.data < min) {
    return false;
  }

  // RECURSION
  // go to Left and the validate of the left node doesn t work
  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }
  // go to Right and the validate of the right node doesn t work
  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }

  return true;
}

module.exports = validate;
