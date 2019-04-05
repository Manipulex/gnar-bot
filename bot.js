var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize the bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');

});


bot.on('message', function (user, userID, channelID, message, evt) {
    // Tell bot to execute command
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        var random = Math.floor((Math.random()*(17-0+1))+0);
        var randomT = Math.floor((Math.random()*(2-0+1))+0);
        var G = ['Gnar','Gada','Shadubara','Nahanga','Rishu ba!', 'Shoo shoo pana!','Wap!',
        'Shubbanuffa','Vimaga','Nakotak','Hwa!','Vrooboo','Khshaa!','Wabbo!','Goova','Onna legga','Hursh, rao!','Maga'];
        var T =['Shoo shoo pana! hahahaha!','Heygo Veygo!','Shugi shugi shugi!'];
        var C = ['uwu','owo',':3'];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping test
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            case 'gnarspam':
                bot.sendMessage({
                    to: channelID ,
                    tts: true,
                    message: 'GnarGnarGnarGnarGnarGnarGnarGnarGnarGnar'
                });
            break;
            case 'shugi':
                bot.sendMessage({
                    to: channelID ,
                    tts: true,
                    message: 'ShugiShugiShugiShugiShugiShugiShugiShugiShugi'
                });
            break;
            // Rules/info
            case 'info':
                bot.sendMessage({
                    to: channelID,
                    message: 'My functions are: gnar, cute, Joke, Taunt and Dance! More to be added soon!'
                });
            break;
            // Do something cute!
            case 'cute':
                bot.sendMessage({
                    to: channelID,
                    message: C[randomT]
                });
            break;
            // Gnar!!
            case 'gnar':
                bot.sendMessage({
                    to: channelID,
                    message: 'Gnar!'
                });
            break;
            // Tell something random gnar!
            case 'Joke':
                bot.sendMessage({
                    to: channelID,
                    message: G[random]
                });
            break;
            // Taunt!
            case 'Taunt':
                bot.sendMessage({
                    to: channelID,
                    message: T[randomT]
                });
            break;
            // Dance routine 
            case 'Dance':
                bot.sendMessage({
                    to: channelID,
                    message: 'Hwa!',
                    
                });
                bot.sendMessage({
                    to: channelID,
                    message: 'Waaaaa!',
                });
                bot.sendMessage({
                    to: channelID,
                    message: 'woo ho bera bera wooooh!',
                });
                bot.sendMessage({
                    to: channelID,
                    message: 'woo ho bera bera waaaaaah!',
                });
                bot.sendMessage({
                    to: channelID,
                    message: 'wa ha bara bara waaaaah!',
                });
                bot.sendMessage({
                    to: channelID,
                    message: 'wooh hoo bera bera weeeeh!',
                });
                bot.sendMessage({
                    to: channelID,
                    message: 'Gnar!!! Wahaaha!'
                });
            break;
         }
     }
});

client.login(process.env.'2RjptFfRoci5jbkZCJzyg4JiiOz-CfQM');//BOT_TOKEN is the Client Secret

