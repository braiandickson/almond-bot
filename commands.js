const _ = require('lodash');
const { commandMessage, defaultMsg, imgs, greatings, randoms } = require('./messages');

const commandsDeclaration = ['comandos', 'hola', 'foto'];

const getRandomMsg = list => _.sample(list);

const commands = {
  hola: () => getRandomMsg(greatings),
  foto: () => getRandomMsg(imgs),
  randoms: () => getRandomMsg(randoms),
  comandos: () => `${commandMessage} ${commandsDeclaration}`
};

module.exports = { commands, commandsDeclaration, defaultMsg };
