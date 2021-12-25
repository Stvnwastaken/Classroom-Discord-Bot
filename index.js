const Discord = require('discord.js')
const bot = new Discord.Client()
const token = process.env['DISCORD_TOKEN']

const prefix = 'gc/'

bot.once('ready', () => {
	console.log('Classroom Bot now online!')
	message.channel.send('Classroom Bot now online!')
})

bot.on('message', (message) => {
	if(!message.content.startsWith(prefix) || message.author.bot) return
	
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase()

	if(command === 'github'){
		message.channel.send('https://github.com/LightLordYT/Classroom-Discord-Bot')
	}else if(command === 'help'){
		message.channel.send('List of commands:')
	}
})

bot.login(token)