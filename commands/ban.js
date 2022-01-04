module.exports = {
	name: 'ban',
	description: 'This is a command to ban someone.',
 execute(messages, args){
	 const member = messages.mentions.users.first()
	 if(member){
		 const memberTargert = messages.guild.members.cache.get(member.id)
		 memberTargetr.ban()
		 messages.channel.send(`${member} has been banned.`)
	 }else{
		 messages.channel.send('You could not ban that member')
	 }
 }
}
