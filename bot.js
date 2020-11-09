console.log("wait for it");
const Discord = require('discord.js');
const client = new Discord.Client();
client.login('Nzc1NDE4MjE1ODUyNDA4ODQy.X6mCfQ.XE8iObxmBRS_INH571SqPQBXdm4');

client.on('ready',readyDiscord);
client.on("message", gotMessage);

function readyDiscord() {
    console.log(" <3 ");
}

function gotMessage(msg) {
    if (msg.content === "who is noob ?") {
        if(msg.author.username === "d_ayreamer") {
            msg.reply("you are noob");
        }
        else{
            msg.reply(" @XeroX is noob !!!");
        }
    }
}