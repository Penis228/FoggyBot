const Discord = require('discord.js');
const client = new Discord.Client();
const botname = `BreadBOT`;
const prefix = 'b!'
client.on('ready', () => {
  console.log(`Бот запущен`);
});

const Discord = require("discord.js");

 


client.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
if (command === 'invite') {
   const inviteembed = new Discord.RichEmbed()
   .setColor('00ff00')
   .setTitle('Ссылка на приглашения бота')
   .addField('https://discordapp.com/oauth2/authorize?client_id=572071875279192070&scope=bot&permissions=8')
   message.channel.send(inviteembed);
}}); 

var fortunes = [
  "**Да**",
  "**Нет**",
  "**Может быть**",
  "**Возможно нет**",
  "**Ещё как!**",
  "**Никогда!**"
];

client.on('message', message => {
if(message.author.bot) return;
if(!message.content.startsWith(prefix)) return;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if (command === '8ball') {
const ballembed = new Discord.RichEmbed()
.setAuthor(message.author.username, message.author.avatarURL)
.setTitle('Шар предсказаний')
.addField('Ваш вопрос:', args.join('** **'))
.addField('Ответ:', fortunes[Math.floor(Math.random() * fortunes.length)]);
if (args[0]) message.channel.send(ballembed);
}}); 

client.on('message', message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase(); 
if (command === 'creators') {
const embed = new Discord.RichEmbed()
.setColor('00ff00')
.setTitle('Создатели')
.addField('Автор бота:', `Хлебушек Тв Шоу#1239`)
.addField('Второй автор:', `Azte[Cas]#0346`)
  message.channel.send(embed)};
});   

client.login("NTcyMDcxODc1Mjc5MTkyMDcw.XMXCNQ.rp7im2jijcIifxTZ7OQNnRKscBM"); 

