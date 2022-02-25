module.exports = {
    name: 'time',
    aliases: ["süre"],
    utilisation: '{prefix}time',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Şuanda çalan bir müzik yok!. ❌`);

        const time = queue.createProgressBar();
        const timestamp = queue.getPlayerTimestamp();

        if (timestamp.time == 'Infinity') return message.channel.send(`Bu şarkı canlı yayınlanıyor, görüntülenecek süre verisi yok. 🎧`);

        message.channel.send(`${time} (**${timestamp.time}**%)`);
    },
};