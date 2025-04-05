const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	cooldown: 10,
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
		// starting from here is the edit functionality demonstration.
		await wait(2_000);
		await interaction.editReply('No pong no more! (timeouted edited)');
	},
};