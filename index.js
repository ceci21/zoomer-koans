import expecting from './_assert.js';
import koans from './koans.js';
const { giveMeAString, giveMeANumber, giveMeUndefined, addToMakeFour, addTwoNumbers, giveMeAnyOtherFruit } = koans;

expecting(giveMeAString).toBeAString();
expecting(giveMeANumber).toBeANumber();
expecting(giveMeUndefined).toBeUndefined();

expecting(addToMakeFour()).toEqual(4);

expecting(addTwoNumbers(344, 76)).toEqual(420);

expecting(giveMeAString()).toEqual(6);

expecting(giveMeAnyOtherFruit()).toEqual(true)
