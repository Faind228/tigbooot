exports.run = function(client, message, args){
  const user = message.mentions.users.first();
  const amount = isNaN(args[0]) ? parseInt(args[1]) : parseInt(args[0]);
  if (!amount && !user) {
    return message.reply('Must specify a user and ammount, or just an ammount of message to purge.')
  }
  if (amount > 100) {
    return message.reply('Must specify ammount lesser then 100')
  }
  if (!amount) {
    return message.reply('Must specify ammount of messages to purge.')
  }
  if (!amount > 100) {
    return message.reply('Must specify ammount of messages to purge.')
  }
  message.channel.fetchMessages({
    limit: amount,
  }).then((messages) => {
    if (user) {
      const filterBy = user ? user.id : client.user.id;
      messages = messages.filter(m => m.author.id == filterBy).array().slice(0, ammount);
    }
    message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'purge',
  description: 'Deletes a given number of messages or a given number of messages of a mentioned user',
  usage: 'purge [user] <number>'
};
