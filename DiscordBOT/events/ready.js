const Discord = require('discord.js');

module.exports = {
    name: 'ready',
    async execute(client) {
        console.log(":: Bot carregado")
        client.user.setActivity('!comprar')
    }
}