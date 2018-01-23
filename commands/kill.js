const config = require('../config.json');

exports.run = function(client, message, args){
  let role = message.guild.roles.find('name', config.deathRole);
  if (!args[0]) {
    if (message.member.roles.has(role.id)) {
      message.channel.sendMessage(`${message.member} is already dead.`);
    } else {
      message.member.addRole(role);
      message.channel.sendMessage(`${message.member} has been killed and sent to hell!`);
    }
  } else {
    let mention = message.mentions.users.first();
    if (mention && !mention.bot) {
      let member = message.guild.member(mention);
      member.addRole(role);
      message.channel.sendMessage(`${member.user.toString()} has been killed and sent to hell!`);
    } else {
      message.channel.sendMessage('Cannot kill user. Either a group mention, a bot, or user does not exist');
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'kill',
  description: 'Kill a player and send them to hell',
  usage: 'kill <mention user>'
};
