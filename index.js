import { expecting, test, spy } from './_assert.js';
import koans from './koans.js';
const {
  giveMeAString,
  giveMeANumber,
  checkIfEven,
  numberToPower,
  subtractTwoNumbers,
  divideTwoNumbers,
  giveMeUndefined,
  addToMakeFour,
  addTwoNumbers,
  giveMeAnyOtherFruit,
  callMyFunction,
} = koans;

test('Testing types', () => {
  expecting(giveMeAString()).toBeAString();
  expecting(giveMeANumber()).toBeANumber();
  expecting(giveMeUndefined()).toBeUndefined();
  // give an array
  // give an object
});

test('Smooth brain math', () => {
  expecting(addToMakeFour()).toEqual(4);
  expecting(addTwoNumbers(344, 76)).toEqual(420);
  expecting(subtractTwoNumbers(100, 31)).toEqual(69);
  expecting(divideTwoNumbers(99, 3)).toEqual(33);
  expecting(numberToPower(2, 16)).toEqual(65536);
  expecting(checkIfEven(6)).toEqual(true);
});

test('if statements', () => {
  // fill in condition so it returns true
  // fill in condition so it returns false
  // fill in condition so it is even
  // fill in condition for else if
  // fill in content on an else block
  // && and || x3
})

test('for loops', () => {
  // add content in for loop to print out number 5 10 times
  // add missing initializer
  // add missing condition
  // add missing ending condition
  // create all 3
  // log elements of an array
  // log a number if its odd only
})

test('while loops', () => {
  // add content to while loop
  // add condition to while loop
  // infinite loop (can i prevent this from going out of hand?)
})

test('Arrays', () => {
  // fill in array numbers 1-5
  // access property on an array
  // modify variable to access property on an array
  // push a value onto array
})

test('Objects', () => {
  // create an empty object
  // modify property on an object
  // add a property on an object
  // access property with dot notation
  // access property with bracket notation
})

test('Giving functions a (booty) call', () => {
  expecting(callMyFunction()).toEqual('Howdy world!');
  expecting(giveMeAnyOtherFruit()).toEqual(true);
});
