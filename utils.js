const _ = require('lodash');

const { commands, commandsDeclaration, defaultMsg } = require('./commands');

const getRandomMsg = messages => messages && _.sample(messages);

const processCommand = message => {
  const command = message.content.substr(1);
  if (commandsDeclaration.includes(command)) {
    message.channel.send(getRandomMsg(commands[command]));
  } else {
    message.channel.send(defaultMsg);
  }
};

module.exports = { processCommand };
