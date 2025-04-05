const { SlashCommandBuilder, MessageFlags } = require('discord.js');

module.exports = {
	cooldown: 10,
	data: new SlashCommandBuilder()
		.setName('secret_ping')
		.setDescription('Replies with Pong, but only the one who asked can see!'),
	async execute(interaction) {
		await interaction.reply({ content: 'Secret Pong!', flags: MessageFlags.Ephemeral });
	},
};