const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);

  bot.user.setActivity("La Palm acasa!", {type: "PLAYING"});
});
//374323920104587275 - palm id
//337854135976198144 - dix id
// 476330453872148480 - botid
bot.on('message', msg => {
  if(msg.content.startsWith("/spam")) {
    if (msg.author.id !== '312451616') return msg.channel.send("**:warning:| Comanda BETA!**");
    msg.channel.send("<@513459163582562322> <@513459163582562322> ")
  }
  if(msg.content.startsWith("/flud")) {
    if (msg.author.id !== '374323920104587275') return msg.channel.send("**:warning:| Ce pula mea sa floodezi tu ma ca n-ai acces!**")
    msg.channel.send("**📣| Incep flood-ul asupra acestui server**")
    msg.channel.send("**DAU IN EL CA SURDU-N CLOPOT !!!**")
    msg.channel.send("**DAU IN EL CA SURDU-N CLOPOT !!!**")
    msg.channel.send("**DAU IN EL CA SURDU-N CLOPOT !!!**")
    msg.channel.send("**DAU IN EL CA SURDU-N CLOPOT !!!**")
    msg.channel.send("**DAU IN EL CA SURDU-N CLOPOT !!!**")
    msg.channel.send("**DAU IN EL CA SURDU-N CLOPOT !!!**")
    msg.channel.send("**DAU IN EL CA SURDU-N CLOPOT !!!**")
    msg.channel.send("**DAU IN EL CA SURDU-N CLOPOT !!!**")
    msg.channel.send("**DAU IN EL CA SURDU-N CLOPOT !!!**")
    msg.channel.send("**DAU IN EL CA SURDU-N CLOPOT !!!**")
    msg.channel.send("**DAU IN EL CA SURDU-N CLOPOT !!!**")
    msg.channel.send("**📣| A fost o farsa, din pacate Discord-ul nu-mi permite sa fac asta! :[[**")
  }
  if(msg.content.startsWith("saluta ba")) {
    if (msg.author.id !== '374323920104587275') return msg.channel.send("**:warning:| Nebunule.. eu raspund doar lui Palm.**");
    msg.channel.send("s-s-s-saluuuuuuuuuuuuuuuuut 👋👋👋")
  }
  if(msg.content.startsWith("exploit")) {
    msg.channel.send("Niste dobitoci care n-au ce face cu viata lor si vin pe JB.INDUNGI.RO..😡😡😡")
  }
  if(msg.content.startsWith("/rullz")) {
    msg.channel.send("Un om fara viata care bantuie JB-ul cum bantui eu banii din BRD..😡👻👻")
  }
  if(msg.content.startsWith("/altf4")) {
    msg.channel.send("**ALTF4 zis si ALTF COAIE e ca McPuisor fara cartofi**")
    msg.channel.send("**ALT+F4 = Quit Life**")
  }
  if(msg.content.startsWith("/palm")) {
    msg.channel.send("**Iti vad pula de fiecare data cand te speli cu mine**")
  }
  if(msg.content.startsWith("vreau admin")) {
    msg.channel.send("**Vrei pula ca-ti dau contra la cererea de pe forum :]]**")
  }
  if(msg.content.startsWith("/muie")) {
    msg.channel.send("**Iti dau muie cu ciorapu' si cu pula iti sparg capul!**")
  }
  if(msg.content.startsWith("<@374323920104587275>")) {
   // msg.channel.send('Sunt ocupat dau cu fludu, iti dau mention dupa ce termin.')
    //let dix1 = new Discord.RichEmbed()
    //.setImage("https://i2.wp.com/24.media.tumblr.com/tumblr_mdn5s0Q7Ht1r66g9jo1_500.gif")
    //msg.channel.send(dix1)
    const { Client, Attachment } = require('discord.js');  
    msg.channel.send(`Sunt ocupat dau cu fludu, iti dau mention dupa ce termin.`)
    const rip = new Attachment('https://i2.wp.com/24.media.tumblr.com/tumblr_mdn5s0Q7Ht1r66g9jo1_500.gif');

    msg.channel.send(rip);
  }
  if (msg.content === '/cmds') {
    if (msg.author.id !== '374323920104587275') return msg.channel.send("**:warning:| Te roade curiozitatea sa vezi comenzile, nu? :]]**")
    msg.channel.send("**Comenzile vor fi afisate in DM.**")
    msg.author.send(`
    **:scroll: | COMMANDLIST**
    /rape @user - violezi pe cineva prin mention!
    /flud - Flood prank pe server "spam mai pe scurt"
    saluta ba - faci bot-ul sa salute fortat
    /spam - spameaza tot server-ul "Comanda neterminata"
    exploit - comanda publica respectiv adresata fratilor exploit.
    /rullz - comanda publica respectiv adresata lui rullz.
    /altf4 - comanda publica respectiv adresata lui altf4
    /palm - comanda publica respectiv adresata lui Palm
    vreau admin - comanda publica respectiv adresata cersetorilor
    /muie - comanda publica respectiv adresata nu stiu cui :]]
    `);
   }
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});

bot.login(botconfig.token);
