const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const corsOptions = {
  origin: '*',
};

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(cors(corsOptions));

// Enable WebAppData check everywhere.
// @see https://core.telegram.org/bots/webapps#validating-data-received-via-the-web-app
const validateDataMW = require('./api/middlewares/validateDataMW');
app.use(express.Router().get('/login'), validateDataMW);

// Routage dynamique.
const routesObj = {};
const routesPath = path.resolve(__dirname, 'api/routes');
fs.readdirSync(routesPath)
  .filter((file) => file.indexOf('.') !== 0 && file.endsWith('.js'))
  .forEach((file) =>
    Object.assign(routesObj, {
      [`${file.slice(0, file.length - 3)}`]: require(path.resolve(
        routesPath,
        file
      )),
    })
  );
Object.keys(routesObj).forEach((route) =>
  app.use(`/${route}`, routesObj[route])
);

module.exports = app;
