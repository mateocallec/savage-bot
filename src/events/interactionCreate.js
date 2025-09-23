/**
 * @file events/interactionCreate.js
 * @brief Handles slash command interactions for the Discord bot.
 *        Dispatches the command to the appropriate handler from commandsMap.
 */

const { getServerFile } = require('../utils/paths');
const commandsMap = require('../commands/commands');

/**
 * Handle incoming slash command interactions.
 * @param {import('discord.js').Interaction} interaction - The Discord interaction object
 */
const handleInteraction = async (interaction) => {
    // Only handle chat input commands (slash commands)
    if (!interaction.isChatInputCommand()) return;

    // Get the server-specific messages file path
    const filePath = getServerFile(interaction.guildId);

    // Look up the command handler from commandsMap
    const handler = commandsMap[interaction.commandName];

    // Execute the handler if it exists
    if (handler) {
        try {
            await handler(interaction, filePath);
        } catch (err) {
            console.error(`Error executing command ${interaction.commandName}:`, err);
            await interaction.reply({ content: 'An error occurred while executing this command.', ephemeral: true });
        }
    }
};

// ---------------------- Export ----------------------
module.exports = handleInteraction;
