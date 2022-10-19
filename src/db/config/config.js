require('dotenv').config()

module.exports = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  host: process.env.HOST,
  port: process.env.PORT,
  ssl: true,
  dialect: process.env.DIALECT,
  dialectOptions: {
    ssl: true,
  },
};
