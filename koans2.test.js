import { define, expect, test, spy } from './lib/assert.js';
import { howManyKills, printMessages } from './koans.js';



define('While loops', () => {
  test('howManyKills: I need 10 kills', () => {
    const logSpy = spy(console, 'log');
    expect(howManyKills).to((result, good, bad) => {

      good('received: 10 kills on the board right now just wiped out tomato town');
      bad('Not enough kills, baby')
      bad('Too many kills, smurf')
    });

  });
});

define('', () => {
  expect(printMessages()).toDeepEqual([
    '@misterbusiness hey broski, you got sum heals and a shield pot',
    'i need healing, and i am only at 1 hp',
    '@get_rekt hey dude, sorry',
    'i found nothing on this safari',
    'i checked the upstars of that whorese',
    'house*',
    'but not the underneath yet',
    '😥',
    `Hey @Shadowfox2013, we get you're new, but could you use the threads properly? Thanks`
  ]);
})

// define('Arrays', () => {
//   // fill in array numbers 1-5
//   // access property on an array
//   // modify variable to access property on an array
//   // push a value onto array
// });

// define('Objects', () => {
//   // create an empty object
//   // modify property on an object
//   // add a property on an object
//   // access property with dot notation
//   // access property with bracket notation
// });
