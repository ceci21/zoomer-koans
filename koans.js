

function giveMeAString() {
  return 4; // TODO: Fix the return type
}

function giveMeANumber() {
  return; // TODO: Fix the return type
}

function giveMeUndefined() {
  return 'gregory'; // TODO: Fix the return type
}

// I need to equal four, but I don't. uwu
function addToMakeFour() {
  // TODO: Fix me!
  return 2 + 2;
}

function addTwoNumbers(numberOne, numberTwo) {
  // TODO: Fill in this function
}

function callMyFunction() {
  function myFunction() {
    return 'Howdy world!'
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
  return function(...args) {
    console.log('\n', `${func.name}: ${message}`);
    return func(...args);
  }
}


// VVV Ignore all of this business VVV
export default {
  giveMeAString: wrap('I need a string.', giveMeAString),
  giveMeANumber: wrap('I need a number.', giveMeANumber),
  giveMeUndefined: wrap('I don\'t need anything.', giveMeUndefined),
  addToMakeFour: wrap('I need to equal four, but I don\'t. Fix me? uwu', addToMakeFour),
  addTwoNumbers: wrap('Make these two bitches do smooth brain math', addTwoNumbers),
  giveMeAnyOtherFruit: wrap('I don\'t like durians. Give me another fruit.', giveMeAnyOtherFruit)
}
