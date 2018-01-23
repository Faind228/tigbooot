const Discord = require("discord.js")
exports.run = (client, message, args) => {
    return message.reply("**__IN DEVELOPMENT__**")
    const Discord = require("discord.js")
    var embed = new Discord.RichEmbed()
    .setTitle("Denied Acess :x:")
    .setColor(0xff3200)
    .setThumbnail("http://i0.kym-cdn.com/photos/images/newsfeed/001/234/765/971.gif")
    .addField("You are not permitted to use this command...", "If you do have the permission `BAN_MEMBERS` please contact the bot creators")
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send({ emebd: embed });
        const reason = args.splice(1, args.length).join(' ') || `Not specified`;
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  const user = args[0];
  const modlog = client.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('I cannot find a mod-log channel');
  if (reason.length < 1) return message.reply('You must supply a reason for the unban.');
  if (!user) return message.reply('You must supply a User Resolvable, such as a user id.').catch(console.error);
  message.guild.unban(user);
  
  const ikr = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .setDescription(`**Action:** UnBan\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`)
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
    name: "unban",
    description: 'Unbans ppl.',
    usage: 'unban [banned guy]'
  };
