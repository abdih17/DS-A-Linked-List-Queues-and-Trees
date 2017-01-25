'use strict';

const SinglyLinkedList = require('./singly-linked-list.js');

module.exports = Queue;

function Tree (val) {
  this.val = val;
  this.children = [];
}

function Queue() {
  this.sll = new SinglyLinkedList();
}

Tree.prototype.print = function(val) {
  let Queue = new Queue();

  if(!this.val) {
    return;
  }

  Queue.enqueue(this);

  while(Queue.sll.head) {
    const node = Queue.dequeue();
    console.log(node.val);

    for(var i = 0; i < this.children.length; i++) {
      Queue.enqueue(this.children[i]);
      return val;
    }
  }
};
