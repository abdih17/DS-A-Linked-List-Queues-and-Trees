'use strict';

const SinglyLinkedList = require('./singly-linked-list.js');

module.exports = Queue;

function Node(val) {
  this.val = val;
  this.next = null;
}

function Queue() {
  this.sll = new SinglyLinkedList();
}

Queue.prototype.enqueue = function(val) {
  let node = new Node(val);

  if(!this.sll.head) {
    this.sll.head = node;
    this.sll.tail = node;
  } else {
    this.sll.tail.next = node;
    this.sll.tail = node;
  }
};

Queue.prototype.dequeue = function() {
  let current = this.sll.head;
  this.sll.head = this.sll.head.next;
  return current.val;
};
