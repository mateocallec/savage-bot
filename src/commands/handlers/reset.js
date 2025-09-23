/**
 * @file commands/handlers/reset.js
 * @brief Handles the /reset command.
 *        Allows administrators to delete all server-specific messages.
 */

const { loadJSON, saveJSON } = require('../../utils/files');
const { styledEmbed } = require('../../utils/helpers');

/**
 * Reset all server messages by clearing the messages JSON file.
 * @param {import('discord.js').CommandInteraction} interaction - The Discord interaction object
 * @param {string} filePath - Path to the server's messages JSON file
 */
module.exports = async (interaction, filePath) => {
    // Check if the user has administrator permissions
    if (!interaction.member.permissions.has('Administrator')) {
        return interaction.reply({
            embeds: [styledEmbed("Error", "You must be an administrator to reset messages.")]
        });
    }

    // Clear the messages file
    saveJSON(filePath, []);

    // Send confirmation embed
    await interaction.reply({
        embeds: [styledEmbed("Messages Reset", "All messages have been deleted.")]
    });
};
