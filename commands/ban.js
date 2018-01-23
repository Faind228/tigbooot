const Discord = require("discord.js")
exports.run = function(client, message, args){
    var embed = new Discord.RichEmbed()
    .setTitle("Denied Acess :x:")
    .setColor(0xff3200)
    .setThumbnail("http://i0.kym-cdn.com/photos/images/newsfeed/001/234/765/971.gif")
    .addField("You are not permitted to use this command...", "If you do have the permission `BAN_MEMBERS` please contact the bot creators")
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send({ emebd: embed });
        const {RichEmbed} = require('discord.js');
        exports.run = async (client, message, args) => {
          const user = message.mentions.users.first();
          const modlog = client.channels.find('name', 'mod-log');
          const reason = args.splice(1, args.length).join(' ') || `Not specified`;
          if (message.mentions.users.size < 1) return message.reply('You must mention someone to ban them.').catch(console.error);
          message.guild.ban(user, 2);
        

          const embed = new RichEmbed()
          .setColor(0x00AE86)
          .setTimestamp()
          .setDescription(`**Action:** Ban\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`)
          if (!modlog)  return message.channel.send({embed});
          return client.channels.get(modlog.id).send({embed});
        };
        
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4
  };
  
  exports.help = {
    name: 'ban',
    description: 'Bans people',
    usage: 'ban [user] <reason>'
  };
  