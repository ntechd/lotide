// index.js

const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const countLetters = require('./countLetters');
const countOnly = require('.countonly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');


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
	countLetters: countLetters,
	countOnly: countOnly,
	eqArrays: eqArrays,
	eqObjects: eqObjects,
	findKeyByValue: findKeyByValue,
	findKey: findKey,
	letterPositions: letterPositions,
	map: map,
	takeUntil: takeUntil,
	without: without,
	/*
	assertArraysEqual: assertArraysEqual,
	assertEqual: assertEqual,
	assertObjectsEqual: [Function: assertObjectsEqual],
	countLetters: countLetters,
*/
};

//shorthand
module.exports = {
  head,
  tail,
  middle
}; 

