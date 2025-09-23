/**
 * @file commands/handlers/export.js
 * @brief Handles the /export command.
 *        Allows administrators to export all server messages and configuration as a JSON file.
 */

const { loadJSON } = require('../../utils/files');
const { styledEmbed } = require('../../utils/helpers');
const { getServerConfigFile } = require('../../utils/paths');
const { DEFAULT_THRESHOLD } = require('../../config');

/**
 * Export server messages and configuration.
 * @param {import('discord.js').CommandInteraction} interaction - The Discord interaction object
 * @param {string} filePath - Path to the server's messages JSON file
 */
module.exports = async (interaction, filePath) => {
    // Check if the user has administrator permissions
    if (!interaction.member.permissions.has('Administrator')) {
        return interaction.reply({
            embeds: [styledEmbed("Error", "You must be an administrator to export data.")]
        });
    }

    // Load server messages
    const messages = loadJSON(filePath);

    // Load server configuration, fallback to default threshold if missing
    const config = loadJSON(getServerConfigFile(interaction.guildId), { threshold: DEFAULT_THRESHOLD });

    // Prepare export data
    const exportData = { messages, config };

    // Send JSON export as a file attachment with confirmation embed
    await interaction.reply({
        embeds: [styledEmbed("Export Data", "JSON output attached below")],
        files: [
            {
                attachment: Buffer.from(JSON.stringify(exportData, null, 2)),
                name: `server-${interaction.guildId}-export.json`
            }
        ]
    });
};
