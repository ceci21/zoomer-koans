import { define, expect, test, spy } from './lib/assert.js';
import { howManyKills, sendMessage, reactToMessage, getMessagesDF, getMessagesByTime, banAndDeleteBadBoy, getChatData } from './fortnite.js';
import {
  depthFirstSearchMessages,
  chronologicalMessages,
  ninjaFoxMessages,
} from './mock_responses.js';

const chatDataRef = getChatData();

define('While loops', () => {
  test('howManyKills: NEED those 10 kills', () => {
    const logSpy_1 = spy(console, 'log');
    expect(howManyKills(-5)).to((result, correct, incorrect) => {
      if (
        logSpy_1.count === 11 &&
        logSpy_1.args[logSpy_1.args.length - 1] === '10 kills on the board right now'
      ) {
        return correct('just wiped out tomato town part 1');
      } else {
        return incorrect('gotta get 10 kills to b a pro fortnite player part 1');
      }
    });

    const logSpy_2 = spy(console, 'log');
    expect(howManyKills(16)).to((result, correct, incorrect) => {
      if (
        logSpy_2.count === 7 &&
        logSpy_2.args[logSpy_2.args.length - 1] === '10 kills on the board right now'
      ) {
        return correct('just wiped out tomato town part 2');
      } else {
        return incorrect('gotta get 10 kills to b a pro fortnite player part 2');
      }
    });
  });
});

define('Objects', () => {
  test('sendMessage: send a mesg to ye buddys', () => {
    expect(sendMessage()).to((_, correct, incorrect) => {
      if (chatDataRef.messages.length === 5) {
        return correct('I really love to chug jug with you');
      }
      return incorrect(`don't be shy`);
    });
  });

  test('reactToMessage: add a reaction', () => {
    expect(reactToMessage()).to((_, correct, incorrect) => {
      const targetedMsg = chatDataRef.messages[1].replies[0];
      if (targetedMsg && targetedMsg.emotes && targetedMsg.emotes[0] === ':pepe_snicker:') {
        return correct('Pepe detected');
      }
      return incorrect('No emote found :(');
    });
  });

  test('getMessagesDF: Use depth first traversal', () => {
    expect(getMessagesDF()).to((results = [], correct, incorrect) => {
      if (!results.length) {
        return incorrect(`Didn't get any messages back`);
      }
      for (let i = 0; i < results.length - 1; i++) {
        const msg = results[i];

        if (msg !== depthFirstSearchMessages[i]) {
          return incorrect('Not in DFS order');
        }
      }
      correct('Thx 4 the msgs');
    });
  });

  test('getMessagesByTime: Get em by time', () => {
    expect(getMessagesByTime()).to((results = [], correct, incorrect) => {
      if (!results.length) {
        return incorrect('Bro my jaw hurts so much');
      }
      for (let i = 0; i < results.length - 1; i++) {
        const msg = results[i];

        if (msg !== chronologicalMessages[i]) {
          return incorrect(`Bro my jaw hurts so much`);
        }
      }
      correct('We can be pro-Fortnite gamers');
    });
  });

  test('banAndDeleteBadBoy: Get em by time', () => {
    expect(getMessagesByTime()).to((results = [], correct, incorrect) => {
      if (!results.length) {
        return incorrect('no messages came back dude')
      }
      for (let i = 0; i < results.length; i++) {
        const msg = results[i];
        if (ninjaFoxMessages.includes(msg)) {
          return incorrect(`I found a ninjafox2013 message`);
        }
      }
      correct('I just got a victory royale')
    });
  });
});
