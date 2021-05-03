import chatData from './chat_data';

export function howManyKills(kills) {
  /*
    TODO: Using a while loop, create a function that takes in a number,
    and starts from the number of kills passed in, going either up to 10, or down to 10, all the while logging
    "n kills on the board right now", finishing with "10 kills on the board right now"

    Example:
      -1 kills on the board right now
      0 kills on the board right now
      2 kills on the board right now
      ...
      10 kills on the board right now

    Example:
      22 kills on the board right now
      21 kills on the board right now
      ...
      11 kills on the board right now
      10 kills on the board right now
  */

  // while () {
  // }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  SECTION INSTRUCTIONS:
  You are a part of a Fortnite gaming server. The chat app that hosts it, 'Disagreement', is in beta and a lot of features are broken.
  You have access to the server messages and can execute actions, including the ones through the UI that are broken.
  The chat data is located on 'chatData'.
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export function sendMessage() {
  /*
    TODO: Add a message to the chat. You could do it through the UI, but you decide to do it in code
    because you'll "feel more like a hacker". Make sure you include your username and a timestamp, otherwise you risk breaking the entire server.
  */
}

export function reactToMessage() {
  /*
  TODO: Ninjafox2013's misspelling of "house" was funny to you, and you want to react to it with your favorite emote, :pepe_snicker:.
  The property that describes what reactions are tied to a particular message is `emotes`, which takes an array of emotes as strings.
  Using code, react to that message with :pepe_snicker:.
  */
}

export function getMessagesDF() {
  // TODO: Return an array of just the message strings in the chat using depth-first traversal.
}

export function getMessagesByTime() {
  // TODO: Using quick sort, return all of the messages as strings (no user needed) in chronological order. Use the time property
}

export function banAndDeleteBadBoy() {
  /*
    TODO: This is the 6th time Ninjafox2013 has disobeyed the rules of the server.
    Z, the admin, is sick of his antics and wants to remove all record of him. The delete messages feature is broken
    on Disagreement. Z will handle banning Ninjafox2013, but since you have access to all of the messages, you must recursively delete all of his messages.
  */
}














///////////////////////////////
// ignore this pls
///////////////////////////////

export function getChatData() {
  return chatData;
}
