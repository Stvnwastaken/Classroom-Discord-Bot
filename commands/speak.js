module.exports = {
	name: 'speak',
	description: 'Command to speak throught the bot.',
	execute(message, args){
		if (!args.length || !message.author === 670679216475471887) {
			message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		} else {
			const msg = message.content.split(' ')
			msg.shift()
		  message.channel.send(msg.join(' '));
			message.delete()
	}
}
}