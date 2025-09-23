/**
 * @file commands/handlers/addmessage.js
 * @brief Handles the /addmessage command.
 *        Allows administrators to add a new server-specific message (up to MESSAGE_LIMIT).
 */

const { loadJSON, saveJSON } = require('../../utils/files');
const { styledEmbed } = require('../../utils/helpers');
const { MESSAGE_LIMIT } = require('../../config');

/**
 * Add a new message for the server.
 * @param {import('discord.js').CommandInteraction} interaction - The interaction object from Discord
 * @param {string} filePath - Path to the server's messages JSON file
 */
module.exports = async (interaction, filePath) => {
    // Check if the user has administrator permissions
    if (!interaction.member.permissions.has('Administrator')) {
        return interaction.reply({
            embeds: [styledEmbed("Error", "You must be an administrator to add messages.")]
        });
    }

    // Get the message string from command options
    const message = interaction.options.getString('message');

    // Load existing messages from the server file
    const messages = loadJSON(filePath);

    // Check if the server has reached the message limit
    if (messages.length >= MESSAGE_LIMIT) {
        return interaction.reply({
            embeds: [styledEmbed("Limit Reached", `Max ${MESSAGE_LIMIT} messages per server.`)]
        });
    }

    // Add the new message and save to file
    messages.push(message);
    saveJSON(filePath, messages);

    // Respond with confirmation and message ID
    await interaction.reply({
        embeds: [styledEmbed(
            "Message Added",
            `**ID:** \`${messages.length - 1}\`\n**Content:** ${message}`
        )]
    });
};
