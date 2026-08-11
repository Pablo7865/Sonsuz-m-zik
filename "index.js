const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates]
});

client.once("ready", () => {
   if (message.content === "!ping") {
    message.reply("Pong!");
  }
  console.log("Bot aktif!");
});

 client.login(process.env.TOKEN)
