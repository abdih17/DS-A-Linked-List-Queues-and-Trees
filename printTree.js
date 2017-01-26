'use strict';

const Queue = require('./linked-list-into-queues.js');

module.exports = Tree;

function Tree (val) {
  this.val = val;
  this.children = [];
}

Tree.prototype.print = function() {
  let queue = new Queue();
  let q = [];

  if(!this.val) {
    return;
  }

  queue.enqueue(this);

  while(queue.sll.head) {
    const node = queue.dequeue();
    q.push(node.val);
    console.log(node.val);

    for(var i = 0; i < node.children.length; i++) {
      queue.enqueue(node.children[i]);
    }
  }
  return q;
};
