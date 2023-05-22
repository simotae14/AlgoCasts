// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
  }

  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
      if (! node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    // linkedlist empty
    if (!this.head) {
      return;
    }
    // linkedlist one node
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();
    if (last) {
      // There are some existing nodes in our chain
      last.next = new Node(data);
    } else {
      // The chain is empty
      this.head = new Node(data);
    }
  }

  getAt(index) {
    // define the initial vars, the counter e the first node
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      // increment counter and node
      counter++;
      node = node.next;
    }
    // if we exit the while loop it means there are no more nodes and we have not reached
    // the index so we return null
    return null;
  }

  removeAt(index) {
    // check linked list empty
    if (!this.head) {
      return;
    }
    // if we remove the head element
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const previous = this.getAt(index - 1);
    // if previous doesn't exist or previous has not a next node
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }
}

module.exports = { Node, LinkedList };

