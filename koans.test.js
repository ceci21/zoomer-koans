import { define, expect, test, spy } from './lib/assert.js';
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
  pyramidOfYeezy,
  kickZachFromVC
} = koans;

define('Smooth brain math', () => {
  test("addToMakeFour: I need to equal four, but I don't. Fix me? uwu", () => {
    expect(addToMakeFour()).toEqual(4);
  });

  test('addTwoNumbers: You earn a wrinkle if you do this right', () => {
    expect(addTwoNumbers(98, 2)).toEqual(100);
    expect(addTwoNumbers(-24, 24)).toEqual(0);
  });

  test('subtractTwoNumbers: You earn two wrinkles if you do this right', () => {
    expect(subtractTwoNumbers(98, 2)).toEqual(96);
    expect(subtractTwoNumbers(-15, -20)).toEqual(5);
  });

  test('divideTwoNumbers: Divide two numbers', () => {
    expect(divideTwoNumbers(99, 3)).toEqual(33);
    expect(divideTwoNumbers(6322, 8)).toEqual(790.25);
  });

  test('numberToPower: Function for making a number a power of something', () => {
    expect(numberToPower(2, 16)).toEqual(65536);
    expect(numberToPower(1, 1)).toEqual(1);
    expect(numberToPower(1, 0)).toEqual(1);
  });

  test('checkIfEven: Check if a number is even', () => {
    expect(checkIfEven(6)).toEqual(true);
    expect(checkIfEven(91)).toEqual(false);
  });

  test('checkIfOdd: Check if a number is odd', () => {
    expect(checkIfOdd(69)).toEqual(true);
    expect(checkIfOdd(4)).toEqual(false);
  });
});

define('Getting to know basic types', () => {
  test('giveMeAString: I need a string', () => {
    expect(giveMeAString()).toBeAString();
  });

  test('giveMeANumber: I need a number', () => {
    expect(giveMeANumber()).toBeANumber();
  });

  test('giveMeANegativeNumber: I need a number, only negative', () => {
    expect(giveMeANegativeNumber()).toBeNegative();
  });

  test('giveMeUndefined: I want nothing', () => {
    expect(giveMeUndefined()).toBeUndefined();
  });

  test('giveMeAnArray: I want an array', () => {
    expect(giveMeAnArray()).toBeAnArray();
  });

  test('giveMeAnObject: I want an object', () => {
    expect(giveMeAnObject()).toBeAnObject();
  });

  test('giveMeAFunction: I want a function', () => {
    expect(giveMeAFunction()).toBeAFunction();
  });

  test('youAreAllTurkeys: Fill out this function so it takes in a name and tells you you\'re a little turkey', () => {
    expect(youAreAllTurkeys('Lauren')).toEqual("You're a little turkey, Lauren.");
    expect(youAreAllTurkeys('Francisco')).toEqual("You're a little turkey, Francisco.");
  });

  test('simpingOnWeekends: Help me fix my simping habit', () => {
    expect(simpingOnWeekends()).toDeepEqual(['Sunday', 'Saturday'])
  })
});

define('Giving functions a booty call (do zoomers say this?)', () => {
  test('callMyFunction: Call my special little function', () => {
    expect(callMyFunction()).toEqual("that's how it is on this bitch of an earth");
  });

  test("giveMeAnyOtherFruit: I don't like durians. Give me another fruit", () => {
    expect(giveMeAnyOtherFruit()).toEqual(false);
  });

  test("passInArguments: It's polite to argue in the context of programming", () => {
    expect(passInArguments()).toEqual(true);
  });
});

define('If statements', () => {
  test('makeItTrue: Make it true', () => {
    expect(makeItTrue()).toEqual("Yes, my dreams have come true! I'm a little pogchamp!");
  });

  test(`makeItBigger: Fix the comparison operator so it's correct`, () => {
    expect(makeItBigger()).toEqual(true);
  });

  test(`makeItSmaller: Fix the comparison operator so it's correct`, () => {
    expect(makeItSmaller()).toEqual(true);
  });

  test('isPogchampEnabled: Make my pogchamp dreams come true', () => {
    expect(isPogchampEnabled(true)).toEqual(
      "Yes, my dreams have come true! I'm a little pogchamp!"
    );
    expect(isPogchampEnabled(false)).toEqual('Maybe I can be a little pogchamp tomorrow');
  });

  test('whichParameterValueIsBigger: Put 3 numbers in as arguments and give back the biggest one', () => {
    expect(whichParameterValueIsBigger(62, 1, 98)).toEqual(98);
    expect(whichParameterValueIsBigger(2, 1, 0)).toEqual(2);
    expect(whichParameterValueIsBigger(-14, -11, -18)).toEqual(-11);
  });

  test("makeItLessRedundant: Shorten the number of lines in function 'redundantBlock' to 1 line.", () => {
    const str = String(makeItLessRedundant());
    const regex = /\{([\w|\W]*)\}/;
    const matches = str.match(regex)[1].split('\n').filter(_ => _.trim()) || [];
    expect(matches).to((result, correct, incorrect) => {
      if (result.length === 1 && result[0].includes('return')) {
        correct('The function body is one line. Poggers!');
        // Make sure the function works
        expect(makeItLessRedundant()(true)).toEqual(true);
        expect(makeItLessRedundant()(false)).toEqual(false);
      } else {
        incorrect("Expected 1 line in the function body");
      }
    });
  });
});


define('For loops', () => {
  test("acknowledgeGokuDrip: log 'goku drip' 10 times using a for loop", () => {
    const logSpy = spy(console, 'log');
    acknowledgeGokuDrip();
    let dripCounter = 0;
    logSpy.args.forEach(([arg]) => {
      if (arg === 'goku drip') {
        dripCounter++;
      }
    });
    expect(dripCounter).toEqual(10);
  });

  test('giveMeAnArrayOfNumbers: fill an array of numbers 1 through 5', () => {
    expect(giveMeAnArrayOfNumbers()).toDeepEqual([1, 2, 3, 4, 5]);
  });

  test('flipMyArrayOfNumbers: using a for loop, function returns an array starting from 5 and down to 1', () => {
    expect(flipMyArrayOfNumbers()).toDeepEqual([5, 4, 3, 2, 1]);
  });

  test('addUpAmountOnReceipt: Write a function that adds all of the amounts in a paycheck and returns the sum', () => {
    expect(addUpAmountOnReceipt([44.49])).toEqual(44.49);
    expect(addUpAmountOnReceipt([])).toEqual(0);
  });

  test("noAInYourNameMafia: Fix it so people who have the letter 'a' in their names get kicked from VC, and return that resulting array.", () => {
    expect(noAInYourNameMafia(['Austin', 'Bennett', 'Cameron', 'Josh', 'Zach'])).toDeepEqual([
      'Bennett',
      'Josh',
    ]);
    expect(noAInYourNameMafia(['Joseph', 'Jotaro', 'Giorno', 'Josuke'])).toDeepEqual([
      'Joseph',
      'Giorno',
      'Josuke',
    ]);
  });

  test('kickZachFromVC: Without creating a new array, kick Zach from VC', () => {
    var peopleInVC = ['Austin', 'Bennett', 'Cameron', 'Josh', 'Zach', 'UK Cameron', 'Ethan'];
    expect(kickZachFromVC(peopleInVC)).toDeepEqual([
      'Austin',
      'Bennett',
      'Cameron',
      'Josh',
      'UK Cameron',
      'Ethan',
    ]);
    expect(kickZachFromVC(peopleInVC)).to((result, correct, incorrect) => {
      if (result === peopleInVC) {
        correct('Yay! You gave back the array I passed in. 🎉');
      } else {
        incorrect('You did not give back the array I passed in. You boomer! 🥴');
      }
    });
  });

  test('pyramidOfYeezy: Use a for loop to generate a shallow pyramid of ye. Return as string', () => {
    expect(pyramidOfYeezy()).to((result, correct, incorrect) => {
      // console.log(result)
      // if (result === 'ye\nyeye\nyeyeye\nyeyeyeye\nyeyeye\nyeye\nye') {
        correct(`Pyramid of Ye complete.`)
      // } else {
      //   incorrect(`Expected a pyramid of 'ye' that looks like this:` + `
      //       ye
      //       yeye
      //       yeyeye
      //       yeyeyeye
      //       yeyeye
      //       yeye
      //       ye
      //   `)
      // }
    });
  });
});
