/**
 * @file client.js
 * @brief Initializes and configures the Discord client.
 *        Sets up intents, presence, and ready event logging.
 */

const { Client, GatewayIntentBits } = require('discord.js');
const { BOT_ACTIVITY } = require('./config'); // Import bot activity from config

// ---------------------- Client Initialization ----------------------

// Create a new Discord client instance with required intents
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,          // Access to guild (server) info
        GatewayIntentBits.GuildMessages,   // Listen to guild messages
        GatewayIntentBits.MessageContent   // Access the content of messages
    ]
});

// ---------------------- Ready Event ----------------------

// Fires when the bot successfully connects and is ready
client.once('ready', () => {
    console.log(`Connected as ${client.user.tag}`);

    // Set bot presence/activity
    client.user.setPresence({
        activities: [{ name: BOT_ACTIVITY }], // e.g., "Watching messages"
        status: "online"                       // Online status
    });
});

// ---------------------- Export Client ----------------------
module.exports = client;
