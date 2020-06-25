const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

const { processCommand } = require('./utils');

let msgCount = 0;

client.on('ready', () => {
  console.log('Connected as ' + client.user.tag);
  client.user.setActivity('dominar el mundo');
});

client.on('message', receiveMessage => {
  if (receiveMessage.author == client.user) return;
  if (receiveMessage.content.startsWith(process.env.PREFIX)) {
    processCommand(receiveMessage);
    msgCount++;
  }
  if(msgCount === 15) {
    receiveMessage.channel.send(commands['randoms']);
    msgCount = 0;
  }
});

client.login(process.env.DISCORD_ID);