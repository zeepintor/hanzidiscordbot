const { ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js');

// https://www.npmjs.com/package/hanzi-tools
const pinyin = require('hanzi-tools').pinyinify;

const data = new ContextMenuCommandBuilder()
    .setName('Pinyin')
    .setType(ApplicationCommandType.Message);

module.exports = {
    data: data,
    async execute(interaction) {

        await interaction.reply({ content:`Original: ${interaction.targetMessage.content}\n Pinyin: ${pinyin(interaction.targetMessage.content)}`, ephemeral: true });

        console.log(`trying pinyin for ${interaction.targetMessage.content}`);
        console.log(`Pinyin: ${pinyin(interaction.targetMessage.content)}`);
    },
};