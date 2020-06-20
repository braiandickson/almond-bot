const { comandos, deadlyMsgs } = require('./constants');

const processCommand = message => {
  console.log(message.author);
  const command = message.content.substr(1);
  const splittedCommand = command.split(' ');
  const primaryCommand = splittedCommand[0];
  const args = splittedCommand.slice(1);
  if (comandos.some(elem => elem === command)) {
    message.channel.send(deadlyMsgs[command]());
  } else {
    if (message.author.discriminator === '0098')
      message.channel.send('Uff Dorian... ese manldito enano!!');
    if (message.author.discriminator === '6348')
      message.channel.send('Umana, portami quei churrascos!');
  }
};

module.exports = { processCommand };
