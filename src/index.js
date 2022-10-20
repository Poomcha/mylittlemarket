const app = require('./app');
const http = require('http');
require('dotenv').config();
const bot = require('./bot/index');

/**
 * Retourne un port valide.
 * @param { String | Integer } val
 * @returns { Integer }
 */
const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

// Configuration du port :
const port = normalizePort(process.env.API_PORT || '3001');
app.set('port', port);

/**
 * Gère les erreurs de serveurs.
 * @param {*} error
 */
const errorHandler = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address == 'string' ? 'pipe ' + address : 'port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

// Création du serveur :
const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

bot
  .launch()
  .then(() => console.log("mlm' alive!"))
  .catch((err) => console.log(err));

server.listen(port);
