//Created by Tia Benson

//A Discord bot that replies to certain words

// Import discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Ready to go!');
});

// Create an event listener for messages
client.on('message', message => {
  
  var msg = message.content.split(" ");

  for(i = 0; i < msg.length; i++)
  {
    if(msg[i] === 'marco' || msg[i] === 'Marco') //Marco Polo
    {
      message.channel.send('Polo!');
    }

    else if(msg[i] === 'bot' || msg[i] === 'Bot') //respond if bot is mentioned
    {
      message.channel.send('Beep boop!');
      message.react('🤖');
    }

    else if(msg[i] === 'hello' || msg[i] === 'Hello' || msg[i] === 'hi' || msg[i] === 'Hi')   //hello
    {
      message.channel.send('Hello! :wave:');
    }

    else if(msg[i] === 'bye' || msg[i] === 'Bye')   //bye
    {
      message.channel.send('See ya later! :ok_hand:');
      break;
    }

    else if(msg[i] === 'nerd' || msg[i] === 'Nerd' || msg[i] === 'nerds' || msg[i] === 'Nerds') //nerd
    {
      message.channel.send(':nerd:');
    }

    else if(msg[i] === 'goodnight' || msg[i] === 'Goodnight') //goodnight
    {
      message.channel.send('Sweet dreams! :crescent_moon:');
    }

  }

});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('enter token');