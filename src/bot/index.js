require('dotenv').config();
const { Telegraf } = require('telegraf');
const clientUrl = `${process.env.CLIENT_URL}:${process.env.CLIENT_PORT}`;

const bot = new Telegraf(process.env.BOT_TOKEN, {
  telegram: { testEnv: process.env.BOT_TEST_ENV === 'TEST' },
});

bot.start(async (ctx) =>
  ctx.sendMessage(
    await ctx.reply(`Salut !\nBienvenue sur mylittlemarket !\n`, {
      parse_mode: 'html',
      reply_markup: JSON.stringify({
        inline_keyboard: [
          [
            {
              text: 'Lancer MLM',
              web_app: { url: clientUrl },
            },
          ],
        ],
      }),
    })
  )
);

module.exports = bot;
