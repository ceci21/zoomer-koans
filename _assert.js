
const expecting = (result) => {
  return {
    toEqual: function(expected) {
      if (result === expected) {
        // poggers
        console.log(`    [✅] Nice! Got ${expected}. Keep it 💯, zoomer`)
      } else {
        console.error(`    [❌] Expected ${expected} but got ${result}.`);
      }
    },
    toBeAString: function() {
      if (typeof result === 'string') {
        // poggers
        console.log(`    [✅] Nice! Got a string.`)
      } else {
        console.error(`    [❌] This isn't a string!!!!`);
      }
    },
    toBeANumber: function() {
      if (typeof result === 'number') {
        // poggers
        console.log(`    [✅] Nice! Got a string.`)
      } else {
        console.error(`    [❌] This is NOT a number`);
      }
    },
    toBeUndefined: function() {
      if (typeof result === 'undefined') {
        // poggers
        console.log(`    [✅] Nice! Got undefined. Exactly what I needed.`)
      } else {
        console.error(`    [❌] It's not undefined!!!!`);
      }
    }
  }
}

export default expecting;
