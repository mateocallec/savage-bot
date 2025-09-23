/**
 * @file commands/handlers/threshold.js
 * @brief Handles the /threshold command.
 *        Allows administrators to view or set the server-specific message threshold.
 */

const { loadJSON, saveJSON } = require('../../utils/files');
const { styledEmbed } = require('../../utils/helpers');
const { getServerConfigFile } = require('../../utils/paths');
const { DEFAULT_THRESHOLD } = require('../../config');

/**
 * View or update the message threshold for a server.
 * @param {import('discord.js').CommandInteraction} interaction - The Discord interaction object
 */
module.exports = async (interaction) => {
    // Check if the user has administrator permissions
    if (!interaction.member.permissions.has('Administrator')) {
        return interaction.reply({
            embeds: [styledEmbed("Error", "You must be an administrator to set the threshold.")]
        });
    }

    // Get the optional threshold value from command options
    const value = interaction.options.getInteger('value');

    // Load server configuration, falling back to default threshold
    const configFile = getServerConfigFile(interaction.guildId);
    const config = loadJSON(configFile, { threshold: DEFAULT_THRESHOLD });

    // If a new value is provided and valid, update and save
    if (value && value > 0) {
        config.threshold = value;
        saveJSON(configFile, config);
        return interaction.reply({
            embeds: [styledEmbed("Threshold Updated", `Server threshold is now set to ${value} messages.`)]
        });
    }

    // Otherwise, show the current threshold
    await interaction.reply({
        embeds: [styledEmbed(
            "Current Threshold",
            `Server threshold is ${config.threshold ?? DEFAULT_THRESHOLD ?? 100} messages.`
        )]
    });
};
