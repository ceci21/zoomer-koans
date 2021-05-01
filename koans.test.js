import { define, expecting, test, spy } from './lib/assert.js';
import koans from './koans.js';

const {
  giveMeAString,
  giveMeANumber,
  giveMeUndefined,
  addToMakeFour,
  addTwoNumbers,
  subtractTwoNumbers,
  passInArguments,
  divideTwoNumbers,
  numberToPower,
  checkIfEven,
  checkIfOdd,
  giveMeAnyOtherFruit,
  callMyFunction,
  makeItTrue,
  isPogchampEnabled,
  makeItBigger,
  makeItSmaller,
  makeItLessRedundant,
  whichParameterValueIsBigger,
  giveMeANegativeNumber,
  giveMeAnArray,
  giveMeAnObject,
  giveMeAFunction,
  youAreAllTurkeys,
  simpingOnWeekends,
  acknowledgeGokuDrip,
  giveMeAnArrayOfNumbers,
  flipMyArrayOfNumbers,
  addUpAmountOnReceipt,
  noAInYourNameMafia,
  pyramidOfYeezy
} = koans;

define('Smooth brain math', () => {
  test("addToMakeFour: I need to equal four, but I don't. Fix me? uwu", () => {
    expecting(addToMakeFour()).toEqual(4);
  });

  test('addTwoNumbers: You earn a wrinkle if you do this right', () => {
    expecting(addTwoNumbers(98, 2)).toEqual(100);
    expecting(addTwoNumbers(-24, 24)).toEqual(0);
  });

  test('subtractTwoNumbers: You earn two wrinkles if you do this right', () => {
    expecting(subtractTwoNumbers(98, 2)).toEqual(96);
    expecting(subtractTwoNumbers(-15, -20)).toEqual(5);
  });

  test('divideTwoNumbers: Divide two numbers', () => {
    expecting(divideTwoNumbers(99, 3)).toEqual(33);
    expecting(divideTwoNumbers(6322, 8)).toEqual(790.25);
  });

  test('numberToPower: exponentiating something', () => {
    expecting(numberToPower(2, 16)).toEqual(65536);
    expecting(numberToPower(1, 1)).toEqual(1);
    expecting(numberToPower(1, 0)).toEqual(1);
  });

  test('checkIfEven: check if even', () => {
    expecting(checkIfEven(6)).toEqual(true);
    expecting(checkIfEven(91)).toEqual(false);
  });

  test('checkIfOdd: check if odd', () => {
    expecting(checkIfOdd(69)).toEqual(true);
    expecting(checkIfOdd(4)).toEqual(false);
  });
});

define('Testing types', () => {
  test('giveMeAString: I need a string', () => {
    expecting(giveMeAString()).toBeAString();
  });

  test('giveMeANumber: I need a number', () => {
    expecting(giveMeANumber()).toBeANumber();
  });

  test('giveMeANegativeNumber: I need a number, only negative', () => {
    expecting(giveMeANegativeNumber()).toBeNegative();
  });

  test('giveMeUndefined: I want nothing', () => {
    expecting(giveMeUndefined()).toBeUndefined();
  });
});

define('Giving functions a booty call (do zoomers say this?)', () => {
  test('callMyFunction: Call my special little function', () => {
    expecting(callMyFunction()).toEqual('that\'s how it is on this bitch of an earth');
  });

  test("giveMeAnyOtherFruit: I don't like durians. Give me another fruit", () => {
    expecting(giveMeAnyOtherFruit()).toEqual(true);
  });

  test("passInArguments: It's polite to argue", () => {
    expecting(passInArguments()).toEqual(true);
  });
});

define('if statements', () => {
  test('makeItTrue: Make it true', () => {
    expecting(makeItTrue()).toEqual("Yes, my dreams have come true! I'm a little pogchamp!");
  });

  test('makeItBigger:', () => {
    expecting(makeItBigger()).toEqual(true);
  });

  test('makeItSmaller:', () => {
    expecting(makeItSmaller()).toEqual(true);
  });

  test('isPogchampEnabled: Make it true', () => {
    expecting(isPogchampEnabled(true)).toEqual(
      "Yes, my dreams have come true! I'm a little pogchamp!"
    );
    expecting(isPogchampEnabled(false)).toEqual('Maybe I can be a little pogchamp tomorrow');
  });

  test("whichParameterIsBigger:", () => {
    expecting(whichParameterValueIsBigger()).toEqual(true);
  });

  test('makeItLessRedundant: Shorten the number of lines in function \'redundantBlock\' to 1 line.', () => {
    const str = String(makeItLessRedundant);
    const regex = /\{/g
    const matches = str.match(regex);
    expecting(matches.length).to((result, correct, incorrect) => {
      if (result.length === 1 && result.includes('return')) {
        correct('The function body is one line. Poggers!')
        // Make sure the function works
        expecting(makeItLessRedundant()(true)).toEqual(true);
        expecting(makeItLessRedundant()(false)).toEqual(false);
      } else {
        incorrect('Either you haven\'t shortened the function')
      }
    });
  });
  // && and || x3
});

define('for loops', () => {
  test("acknowledgeGokuDrip: log 'goku drip' 10 times using a for loop", () => {
    const logSpy = spy(console, 'log');
    acknowledgeGokuDrip();
    let dripCounter = 0;
    logSpy.args.forEach(([arg]) => {
      if (arg === 'goku drip') {
        dripCounter++;
      }
    });
    expecting(dripCounter).toEqual(10);
  });

  test('giveMeAnArrayOfNumbers: fill an array of numbers 1 through 5', () => {
    expecting(giveMeAnArrayOfNumbers()).toDeepEqual([1, 2, 3, 4, 5])
  })
  // add content in for loop to print out number 5 10 times
  // add missing initializer
  // add missing condition
  // add missing ending condition
  // create all 3
  // log elements of an array
  // log a number if its odd only
});

define('while loops', () => {
  // add content to while loop
  // add condition to while loop
  // infinite loop (can i prevent this from going out of hand?)
});

define('Arrays', () => {
  // fill in array numbers 1-5
  // access property on an array
  // modify variable to access property on an array
  // push a value onto array
});

define('Objects', () => {
  // create an empty object
  // modify property on an object
  // add a property on an object
  // access property with dot notation
  // access property with bracket notation
});
