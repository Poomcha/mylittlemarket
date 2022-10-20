require('dotenv').config();
const sellersUrl = `${process.env.API_URL}:${process.env.API_PORT}/sellers`;

class Sellers {
  constructor(id, telegram, name) {
    this.id = id;
    this.telegram = telegram;
    this.name = name;
  }
}
