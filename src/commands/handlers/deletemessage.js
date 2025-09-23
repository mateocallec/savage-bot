/**
 * @file commands/handlers/deletemessage.js
 * @brief Handles the /deletemessage command.
 *        Allows administrators to delete a server-specific message by its ID.
 */

const { loadJSON, saveJSON } = require('../../utils/files');
const { styledEmbed } = require('../../utils/helpers');

/**
 * Delete a message by ID for the server.
 * @param {import('discord.js').CommandInteraction} interaction - The interaction object from Discord
 * @param {string} filePath - Path to the server's messages JSON file
 */
module.exports = async (interaction, filePath) => {
    // Check if the user has administrator permissions
    if (!interaction.member.permissions.has('Administrator')) {
        return interaction.reply({
            embeds: [styledEmbed("Error", "You must be an administrator to delete a message.")]
        });
    }

    // Get the message ID from command options
    const id = interaction.options.getInteger('id');

    // Load existing messages
    const messages = loadJSON(filePath);

    // Validate the ID
    if (id < 0 || id >= messages.length) {
        return interaction.reply({
            embeds: [styledEmbed("Error", "Invalid message ID.")]
        });
    }

    // Remove the message and save changes
    const removed = messages.splice(id, 1);
    saveJSON(filePath, messages);

    // Respond with confirmation
    await interaction.reply({
        embeds: [styledEmbed(
            "Message Deleted",
            `**Deleted message:** ${removed}`
        )]
    });
};
