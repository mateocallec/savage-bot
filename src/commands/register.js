/**
 * @file commands/register.js
 * @brief Registers all slash commands with Discord using the REST API.
 *        Sets up command names, descriptions, and options for the bot.
 */

const { REST, Routes, SlashCommandBuilder } = require('discord.js');

/**
 * Register slash commands with Discord for the bot.
 * @param {import('discord.js').Client} client - The Discord client instance
 * @param {string} token - The bot token used for REST API authentication
 */
const registerCommands = async (client, token) => {
    // Initialize REST client with bot token
    const rest = new REST({ version: '10' }).setToken(token);

    // ---------------------- Define Commands ----------------------
    const commands = [
        new SlashCommandBuilder()
            .setName('trashtalk')
            .setDescription('Send a trash-talk message to a user')
            .addUserOption(opt => 
                opt.setName('target')
                   .setDescription('User to trashtalk')
                   .setRequired(true)
            ),

        new SlashCommandBuilder()
            .setName('addmessage')
            .setDescription('Add a new message (admin only, max 100)')
            .addStringOption(opt =>
                opt.setName('message')
                   .setDescription('Message to add')
                   .setRequired(true)
            ),

        new SlashCommandBuilder()
            .setName('listmessages')
            .setDescription('List all server messages'),

        new SlashCommandBuilder()
            .setName('reset')
            .setDescription('Delete all messages (admin only)'),

        new SlashCommandBuilder()
            .setName('deletemessage')
            .setDescription('Delete message by ID (admin only)')
            .addIntegerOption(opt =>
                opt.setName('id')
                   .setDescription('Message ID')
                   .setRequired(true)
            ),

        new SlashCommandBuilder()
            .setName('threshold')
            .setDescription('Set or view server message threshold (admin only)')
            .addIntegerOption(opt =>
                opt.setName('value')
                   .setDescription('Threshold value')
            ),

        new SlashCommandBuilder()
            .setName('export')
            .setDescription('Export messages and config as JSON'),

        new SlashCommandBuilder()
            .setName('info')
            .setDescription('Show bot info, GitHub, terms and privacy')
    ];

    // ---------------------- Register Commands ----------------------
    try {
        await rest.put(
            Routes.applicationCommands(client.user.id),
            { body: commands.map(c => c.toJSON()) }
        );
        console.log('Slash commands successfully registered.');
    } catch (err) {
        console.error('Failed to register commands:', err);
    }
};

// ---------------------- Export ----------------------
module.exports = registerCommands;
