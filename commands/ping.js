module.exports = {
    name: 'ping',
    description: 'To Calculate Bot & API ping',
    execute(message, client, MessageEmbed, Prefix, Icon) {
        message.delete()
        message.channel.send(':hourglass: **Menghitung Ping Dalam 3 Detik...**').then(resultMessage => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp

            setTimeout(function () {
                const embed = new MessageEmbed()
                    .setAuthor('UniversNetwork', client.user.displayAvatarURL({ dynamic: true }), 'https://minecraft-mp.com/server-s272254')
                    .setColor('#15FF02')
                    .setTitle('**Prefix:** `' + Prefix + '`')
                    .setDescription(':clipboard: **Diminta Oleh** <@' + message.author + '>\n\u200B\n\u200B')
                    .addField('🤖 Bot Latency', ping, true)
                    .addField('🌐 WebSocket Latency', client.ws.ping, true)
                    .setFooter('Made By ARVIN3108 ID', Icon)
                resultMessage.edit('', embed)
            }, 3000)
        })
    }
}