const { commandMessage, defaultMsg, imgs, greatings, randoms } = require('./messages');
const { getRandomMsg } = require('./utils');

const commandsDeclaration = ['comandos', 'hola', 'foto'];

const commands = (user) = {
  hola: getRandomMsg(greatings),
  foto: getRandomMsg(imgs),
  randoms: randoms,
  comandos: [
    `${commandMessage} ${commandsDeclaration}`
  ]
};

module.exports = { commands, commandsDeclaration, defaultMsg };
