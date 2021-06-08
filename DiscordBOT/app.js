console.log("\n:: Carregando bot...")
const Discord = require('discord.js');

const client = new Discord.Client(({disableEveryone: false}));
const fs = require('fs');


client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./comandos/${file}`)
    client.commands.set(command.name, command);
}


for (const file of eventFiles){
    const event = require(`./events/${file}`);
    if (event.once){
        client.once(event.name, (...args) => event.execute(...args, client));
    } else {
        client.on(event.name, (...args) => event.execute(...args, client));
    }
}

client.login("Token");