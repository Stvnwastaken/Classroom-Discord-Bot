module.exports = {
	name: 'clear',
	description: 'This is a command to clear a certain amount of messages from a channel.',
	async execute(message, args){
		if(!args[0]) return message.reply('Enter amount of messages that you want to clear!')
		if(isNaN(args[0])) return message.reply('Please enter a real number!')
		if(args[0] > 50 && !message.author === 670679216475471887) return message.reply('You dont have permissions to delete more than 50 messages!')
		if(args[0] > 100) return message.reply('You cant delete more than 100 messages!')
		await message.channel.messages.fetch({limit: args[0]}).then(messages => {
			message.channel.bulkDelete(messages)
		})
	}
}