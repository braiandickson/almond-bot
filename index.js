const Discord = require('discord.js');
const client = new Discord.Client();

const { processCommand } = require('./utils');

client.on('ready', () => {
  console.log('Connected as ' + client.user.tag);
  client.user.setActivity('dominar el mundo');
});

client.on('message', receiveMessage => {
  if (receiveMessage.author == client.user) return;
  if (receiveMessage.content.startsWith('!')) {
    processCommand(receiveMessage);
  }
});

client.login('NjQ5ODExODQ0MjYwOTU0MTE2.XeCO3g.kx8X9uXaZhKElVewWY_NIwLE2n8');
