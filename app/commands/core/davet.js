const { MessageEmbed, MessageButton, MessageActionRow  } = require('discord.js');

module.exports = {
    name: 'davet',
    aliases: ['d',"invite","inv"],
    showHelp: false,
    utilisation: '{prefix}davet',

    execute(client, message, args) {
      
      const yt = new MessageButton().setLabel('Beni Sunucuna Rollü Ekle!').setStyle('LINK').setURL('https://discord.com/oauth2/authorize?client_id=933838376237420654&scope=bot&permissions=8');
        const dc = new MessageButton().setLabel('Beni Sunucuna Rolsüz Ekle!').setStyle('LINK').setURL('https://discord.com/oauth2/authorize?client_id=933838376237420654&scope=bot&permissions=274914610432');
  const row = new MessageActionRow().addComponents(dc, yt)
        const embed = new MessageEmbed();

        embed.setColor('RED');
      embed.setTitle("Yardım Menüsü \n \n \n")
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png')
.setDescription(`>>> ${client.user} kullanırken oluşan bugları \`!bug-bildir\` yoluyla iletebilirsiniz.

**Rollü Davet İçin:** [Buraya tıkla](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)
\`\`\`discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8\`\`\`

**Rolsüz Davet İçin:** [Buraya tıkla](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=0)
\`\`\`discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=0\`\`\`
`)
      .setImage("https://cdn.discordapp.com/attachments/933845017167020092/941881345737646150/standard.gif")
 
        embed.setTimestamp();
        embed.setFooter('Lonely Music Bot - Yardım Menüsü', message.author.avatarURL({ dynamic: true }));

  message.channel.send({embeds: [embed], components:[row]})
    },
};