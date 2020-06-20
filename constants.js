const comandos = ['comandos', 'hola'];

const deadlyMsgs = {
  hola: () => `Hola, maldito humano, que quieres...?`,
  comandos: () => `Los comandos son: ${comandos}`
};

module.exports = { deadlyMsgs, comandos };
