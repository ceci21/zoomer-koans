
////////////
//  math
////////////

function addToMakeFour() {
  // TODO: Fix me!
  return 2 + 2;
}

function addTwoNumbers(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

function divideTwoNumbers(numberOne, numberTwo) {
  return numberOne / numberTwo;
}

function subtractTwoNumbers(numberOne, numberTwo) {
  return numberOne - numberTwo
}

function numberToPower(number, exponent) {
  return number ** exponent
}

function checkIfEven(number) {
  return number % 2 === 0
}

function checkIfOdd(number) {
  return number % 2 !== 0
}






////////////////////
// having a type
///////////////////

function giveMeAString() {
  return "4"; // TODO: Fix the return type
}

function giveMeANumber() {
  return 4; // TODO: Fix the return type
}

function giveMeANegativeNumber() {
  return -3459; // TODO: Fix what is returned
}

function giveMeUndefined() {
  return; // TODO: Fix the return type
}

function giveMeAnArray() {
  return []; // TODO: Fix the return type
}

function giveMeAnObject() {
  return { fruit: ['apple', 'blueberry', 'clementine'] }; // TODO: Fix the return type
}

function giveMeAFunction() {
  return giveMeAFunction; // TODO: Fix the return type
}

function youAreAllTurkeys(name) {
  return `You're a little turkey, ${name}.` // the better way nerd sice
  // return "You're a little turkey, " + name + "."
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
  // TODO: I'm trying to cut back on simping to weekends only (Saturday and Sunday). Help me reduce my simping habit
  var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return [daysOfWeek[0], daysOfWeek[6]];
}




/////////////////////////////////
// if statements and conditionals
/////////////////////////////////

function makeItTrue() {
  if (true) { // Fix this conditional
    return "Yes, my dreams have come true! I'm a little pogchamp!";
  } else {
    return '...';
  }
}


function makeItBigger() {
  if (5 < 7) { // TODO: Fix this conditional
    return true;
  }
}

function makeItSmaller() {
  if (9 > 7) { // TODO: Fix this conditional
    return true;
  }
}

function isPogchampEnabled(pogchampEnabled) {
  if (pogchampEnabled) { // TODO: Fix this conditional
    return "Yes, my dreams have come true! I'm a little pogchamp!";
  } else {  // TODO: And fix this conditional
    return "Maybe I can be a little pogchamp tomorrow";
  }
}

function whichParameterValueIsBigger(param1, param2, param3) {
  if (param1 > param2 && param1 > param3) {
    return param1;
  } else if (param2 > param1 && param2 > param3) {
    return param2;
  }
  return param3;
  // TODO: Using conditionals, return the biggest parameter.
}


function makeItLessRedundant() {
  // TODO: Shorten the number of lines in function 'redundantBlock' to 1 line.
  function redundantBlock(statement) {
    return Boolean(statement)
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
  return myFunction(); // TODO: Invoke 'myFunction'
}

function giveMeAnyOtherFruit() {
  function isAStinkyFruit(fruit) {
    if (fruit === 'Durian') {
      return true;
    } else {
      return false;
    }
  }

  return isAStinkyFruit('Pear'); // TODO: Give a different argument.
}

function passInArguments() {
  function argueWithMe(param1, param2, param3) {
    if (typeof param1 === 'number' && typeof param2 === 'string' && typeof param3 === 'number') {
      return true;
    } else {
      return false;
    }
  }
  return argueWithMe(45, "word", 17); // TODO: Fill the missing arguments
}




//////////////
//  for loops
//////////////

function acknowledgeGokuDrip() {
  for (var i = 0; i < 10; i++) {
    // TODO: Fill this in so this function logs to the console "goku drip" 10 times
    console.log('goku drip')
  }
}

function giveMeAnArrayOfNumbers() {
  var numbers = [];
  for (var x = 0; x < 5; x++) {
    numbers.push(x + 1)
    // TODO: Fill this in so the function returns an array with the numbers 1 through 5.
  }
  return numbers;
}

function flipMyArrayOfNumbers() {
  var numbers = [];
  for (var x = 0; x < 5; x++) {
    numbers.push(x + 1)
    // TODO: Fill this for loop in so the function returns an array starting from 5 and goes down to 1.
  }
  numbers.reverse()
  return numbers;
}

function addUpAmountOnReceipt(itemizedTotals) {
  let total = 0
  for (var x = 0; x < itemizedTotals.length; x++) {
    total = total + itemizedTotals[x]
  }
  return total;
  // TODO: Write a function that adds all of the amounts in a reciept and returns the sum.
  // [16.99, 21.0, 5.0, 1.5]
}

function noAInYourNameMafia(peopleInVC) {
  for (let p = 0; p <= peopleInVC.length - 1; p = p + 1) {
    if (peopleInVC[p].includes("A") || peopleInVC[p].includes("a")) {
      peopleInVC.splice(p, 1)
    }
    // TODO: There are several things wrong with this for loop.
    // Fix it so people who have the letter 'a' in their names get kicked from VC, and return that resulting array.
    // ['Austin', 'Bennett', 'Cameron', 'Josh', 'Zach']
  }
  return peopleInVC;
}

function kickZachFromVC(peopleInVC) {
  for (let p = 0; p <= peopleInVC.length - 1; p = p + 1) {
    if (peopleInVC[p] === "Zach") {
      peopleInVC.splice(p, 1)
    }
  }
  // TODO: Without creating a new array, kick Zach from VC.
  return peopleInVC;
}

function pyramidOfYeezy() {
  const ye = "ye"
  const grandYe = []
  for (let y = 1; y <= 4; y++) {
    let bigyee = ""
    for (let k = 1; k <= y; k++) {
      bigyee = bigyee + ye
    }
    grandYe.push(bigyee)
  }
  for (let o = 3; o > 0; o--) {
    let bigyee = ""
    for (let n = 1; n <= o; n++) {
      bigyee = bigyee + ye
    }
    grandYe.push(bigyee)
  }
  return grandYe.join("\n")
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





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//-------------------- Don't concern yourself with the stuff below this point!!!!--------------------
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


module.exports = {
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
