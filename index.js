const Discord = require('discord.js')
const fs = require('fs')
const bot = new Discord.Client()
const token = process.env['DISCORD_TOKEN']

const prefix = 'gc/'

bot.commands = new Discord.Collection()
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
	const command = require(`./commands/${file}`)

	bot.commands.set(command.name, command)
}

bot.once('ready', () => {
	console.log('Classroom Bot now online!')
	const amar = bot.channels.cache.get('920848454882852884')
	amar.send('Classroom Bot now online! <@&925633065009688597>')
	amar.send('Classroom Bot server restarted, updates should appear shortly.')
	const cc = bot.channels.cache.get('918665887312130118')
	cc.send('Classroom Bot now online! <@&918667403196518450>')
	cc.send('Classroom Bot server restarted, updates should appear shortly.')
	const kc = bot.channels.cache.get('887411039552032800')
	kc.send('Classroom Bot now online! <@&927766262015230003>')
	kc.send('Classroom Bot server restarted, updates should appear shortly.')
	bot.user.setActivity('gc/help')
})

bot.on('message', (message) => {
	
	if(!message.content.startsWith(prefix) || message.author.bot) return
	
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase()

	if(command === 'github'){
		bot.commands.get('github').execute(message, args)
	}else if(command === 'help'){
		bot.commands.get('help').execute(message, args, Discord)
	}else if(command === 'speak'){
		bot.commands.get('speak').execute(message, args)
	}else if(command === 'clear'){
		bot.commands.get('clear').execute(message, args)
	}else if(command === 'kick'){
		bot.commands.get('kick').execute(message, args)
	}else if(command === 'ban'){
		bot.commands.get('ban').execute(message,args)
	}
})

bot.login(token)