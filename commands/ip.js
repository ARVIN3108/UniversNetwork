module.exports = {
    name: 'ip',
    description: 'This is a ip command',
    execute(message, args) {
        message.delete().then(message.channel.send('**IP: play.universnetwork.xyz**'))
    }
}