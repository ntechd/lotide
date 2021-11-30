// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');

/*
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
*/

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
	/*
	assertArraysEqual: assertArraysEqual,
	assertEqual: assertEqual,
	assertObjectsEqual: [Function: assertObjectsEqual],
	countLetters: countLetters,
*/
}; 

