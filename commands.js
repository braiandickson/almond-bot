const { commandMessage, defaultMsg, imgs, greatings } = require('./messages');

const commandsDeclaration = ['comandos', 'hola', 'foto'];

const commands = (user) = {
  hola: greatings,
  foto: imgs,
  comandos: [
    `${commandMessage} ${commandsDeclaration}`
  ]
};

module.exports = { commands, commandsDeclaration, defaultMsg };
