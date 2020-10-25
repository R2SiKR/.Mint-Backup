const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')
const BotName = "MintVillageBot";
const prefix = "민트야 ";
const fs = require('fs');

client.on("ready", () => {
    console.log(BotName + "봇 작동");
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcom');
    if (!channel) return;
    channel.send(`민트 빌리지에 오신걸 환영합니다, ${member}`);
});

client.on('message', (message) => {
    if (message.content === (prefix + '채널')) {
        const embed = new Discord.MessageEmbed()
            .setColor('90EE90')
            .setTitle('민트초 채널')
            .setDescription('ㅣ민트초ㅣ: https://www.twitch.tv/mintsaessag\n' + ' 럭LUK: https://www.youtube.com/channel/UCc_AJe8AK1TkEIXXXOaVk3A?view')
            .setFooter(message.guild.name)
        message.channel.send(embed);
    }
    if (message.content === (prefix + '상태')) {
        const embed = new Discord.MessageEmbed()
            .setColor('90EE90')
            .setTitle(BotName + '상태')
            .setDescription(client.ws.ping + 'ms')
            .setFooter(message.guild.name)
        message.channel.send(embed);
    }
});



client.login(heroku.token)
