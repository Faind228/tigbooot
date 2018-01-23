exports.run = function(client, message, args){
  message.channel.sendMessage('pong!');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Pong',
  usage: 'ping'
};
