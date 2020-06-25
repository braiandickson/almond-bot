const _ = require('lodash');
const { commandMessage, defaultMsg, imgs, greatings, randoms } = require('./messages');

const getRandomMsg = messages => messages && _.sample(messages);

const commandsDeclaration = ['comandos', 'hola', 'foto'];

const commands = {
  hola: getRandomMsg(greatings),
  foto: getRandomMsg(imgs),
  randoms: randoms,
  comandos: [
    `${commandMessage} ${commandsDeclaration}`
  ]
};

module.exports = { commands, commandsDeclaration, defaultMsg };
