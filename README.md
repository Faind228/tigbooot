# BitBot
A Discord Bot

Install the correct packages with:
```
npm install
```
Modify the example.config.json file with your prefered settings. Save as config.json.

### deathRole
This is the role you want to set when someone dies when using he russian roulette comamnd.

### modrole
The role of your moderators

### adminrole
The role of your admins

### ownerid
The ID of the owner of the server, or the persion you want to have the highest permissions.

Rename example.stats.json to stats.json

Run with:
```
node bot.js
```


## Permissions
Each command has a permission level. (some of the below options are not implemented yet. Enabled does not work and neither does guildOnly)

```
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
```

0    -    Anyone can use the command.
2    -    Moderator and higher can use the command.
3    -    Admin and higher can use the command.
4    -    Owner / highest permission user can use this command.

All these levels can be changed by editing the ```bot.js``` file:

```
client.elevation = message => {
  let permlvl = 0;
  let mod_role = message.guild.roles.find('name', config.modrole);
  if (mod_role && message.member.roles.has(mod_role.id)) permlvl = 2;
  let admin_role = message.guild.roles.find('name', config.adminrole);
  if (admin_role && message.member.roles.has(admin_role.id)) permlvl = 3;
  if (message.author.id === config.ownerid) permlvl = 4;
  return permlvl;
};
```
