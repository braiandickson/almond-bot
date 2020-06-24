const { messages, defaultMsg, imgs } = require('./messages');

const commandsDeclaration = ['comandos', 'hola', 'foto'];

const commands = (user) = {
  hola: [
      messages.hello
    ],
  comandos: [
    `${messages.commands} ${commandsDeclaration}`
  ],
  foto: imgs
};

module.exports = { commands, commandsDeclaration, defaultMsg };
