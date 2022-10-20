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

// Middleware.
const middlewareObj = {};
const middlewarePath = path.resolve(__dirname, 'api/middlewares');
fs.readdirSync(middlewarePath)
  .filter((file) => file.indexOf('.') !== 0 && file.endsWith('.js'))
  .forEach((file) =>
    Object.assign(routesObj, {
      [`${file.slice(0, file.length - 3)}`]: require(path.resolve(
        middlewarePath,
        file
      )),
    })
  );

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
