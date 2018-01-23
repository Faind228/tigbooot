const {RichEmbed} = require('discord.js');
const Discord = require("discord.js")
exports.run = async (client, message, args) => {
    var embed = new Discord.RichEmbed()
    .setTitle("Denied Acess :x:")
    .setColor(0xff3200)
    .setThumbnail("http://i0.kym-cdn.com/photos/images/newsfeed/001/234/765/971.gif")
    .addField("You are not permitted to use this command...", "If you do have the permission `KICK_MEMBERS` please contact the bot creators")
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send({ emebd: embed });
  const user = message.mentions.users.first();
  const modlog = client.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('I cannot find a mod-log channel');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to kick them.').catch(console.error);

 message.guild.member(user).kick();

  const reason = args.splice(1, args.length).join(' ') || `Not specified`;
  const ikr = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .setDescription(`**Action:** KICK\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`)
  if (!modlog)  return client.channels.get(modlog.id).send({ikr});
  return client.channels.get(modlog.id).send({ikr});
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
  };
  
  exports.help = {
    name: "kick",
    description: 'Kicks bad guy.',
    usage: 'kick [bad guy]'
  };