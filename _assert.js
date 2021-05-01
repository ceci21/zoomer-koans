const correct = (msg) => {
  console.log(`         [✅] ${msg}`);
};
const incorrect = (msg) => {
  console.log(`         [❌] ${msg}`);
};

export const expecting = (result) => {
  return {
    toEqual: function (expected) {
      if (result === expected) {
        // poggers
        correct(`Nice! Got ${expected}. Keep it 💯, zoomer`);
      } else {
        incorrect(`Expected ${expected} but got ${result}.`);
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
        correct(`Nice! Got a string.`);
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
  };
};

export const test = (message, callback) => {
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
