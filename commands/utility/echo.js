const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data : new SlashCommandBuilder()
		.setName('echo')
		.setDescription('Replies with your input!')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('The input to echo back'))
		.addChannelOption(option =>
			option.setName('channel')
				.setDescription('The channel to echo into'))
		.addBooleanOption(option =>
			option.setName('ephemeral')
				.setDescription('Whether or not the echo should be ephemeral')),
	async execute(interaction) {
		// see the parsing options section
		const input_str = interaction.options.getString('input');
		await interaction.reply(input_str);
	},
};