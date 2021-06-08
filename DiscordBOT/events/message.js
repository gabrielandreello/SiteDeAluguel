const Discord = require('discord.js');

module.exports = {
    name: 'message',
    async execute(message, client) {
        if (message.author.bot) return;
        //if (message.channel.type == "dm") return;
        const args = message.content.slice(1).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName);

        if (!message.content.startsWith("!")) return;
        if (!client.commands.has(commandName)) return;

        command.execute(message, args, client);
    }
}