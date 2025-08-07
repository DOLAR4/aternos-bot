require('./keepalive.js');
const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'your-server.aternos.me',
    port: 25565,
    username: 'BotAFK_123',
    auth: 'offline',
    version: '1.20.1'
  });

  bot.on('spawn', () => console.log('✅ Bot connected!'));
  bot.on('end', () => {
    console.log('🔄 Reconnecting...');
    setTimeout(createBot, 10000);
  });
  bot.on('error', err => console.log('❌ Error:', err));
}

createBot();
