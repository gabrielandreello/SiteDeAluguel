const sender = require('../sendemail');
const Discord = require('discord.js');

module.exports = {
    name: 'comprar',
    async execute(message, args, client) {
        if (message.channel.type == "dm") return;
        const emailEmbed = new Discord.MessageEmbed()
            .setTitle('Cadastro')
            .setDescription(`Vamos comecar! Responda as questoes abaixo:\n\n \`\`\`Qual seu email?\`\`\``)
            .setColor('RANDOM')
            .setFooter('[C] SiteDeAluguel')
            .setTimestamp();

        const telefoneEmbed = new Discord.MessageEmbed()
            .setTitle('Cadastro')
            .setDescription(`\n\n \`\`\`Qual seu telefone?\`\`\``)
            .setColor('RANDOM')
            .setFooter('[C] SiteDeAluguel')
            .setTimestamp();

        const nomeEmbed = new Discord.MessageEmbed()
            .setTitle('Cadastro')
            .setDescription(`\`\`\`Qual seu nome?\`\`\``)
            .setColor('RANDOM')
            .setFooter('[C] SiteDeAluguel')
            .setTimestamp();

        const sayEmbed = new Discord.MessageEmbed()
            .setTitle('Cadastro')
            .setDescription(`\`\`\`O que devemos saber sobre seu futuro site?\`\`\``)
            .setColor('RANDOM')
            .setFooter('[C] SiteDeAluguel')
            .setTimestamp();


        const filter = m => m.author.id == message.author.id;
        message.channel.send("👍**|** Perguntas enviads na sua \`dm\`.")
        await message.author.send(emailEmbed).then((eb) => {
            message.author.dmChannel.awaitMessages(filter, {
                max: 1
            })
                .then(collected => {
                    const email = collected.first().content;
                    message.author.send(telefoneEmbed).then((te) => {
                        message.author.dmChannel.awaitMessages(filter, {
                            max: 1
                        })
                            .then(collected => {
                                const telefone = collected.first().content
                                message.author.send(nomeEmbed).then((ne) => {
                                    message.author.dmChannel.awaitMessages(filter, {
                                        max: 1
                                    }).then(collected => {
                                        const nome = collected.first().content;
                                        message.author.send(sayEmbed).then((se) => {
                                            message.author.dmChannel.awaitMessages(filter, {
                                                max: 1
                                            }).then(collected => {
                                                ne.delete();
                                                te.delete();
                                                eb.delete();
                                                se.delete();
                                                return sender.sendEmail(email, nome, telefone, message.author.id, message);
                                            });
                                        })
                                    })
                                });

                            })
                    });
                })
        });
    },
}