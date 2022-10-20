const app = require('./app');
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

bot
  .launch()
  .then(() => console.log("mlm' alive!"))
  .catch((err) => console.log(err));

app.listen(process.env.API_PORT);
