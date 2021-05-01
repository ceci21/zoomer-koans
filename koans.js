////////////
//  types
////////////
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

function simpingOnWeekends() {
  // TODO: I'm trying to cut back on simping to weekends only. Help me reduce my simping habit
  var daysOfWeekImSimpin = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysOfWeekImSimpin;
}

////////////
//  for loops
////////////
function acknowledgeGokuDrip() {
  for (var i = 1; i <= 10; i++) {
    // TODO: Fill this in so this function logs to the console "goku drip" 10 times
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
    // TODO: Fill this in so the function returns an array starting from 5 and going down to 1.
  }
  return numbers;
}

function

////////////
//  math
////////////

// I need to equal four, but I don't. uwu
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


//////////////////////////////
// if statements and conditionals
//////////////////////////////
function makeItTrue() {
  if (false) { // Fix this conditional
    return "Yes, my dreams have come true! I'm a little pogchamp!";
  } else {
    return '...';
  }
}

function makeItFalse() {
  if (true) { // TODO: Fix this conditional
    return '...';
  } else {
    return "Yes, my dreams have come true! I'm a little pogchamp!";
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

function checkIfEven(number) {
  // TODO: Fill in this function
}

function checkIfOdd(number) {
  // TODO: Fill in this function
}

function makeItLessRedundant() {
  function redundantBlock(trueStatement) {
    // TODO: Shorten the number of lines in this function to 1 line.
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
    return 'suh world';
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

////////////////////////////////////////////////////////////////////////////////////////////////////////
// _           _   _                        _          __  __   _       _ _ _                  _
// | |         | | | |                      | |        / _|/ _| (_)     (_) | |                | |
// | |__   ___ | |_| |_ ___  _ __ ___    ___| |_ _   _| |_| |_   _ ___   _| | | ___  __ _  __ _| |
// | '_ \ / _ \| __| __/ _ \| '_ ` _ \  / __| __| | | |  _|  _| | / __| | | | |/ _ \/ _` |/ _` | |
// | |_) | (_) | |_| || (_) | | | | | | \__ \ |_| |_| | | | |   | \__ \ | | | |  __/ (_| | (_| | |
// |_.__/ \___/ \__|\__\___/|_| |_| |_| |___/\__|\__,_|_| |_|   |_|___/ |_|_|_|\___|\__, |\__,_|_|
//                                                                                   __/ |
////////////////////////////////////////////////////////////////////////////////////////////////////////

const wrap = (message, func) => {
  return function (...args) {
    console.log('\n', `    ${func.name}: ${message}`);
    return func(...args);
  };
};

// VVV Ignore all of this business VVV
export default {
  giveMeAString: wrap('I need a string.', giveMeAString),
  giveMeANumber: wrap('I need a number.', giveMeANumber),
  giveMeUndefined: wrap("I don't need anything.", giveMeUndefined),
  addToMakeFour: wrap("I need to equal four, but I don't. Fix me? uwu", addToMakeFour),
  addTwoNumbers: wrap('Make these two dudes do smooth brain math', addTwoNumbers),
  subtractTwoNumbers,
  divideTwoNumbers,
  numberToPower,
  checkIfEven,
  giveMeAnyOtherFruit: wrap("I don't like durians. Give me another fruit.", giveMeAnyOtherFruit),
  callMyFunction: wrap('Call my little function.', callMyFunction),
};
