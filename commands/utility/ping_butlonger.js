const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	cooldown: 10,
	data: new SlashCommandBuilder()
		.setName('ping_distant')
		.setDescription('Replies with Pong but you know, it takes time!'),
	async execute(interaction) {
		await interaction.deferReply();
		await wait(10_000);
		await interaction.editReply('Pong! (finally)');
		// starting from here is the edit functionality demonstration.
	},
};