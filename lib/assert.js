const correct = (msg) => {
  console.log(`         [✅] ${msg}`);
};
const incorrect = (msg) => {
  console.log(`         [❌] ${msg}`);
};

export const expecting = (result) => {
  if (typeof result === 'string') {
    result = `"${result}"`
  }
  return {
    toEqual: function (expected) {
      if (typeof expected === 'string') {
        expected = `"${expected}"`
      }
      if (result === expected) {
        correct(`Nice! Got ${expected}. Keep it 💯, zoomer`);
        // correct(`Nice! Got ${expected}. How poggers.`);
      } else {
        incorrect(`Expected ${expected} but got: ${result}.`);
      }
    },
    toBeAString: function () {
      if (typeof result === 'string') {
        // poggers
        correct(`Nice! Got a string.`);
      } else {
        incorrect(`This isn't a string!!!!`);
      }
    },
    toBeANumber: function () {
      if (typeof result === 'number') {
        // poggers
        correct(`Nice! Got a number.`);
      } else {
        incorrect(`This is NOT a number`);
      }
    },
    toBeUndefined: function () {
      if (typeof result === 'undefined') {
        // poggers
        correct(`Nice! Got undefined. Exactly what I needed.`);
      } else {
        incorrect(`It's not undefined!!!!`);
      }
    },
    toBeNegative: function() {
      if (typeof result === 'number' && typeof result < 0) {
        // poggers
        correct(`Nice! Got a negative number. nwn`);
      } else {
        incorrect(`It's not a negative number... uwu`);
      }
    },
    to: function(cb) {
      cb(result, correct, incorrect)
    }
  };
};

export const test = (message, callback) => {
  console.log('\n    ', message);
  callback();
};

export const define = (message, callback) => {
  console.log('\n-------------------------', '\n', '👉😎👉', message);
  callback();
};

export const spy = (obj, method) => {
  let spy = {
    count: 0,
    args: [],
  };

  let original = obj[method];
  obj[method] = function () {
    let args = [].slice.apply(arguments);
    spy.count++;
    spy.args.push(args);
    return original(...args);
  };

  return spy;
};
