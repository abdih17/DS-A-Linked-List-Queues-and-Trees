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

  if(!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};

Queue.prototype.dequeue = function() {
  let current = this.head;
  this.head = this.head.next;
  return current.val;
};
