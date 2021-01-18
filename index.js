const Discord = require('discord.js');
const client = new Discord.Client();
let boops = 0

client.on('ready', () => {
  console.log(`Booping as ${client.user.tag}!`);
  client.user.setActivity("Say Count boops to see boops!", {
    type: "GAME"
  });
});

client.on('message', msg => {
  if (msg.content === 'Boop') {
    msg.reply('Booped!');
    boops++
  } else if (msg.content === 'boop') {
    msg.reply('Booped!');
    boops++
  } else if (msg.content === 'Count boops') {
    msg.reply(`Booped ${boops} times.`);
  } else if (msg.content === 'count boops') {
    msg.reply(`Booped ${boops} times.`);
  }
});


client.login('token here');
