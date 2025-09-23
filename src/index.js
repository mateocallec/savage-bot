/**
 * @file index.js
 * @brief Main entry point for the Discord bot.
 *        Initializes the client, registers commands, and hooks event listeners.
 */

require('dotenv').config(); // Load environment variables from .env

// ---------------------- Imports ----------------------
const client = require('./client');                      // Discord client instance
const registerCommands = require('./commands/register'); // Slash commands registration
const handleMessage = require('./events/messageCreate'); // Message event handler
const handleInteraction = require('./events/interactionCreate'); // Slash command handler

// ------------------- Event Listeners -------------------

// Listen for new messages and handle automatic replies
client.on('messageCreate', handleMessage);

// Listen for slash command interactions
client.on('interactionCreate', handleInteraction);

// ---------------------- Login ----------------------

// Log in to Discord using the bot token from environment variables
client.login(process.env.TOKEN).catch(err => {
    console.error("Failed to login:", err);
    process.exit(1); // Exit process if login fails
});

// ---------------------- Ready ----------------------

// Once the client is ready, register all slash commands with Discord
client.once('ready', () => registerCommands(client, process.env.TOKEN));
