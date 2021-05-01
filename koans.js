
////////////
//  math
////////////

function addToMakeFour() {
  // TODO: Fix me!
  return 2 + 1;
}

function addTwoNumbers(numberOne, numberTwo) {
  // TODO: Fill in this function
}

function divideTwoNumbers(numberOne, numberTwo) {
  // TODO: Fill in this function
}

function subtractTwoNumbers(numberOne, numberTwo) {
  // TODO: Fill in this function
}

function numberToPower(number, exponent) {
  // TODO: Fill in this function
}

function checkIfEven(number) {
  // TODO: Fill in this function
}

function checkIfOdd(number) {
  // TODO: Fill in this function
}






////////////////////
// having a type
///////////////////

function giveMeAString() {
  return 4; // TODO: Fix the return type
}

function giveMeANumber() {
  return; // TODO: Fix the return type
}

function giveMeANegativeNumber() {
  return 3459; // TODO: Fix what is returned
}

function giveMeUndefined() {
  return 'pewdiepie'; // TODO: Fix the return type
}

function giveMeAnArray() {
  return ''; // TODO: Fix the return type
}

function giveMeAnObject() {
  return ['apple', 'blueberry', 49, 'clementine', -245]; // TODO: Fix the return type
}

function giveMeAFunction() {
  return null; // TODO: Fix the return type
}

function youAreAllTurkeys() {
  /*
    TODO: Fix this function so it takes a name and returns a string telling them they're a little turkey.
    Example 1:
      Input: "Kevin"
      Output: "You're a little turkey, Kevin."
    Example 2:
      Input: "Josh"
      Output: "You're a little turkey, Josh."
  */
}

function simpingOnWeekends() {
  // TODO: I'm trying to cut back on simping to weekends only. Help me reduce my simping habit
  var daysOfWeekImSimpin = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysOfWeekImSimpin;
}






/////////////////////////////////
// if statements and conditionals
/////////////////////////////////

function makeItTrue() {
  if (false) { // Fix this conditional
    return "Yes, my dreams have come true! I'm a little pogchamp!";
  } else {
    return '...';
  }
}


function makeItBigger() {
  if (5 > 7) { // TODO: Fix this conditional
    return true;
  }
}

function makeItSmaller() {
  if (9 < 7) { // TODO: Fix this conditional
    return true;
  }
}

function isPogchampEnabled(pogchampEnabled) {
  if (false) { // TODO: Fix this conditional
    return "Yes, my dreams have come true! I'm a little pogchamp!";
  } else if (false) {  // TODO: And fix this conditional
    return "Maybe I can be a little pogchamp tomorrow";
  }
}

function whichParameterValueIsBigger(param1, param2, param3) {
  // TODO: Using conditionals, return the biggest parameter.
}


function makeItLessRedundant() {
  // TODO: Shorten the number of lines in function 'redundantBlock' to 1 line.
  function redundantBlock(statement) {
    if (statement === true) {
      return true;
    } else {
      return false;
    }
  }

  return redundantBlock;
}





///////////////
// functions
///////////////

function callMyFunction() {
  function myFunction() {
    return 'that\'s how it is on this bitch of an earth';
  }
  return; // TODO: Invoke 'myFunction'
}

function giveMeAnyOtherFruit() {
  function isAStinkyFruit(fruit) {
    if (fruit !== 'Durian') {
      return true;
    } else {
      return false;
    }
  }

  return isAStinkyFruit('Durian'); // TODO: Give a different argument.
}

function passInArguments() {
  function argueWithMe(param1, param2, param3) {
    if (typeof param1 === 'number' && param2 === 'string' && param3 === 'number') {
      return true;
    } else {
      return false;
    }
  }
  return argueWithMe(45); // TODO: Fill the missing arguments
}




//////////////
//  for loops
//////////////

function acknowledgeGokuDrip() {
  for (var i = 0; i < 10; i++) {
    // TODO: Fill this in so this function logs to the console "goku drip" 10 times
    // console.log('goku drip')
  }
}

function giveMeAnArrayOfNumbers() {
  var numbers = [];
  for (var x = 0; x < 5; x++) {
    // TODO: Fill this in so the function returns an array with the numbers 1 through 5.
  }
  return numbers;
}

function flipMyArrayOfNumbers() {
  var numbers = [];
  for (var x = 0; x < 5; x++) {
    // TODO: Fill this for loop in so the function returns an array starting from 5 and goes down to 1.
  }
  return numbers;
}

function addUpAmountOnReceipt(itemizedTotals) {
  // TODO: Write a function that adds all of the amounts in a paycheck and returns the sum.

}

function noAInYourNameMafia(peopleInVC) {
  for (let p = 2; p < peopleInVC; p = p - 1) {
    // TODO: There are several things wrong with this for loop.
    // Fix it so people who have the letter 'a' in their names get kicked from VC, and return that resulting array.
  }
  return;
}

function kickZachFromVC(peopleInVC) {
  // TODO: Without creating a new array, kick Zach from VC.
  return peopleInVC;
}

function pyramidOfYeezy() {
  /*
    TODO: Use a for loop to generate a shallow pyramid of ye. Return as a string;
    Expected output:
    ye
    yeye
    yeyeye
    yeyeyeye
    yeyeye
    yeye
    ye
  */
}


////////////////////////////////////////////////////////////////////////////////////////////////////////
// _           _   _                        _          __  __   _       _ _ _                  _
// | |         | | | |                      | |        / _|/ _| (_)     (_) | |                | |
// | |__   ___ | |_| |_ ___  _ __ ___    ___| |_ _   _| |_| |_   _ ___   _| | | ___  __ _  __ _| |
// | '_ \ / _ \| __| __/ _ \| '_ ` _ \  / __| __| | | |  _|  _| | / __| | | | |/ _ \/ _` |/ _` | |
// | |_) | (_) | |_| || (_) | | | | | | \__ \ |_| |_| | | | |   | \__ \ | | | |  __/ (_| | (_| | |
// |_.__/ \___/ \__|\__\___/|_| |_| |_| |___/\__|\__,_|_| |_|   |_|___/ |_|_|_|\___|\__, |\__,_|_|
//                                                                                   __/ |
////////////////////////////////////////////////////////////////////////////////////////////////////////


export default {
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
};
