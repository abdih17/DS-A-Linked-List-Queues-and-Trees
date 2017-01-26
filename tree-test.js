'use strict';

const Tree = require('./printTree.js');

var testTree = new Tree('A');
var treeB = new Tree('B');
var treeC = new Tree('C');
testTree.children.push(treeB, treeC);
treeB.children.push(new Tree('D'), new Tree('E'));
treeC.children.push(new Tree('F'));

// testTree??
console.assert(testTree.print() == 'A,B,C,D,E,F', `Actual value was ${testTree.print()}`);
console.log('Tree tests passing.');
