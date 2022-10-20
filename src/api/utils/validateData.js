require('dotenv').config();
const crypto = require('crypto');
const querystring = require('query-string');

const botToken = process.env.BOT_TOKEN;

const secret = crypto.createHmac('sha256', 'WebAppData').update(botToken);

const parseQueryString = (queryString) => querystring.parse(queryString);

const parseDataCheckString = (queryString) => {
  const data = parseQueryString(queryString);
  const dataCheckString = Object.keys(data)
    .filter((key) => key !== 'hash')
    .sort()
    .map((key) => `${key}=${data[key]}`)
    .join('\n');
  return dataCheckString;
};

const validateData = (queryString) => {
  const hash = parseQueryString(queryString).hash;
  const dataCheckString = parseDataCheckString(queryString);

  const _hash = crypto
    .createHmac('sha256', secret.digest())
    .update(dataCheckString)
    .digest('hex');
  return _hash === hash;
};

module.exports = validateData;
