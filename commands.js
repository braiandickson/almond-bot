const _ = require('lodash');
const { commandMessage, defaultMsg, imgs, greatings, randoms } = require('./messages');

const commandsDeclaration = ['comandos', 'hola', 'foto'];

const commands = {
  hola: () => _.sample(greatings),
  foto: () => _.sample(imgs),
  randoms: () => _.sample(randoms),
  comandos: () => `${commandMessage} ${commandsDeclaration}`
};

module.exports = { commands, commandsDeclaration, defaultMsg };
