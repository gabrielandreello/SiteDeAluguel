var nodemailer = require('nodemailer');

function sendEmail(email, nome, telefone, id, message) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sitedealuguel123@gmail.com',
            pass: '123sitedealuguel'
        }
    });

    var mailOptions = {
        from: 'sitedealuguel123@gmail.com',
        to: email,
        subject: `[SiteDeAluguel] Cadastro no sistema`,
        text: `Ola *${nome}*!\nSeu email foi cadastrado em nosso sistema, seja bem-vindo e qualquer duvida chame o suporte via email ou Discord!\nRegistramos seu pedido e logo retornaremos com um email, caso precisemos de mais informações iremos informa-lo, e o preço.\nInformações cadastradas:\nTelefone: ${telefone}\nDiscord ID: ${id}`
    };

    message.author.send("📡**|** Tudo certo!\nAguarde um **momentinho** enquanto envio um **e-mail** para voce...").then(msg => {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                msg.edit(":x:**|** Ops, ocorreu um erro ao enviar para voce, verifique se digitou corretamente as informacoes.")
            } else {
                msg.edit("👍**|** Email enviado para voce com \`sucesso\`!")
                //console.log('Email sent: ' + info.response);
            }
        });

    });
}
module.exports = {
    sendEmail
}