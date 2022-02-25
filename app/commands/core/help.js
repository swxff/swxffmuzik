const { MessageEmbed, MessageButton, MessageActionRow  } = require('discord.js');
let prefix = process.env.prefix
module.exports = {
    name: 'help',
    aliases: ['h',"yardım","y"],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
      
      const yt = new MessageButton().setLabel('Beni Sunucuna Rollü Ekle!').setStyle('LINK').setURL('https://discord.com/oauth2/authorize?client_id=933838376237420654&scope=bot&permissions=8');
        const dc = new MessageButton().setLabel('Beni Sunucuna Rolsüz Ekle!').setStyle('LINK').setURL('https://discord.com/oauth2/authorize?client_id=933838376237420654&scope=bot&permissions=274914610432');
  const row = new MessageActionRow().addComponents(dc, yt)
        const embed = new MessageEmbed();

        embed.setColor('RED');
      embed.setTitle("Yardım Menüsü \n \n \n")
        .setDescription(`
▬▬▬▬▬▬▬▬ \`\`\📣 Bilgilendirme 📣\`\`\ ▬▬▬▬▬▬▬▬
<:Spotify:941886102967558164> \**| Spotify Desteği Bulunmakta.**
**:hammer: | Prefixim : ${prefix}**
▬▬▬▬▬▬▬▬ \`\`\🤖 Ana Komutlar 1/3 🤖\`\`\ ▬▬▬▬▬▬▬▬
:white_small_square:\`!play\` ** - Link veya isimle şarkı veya video açmanızı sağlar.**
:white_small_square:\`!stop\` ** - Dinlediğiniz şarkıyı kapatabilir ve kuyruğu silebilirsiniz.**
:white_small_square:\`!skip\` ** - Dinlediğiniz şarkıyı geçebilirsiniz.**
:white_small_square:\`!back\` ** - Bir önceki şarkıyı çalar.**
:white_small_square:\`!pause\` ** - Çalan müziği ya da listeyi durdurabilirsiniz.**
:white_small_square:\`!resume\` ** - Durdurulan müzik veya listeyi devam ettirebilirsiniz.**
▬▬▬▬▬▬▬▬ \`\`\💥 Kişisel Komutlar 2/3 💥\`\`\ ▬▬▬▬▬▬▬
:white_small_square:\`!queue\` ** - Dinlemek için eklediğiniz şarkı listesini görebilirsiniz.**
:white_small_square:\`!song\` ** - Çalan müziğin adını öğrenebilirsiniz.**
:white_small_square:\`!loop\` ** - Dinlediğiniz şarkı veya listeyi döngüye alabilirsiniz.**
:white_small_square:\`!save\` ** - Şarkıyı kaydedersiniz ve bot dm'den gönderir.**
:white_small_square:\`!fitre\` ** - Şarkıya filtre eklenir. (bass boost, 8D, nightcore)**
▬▬▬▬▬▬▬▬ \`\`\🎯 Yan Komutlar 3/3 🎯\`\`\ ▬▬▬▬▬▬▬▬
:white_small_square:\`!search\` ** - Şarkı aramak için kullanabilirsiniz.**
:white_small_square:\`!time\` ** - Çalan şarkının dakikasını, kalanı dakikayı gösterir.**
:white_small_square:\`!volume\` ** - Botun ses seviyesini ayarlayabilirsiniz. (0 - 250)**
:white_small_square:\`!ping\` ** - Botun pingini öğrenebilirsiniz.**
:white_small_square:\`!clear\` ** - Şarkı kuyruğunu temizlersiniz.**
▬▬▬▬▬▬▬▬ \`\`\🎶Lonely Music 🎶\`\`\ ▬▬▬▬▬▬▬▬
`)
      .setImage("https://cdn.discordapp.com/attachments/933845017167020092/941881345737646150/standard.gif")
 
        embed.setTimestamp();
        embed.setFooter('Lonely Music Bot - Yardım Menüsü', message.author.avatarURL({ dynamic: true }));

  message.channel.send({embeds: [embed], components:[row]})
    },
};
