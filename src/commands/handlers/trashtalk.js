/**
 * @file commands/handlers/trashtalk.js
 * @brief Handles the /trashtalk command.
 *        Sends a random trash-talk message to a specified user.
 */

const { loadJSON } = require('../../utils/files');
const { pickRandom } = require('../../utils/helpers');

/**
 * Send a trash-talk message to a target user.
 * @param {import('discord.js').CommandInteraction} interaction - The Discord interaction object
 * @param {string} filePath - Path to the server's messages JSON file
 */
module.exports = async (interaction, filePath) => {
    // Get the target user from command options
    const targetUser = interaction.options.getUser('target');

    // Load server messages
    const responses = loadJSON(filePath);

    // If no messages exist, inform the user
    if (!responses.length) {
        return interaction.reply("No messages available for this server.");
    }

    // Pick a random response
    let response = pickRandom(responses);

    // Replace {user} placeholder with the target user's display name
    if (response.includes("{user}")) {
        const displayName = interaction.guild.members.cache.get(targetUser.id)?.displayName || targetUser.username;
        response = response.replace(/{user}/g, displayName);
    }

    // Send the response tagging the target user
    await interaction.reply({ content: `${targetUser} ${response}` });
};
