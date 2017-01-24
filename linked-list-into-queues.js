'use strict';

const queues = require('./singly-linked-list.js');

var current = 0;

// node constructor
function Node(val) {
  this.val = val;
  this.next = null;
}

queues.prototype.enqueue = function(val) {
  const node = new Node();
  this.tail = node;
};

queues.prototype.dequeue = function() {
  current = head;
  head = current.next;
  return current.val;
};
