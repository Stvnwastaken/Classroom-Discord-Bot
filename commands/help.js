module.exports = {
	name: 'help',
	description: 'A command that lists all commands.',
	execute(message, args, Discord){
	const helpEmbed = new Discord.MessageEmbed()
			.setColor('#050065')
			.setTitle('Classroom Bot Help')
			.setAuthor('LightLord', 'https://imgur.com/NwVw9vM.png', 'https://github.com/LightLordYT')
			.setURL('https://github.com/LightLordYT/Classroom-Discord-Bot')
			.setThumbnail('https://imgur.com/A5Kn9tm.png')
			.setDescription('Help command to help with client usage of the bot.')
			.addFields(
			{ name: 'All Commands', value: 'github, help, speak, clear, kick, ban' },
			{ name: 'Contact', value: 'Lightlord#4261' },
			{ name: 'Website', value: 'Currently Unavailable' },
			{ name: 'Discord', value: 'Currently Unavailable' },
			)	
			.addField('Github', 'https://github.com/LightLordYT/Classroom-Discord-Bot', true)
			.setImage('https://imgur.com/A5Kn9tm.png')
			.setTimestamp()
			.setFooter('Classroom Bot created by LightLord#4261', 'https://imgur.com/NwVw9vM.png');
if(!args[0]){
	message.channel.send(helpEmbed)
}

	if(args[0] === 'github') return message.reply('Usage: gc/github')
	if(args[0] === 'speak') return message.reply('Usage: gc/speak arguments')
	if(args[0] === 'clear') return message.reply('Usage: gc/clear amount')
	if(args[0] === 'kick') return message.reply('Usage: gc/kick member')
	if(args[0] === 'ban') return message.reply('Usage: gc/ban member')
	}
}