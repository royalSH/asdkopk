const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

   if (message.author.id !== '374323920104587275') return message.channel.send("**:warning:| Comanda poate fi executata doar de Developer!**");
  if(!args[0]) return message.channel.send("**/pbclear <numar mesaje>**");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`**:wastebasket: | Am sters ${args[0]} mesaje/mesaj!**`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "pbclear"
}
