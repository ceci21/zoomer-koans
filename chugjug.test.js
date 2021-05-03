import { define, expect, test, spy } from './lib/assert.js';
import { howManyKills, printMessages } from './koans.js';
import { depthFirstSearchMessages } from './mock_responses';

const chatDataRef = getChatData();

define('While loops', () => {
  test('howManyKills: NEED those 10 kills', () => {
    const logSpy_1 = spy(console, 'log');
    expect(howManyKills(-5)).to((result, correct, incorrect) => {
      if (
        logSpy_1.count === 11 &&
        logSpy_1.args[logSpy_1.args.length - 1] === '10 kills on the board right now'
      ) {
        correct('just wiped out tomato town');
      } else {
        incorrect('gotta get 10 kills to b a pro fortnite player');
      }
    });

    const logSpy_2 = spy(console, 'log');
    expect(howManyKills(16)).to((result, correct, incorrect) => {
      if (
        logSpy_2.count === 7 &&
        logSpy_2.args[logSpy_2.args.length - 1] === '10 kills on the board right now'
      ) {
        correct('just wiped out tomato town');
      } else {
        incorrect('gotta get 10 kills to b a pro fortnite player');
      }
    });
  });
});

define('Objects', () => {
  test('sendMessage: send a mesg to yer buddys', () => {
    chatDataRef.messages = deepClone(messages)
    expect(sendMessage()).to((_, c, i) => {
      if (chatDataRef.messages.length === 5) {
        c('');
      } else {
        i('');
      }
    });
  });

  test('reactToMessage: add a reaction', () => {
    expect(reactToMessage()).to((_, c, i) => {
      if (chatDataRef.messages[1].replies[0].emotes[0] === ':pepe_snicker:') {
        c('');
      } else {
        i('');
      }
    });
  });

  test('getMessagesDF: Use depth first traversal', () => {
    expect(getMessagesDF()).to((results, c, i) => {
      for (let i = 0; i < results.length; i++) {
        const msg = results[i];

        if (i !== results.length - 1 && msg !== depthFirstSearchMessages[i]) {
          return i('woopsie')
        }
      }
      c('got em all')
    });
  });

  test('getMessagesByTime: Get em by time', () => {
    expect(getMessagesByTime()).to((results, c, i) => {
      for (let i = 0; i < results.length; i++) {
        const msg = results[i];

        if (i !== results.length - 1 && msg !== depthFirstSearchMessages[i]) {
          return i('woopsie')
        }
      }
      c('got em all')
    });
  });

  test('banAndDeleteBadBoy: Get em by time', () => {
    expect(getMessagesByTime()).to((results, c, i) => {
      for (let i = 0; i < results.length; i++) {
        const msg = results[i];

        if (i !== results.length - 1 && msg !== depthFirstSearchMessages[i]) {
          return i('woopsie')
        }
      }
      c('got em all')
    });
  });
});
