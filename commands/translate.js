const { ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js');

// https://www.npmjs.com/package/google-translate-api
const { translate } = require('bing-translate-api');

const data = new ContextMenuCommandBuilder()
    .setName('Translate')
    .setType(ApplicationCommandType.Message);

module.exports = {
    data: data,
    async execute(interaction) {

        const message = interaction.targetMessage.content;
        const translation = (await translate(message, null, 'en')).translation;
        await interaction.reply({ content:`Original: ${message}\n Translation to english: ${translation}`, ephemeral: true });

        console.log(`trying translate ${message}`);
        console.log(`translation: ${translation}`);
    },
};