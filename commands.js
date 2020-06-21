const commandsDeclaration = ['comandos', 'hola'];

const commands = (user) = {
  hola: [
      'Hola, maldite humane, que quieres...?'
    ],
  comandos: [
    `Los comandes son: ${commandsDeclaration}`
  ]
};

const defaultMsg = 'Miau miau, desgraciade!';

module.exports = { commands, commandsDeclaration, defaultMsg };
