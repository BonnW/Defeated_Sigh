const Discord = require('discord.js');
const logger = require('winston');
const auth = require('./auth.json');
const prefix = require('./config.json');

console.log("testing");


// ***********************************
// TEMPLATE CODE
// ***********************************

// // Configure logger settings

// logger.remove(logger.transports.Console);
// logger.add(new logger.transports.Console, {
//     colorize: true
// });
// logger.level = 'debug';


// // Initialize Discord Bot

// const bot = new Discord.Client({
//    token: auth.token,
//    autorun: true
// });
// bot.on('ready', function (evt) {
//     logger.info('Connected');
//     logger.info('Logged in as: ');
//     logger.info(bot.username + ' - (' + bot.id + ')');
// });
// bot.on('message', function (user, userID, channelID, message, evt) {
//     // Our bot needs to know if it will execute a command
//     // It will listen for messages that will start with `!`
//     if (message.substring(0, 1) == '!') {
//         let args = message.substring(1).split(' ');
//         let cmd = args[0];
       
//         args = args.splice(1);
//         switch(cmd) {
//             // !ping
//             case 'ping':
//                 bot.sendMessage({
//                     to: channelID,
//                     message: 'Pong!'
//                 });
//             break;
//             // Just add any case commands if you want to..
//          }
//      }
// });


// ***********************************
// MY CODE
// ***********************************

const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('I am Ready!');
});


// RESPONSE FOR PEOPLE SAYING THIS BOT IT STUPID

bot.on('message', msg => {
    const username = msg.author.username

    if (msg.content === 'this bot is stupid') {
        msg.channel.send(`go fuck yourself ${username}`)
    }
});


// RESPONSE FOR USERNAME REQUEST

bot.on('message', msg => {
    const args = msg.content.slice(prefix.length).split(/ +/);
    const user = msg.author;

    console.log(user.username);
    if (msg.content === 'who am i?') {
        msg.channel.send(user.username);
    }
})


// RESPONSE FOR "!roll" 
bot.on('message', msg => {
    if (msg.content === '!roll') {
        let rollNum = Math.floor(Math.random() * 101);
        msg.reply(rollNum);
    }
});

bot.login(auth.token);