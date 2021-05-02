
export function howManyKills() {
  // TODO: Uncomment code lines 8-12
  // let kills = 0;
  // while () {
  //   kill++;
  // }
  // console.log(kills, 'kills on the board right now');
}


////////////
//  objects
////////////
const chat_data = {
  channel: `general`,
  messages: [
    {
      user: 'get_rekt',
      message: '@misterbusiness hey broski, you got sum heals and a shield pot?',
      replies: [
        {
          user: 'get_rekt',
          message: 'i need healing, and i am only at 1 hp',
        },
        {
          user: 'misterbusiness',
          message: '@get_rekt hey dude, sorry',
        },
      ],
    },
    {
      user: 'Ninjafox2013',
      message: 'i found nothing on this safari',
      replies: [
        {
          user: 'Ninjafox2013',
          message: 'i checked the upstars of that whorese',
          replies: [
            {
              user: 'Ninjafox2013',
              message: 'house*',
              replies: [
                {
                  user: 'Ninjafox2013',
                  message: 'but not the underneath yet',
                  replies: [
                    {
                      user: 'Ninjafox2013',
                      message: '😥'
                    }
                  ]
                }
              ],
            }
          ],
        },
      ],
    },
    {
      user: 'Z',
      user_type: 'Admin',
      message: `Hey @Ninjafox2013, we get you're new, but could you use the threads properly? Thanks`
    },
    {
      user: 'Ninjafox2013',
      message: `OK boomer 🙄`
    }
  ]
};


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
SECTION INSTRUCTIONS:
You are a part of a Fortnite gaming server. The chat app that hosts it, 'Disagreement', is in beta and a lot of features are broken.
You have access to the server messages and can execute actions, including the ones through the UI that are broken.
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function reactToMessage() {
  /*
    TODO: Ninjafox2013's misspelling of "house" was funny to you, and you want to react to it with your favorite emote, :pepe_snicker:.
    The property that describes what reactions are tied to a particular message is `emotes`, which takes an array of emotes as strings.
    Using code, react to that message with :pepe_snicker:.
    */
}

export function reactToMessage() {
  /*
    TODO: Ninjafox2013's misspelling of "house" was funny to you, and you want to react to it with your favorite emote, :pepe_snicker:.
    The property that describes what reactions are tied to a particular message is `emotes`, which takes an array of emotes as strings.
    Using code, react to that message with :pepe_snicker:.
    */
}

export function printMessages() {
}

export function banAndDeleteBadBoy() {
  /*
    TODO: This is the 6th time Ninjafox2013 has disobeyed the rules of the server.
    Z, the admin, is sick of his antics and wants to remove all record of him. The delete messages feature is broken
    on Disagreement. Z will handle banning Ninjafox2013, but since you have access to all of the messages, you must recursively delete them all.
  */
}
