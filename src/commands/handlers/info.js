/**
 * @file commands/handlers/info.js
 * @brief Handles the /info command.
 *        Provides bot information including GitHub link, terms of use, and privacy policy.
 */

const { loadJSON } = require('../../utils/files');
const { styledEmbed } = require('../../utils/helpers');
const { getServerConfigFile } = require('../../utils/paths');
const { DEFAULT_TERMS_URI, DEFAULT_PRIVACY_URI } = require('../../config');

/**
 * Show bot information, including GitHub, terms, and privacy policy.
 * @param {import('discord.js').CommandInteraction} interaction - The Discord interaction object
 */
module.exports = async (interaction) => {
    // Load server-specific configuration (if available)
    const config = loadJSON(getServerConfigFile(interaction.guildId), {});

    // Determine URIs: environment variable > server config > fallback default
    const termsURI = DEFAULT_TERMS_URI ?? config.terms ?? "https://yourwebsite.com/terms";
    const privacyURI = DEFAULT_PRIVACY_URI ?? config.privacy ?? "https://yourwebsite.com/privacy";

    // Prepare description with links
    const description = `
**GitHub:** [Your GitHub](https://github.com/yourusername)
**Terms of Use:** [Terms](${termsURI})
**Privacy Policy:** [Privacy](${privacyURI})
`;

    // Send embed with bot information
    await interaction.reply({ embeds: [styledEmbed("Bot Info", description)] });
};
