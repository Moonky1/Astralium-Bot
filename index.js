require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
  console.log(`¡Astralium listo! Conectado como ${client.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN)
  .then(() => console.log('Login OK'))
  .catch(err => console.error('Login ERR:', err));

// Opcional: listener HTTP si lo dejas como Web Service
require('http')
  .createServer((req, res) => res.end('OK'))
  .listen(process.env.PORT || 3000);
