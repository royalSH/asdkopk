const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== '374323920104587275') return message.channel.send("**:warning:| Doar Palm are acces la aceasta comanda!**");

    let torape = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!torape) return message.channel.send("**❗MODEL: Trebuie sa mentionezi pe cineva!**");
    let kiss = [
      "http://i.giphy.com/lQODMfdOGxfI4.gif",
      "https://images.sex.com/images/pinporn/2015/09/04/300/13699398.gif",
    ]
    let hugresult = Math.floor((Math.random() * kiss.length));
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`${message.author.username} il/o violeaza pe: ${message.mentions.members.first().user.username}`)
            .setImage(kiss[hugresult])
            .setFooter(`PalmBOT | Rape Command  v1.5 |`, bot.user.displayAvatarURL)
        message.channel.send(hembed)
        return;
    }
}

module.exports.help = {
  name:"rape"
}