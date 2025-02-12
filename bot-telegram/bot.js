const { Telegraf } = require('telegraf');

const bot = new Telegraf('7918973160:AAH5UN3NvsPOTEJz6SuhoLNl89xo-H3GnJA');

bot.start((ctx) => {
    ctx.reply('Bienvenue sur le bot USDT Rewards ! 🚀\n\nInvitez des amis et gagnez des USDT !');
});

bot.launch();

console.log('🤖 Bot démarré avec succès !');
