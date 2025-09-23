/**
 * @file commands/handlers/listmessages.js
 * @brief Handles the /listmessages command.
 *        Lists all server-specific messages in a styled embed.
 */

const { loadJSON } = require('../../utils/files');
const { styledEmbed } = require('../../utils/helpers');

/**
 * List all messages for the server.
 * @param {import('discord.js').CommandInteraction} interaction - The Discord interaction object
 * @param {string} filePath - Path to the server's messages JSON file
 */
module.exports = async (interaction, filePath) => {
    // Load server messages from file
    const messages = loadJSON(filePath);

    // Check if there are any messages
    if (!messages.length) {
        return interaction.reply({
            embeds: [styledEmbed("No Messages", "This server has no messages.")]
        });
    }

    // Format messages as a numbered list
    const list = messages.map((msg, i) => `\`${i}\`: ${msg}`).join('\n');

    // Send the list as an embed
    await interaction.reply({
        embeds: [styledEmbed("Server Messages", list)]
    });
};
