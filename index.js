const Discord = require('discord.js');
const client = new Discord.Client();
const _ = require('lodash');
require('dotenv').config();

const { processCommand } = require('./utils');
const { commands } = require('./commands');

let msgCount = 0;

client.on('ready', () => {
  console.log('Connected as ' + client.user.tag);
  client.user.setActivity('dominar el mundo');
});
console.log(msgCount);
client.on('message', receiveMessage => {
  if (receiveMessage.author == client.user) return;
  msgCount++;
  if (receiveMessage.content.startsWith(process.env.PREFIX)) {
    processCommand(receiveMessage);
  }
  if(msgCount === 10) {
    receiveMessage.channel.send(commands['randoms']());
    msgCount = 0;
  }
});

client.login(process.env.DISCORD_ID);
