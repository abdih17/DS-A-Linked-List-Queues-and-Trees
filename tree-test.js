'use strict';

const Tree = require('./printTree.js');

var testTree = new Tree('A');
var b = new Tree('B');
var c = new Tree('C');
var d = new Tree('D');
var e = new Tree('E');
var f = new Tree('F');

// testTree??

console.assert(testTree.print() == 'A,B,c,e,d', `Actual value was ${testTree.print()}`);
console.log('Tree tests passing.');
