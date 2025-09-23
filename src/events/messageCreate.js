/**
 * @file events/messageCreate.js
 * @brief Handles automatic bot replies when a server message threshold is reached.
 *        Tracks per-server message counts and sends a random response from server messages.
 */

const { loadJSON } = require('../utils/files');
const { pickRandom } = require('../utils/helpers');
const { getServerFile, getServerConfigFile } = require('../utils/paths');
const { DEFAULT_THRESHOLD } = require('../config');

// ---------------------- Message Counters ----------------------
// Keeps track of the number of messages per server (guild)
const messageCounters = {};

/**
 * Handle incoming messages for automatic replies.
 * Increments server message count and replies when threshold is reached.
 * @param {import('discord.js').Message} message - The incoming Discord message
 */
const handleMessage = async (message) => {
    // Ignore messages sent by bots
    if (message.author.bot) return;

    const guildId = message.guild.id;

    // Load the server's message responses
    const responses = loadJSON(getServerFile(guildId));
    if (!responses.length) return; // Nothing to reply with

    // Load server-specific configuration
    const config = loadJSON(getServerConfigFile(guildId), {});
    const threshold = config.threshold ?? DEFAULT_THRESHOLD ?? 100;

    // Increment message counter for this server
    messageCounters[guildId] = (messageCounters[guildId] || 0) + 1;

    // Only reply when threshold is reached
    if (messageCounters[guildId] < threshold) return;
    messageCounters[guildId] = 0; // Reset counter after replying

    // Pick a random response
    let response = pickRandom(responses);

    // Replace {user} placeholder with the message author's display name
    if (response.includes('{user}')) {
        const displayName = message.member?.displayName || message.author.username;
        response = response.replace(/{user}/g, displayName);
    }

    // Attempt to reply; fallback to sending in channel if reply fails
    try {
        await message.reply(response);
    } catch (err) {
        console.warn('Reply failed:', err.message);
        try {
            await message.channel.send(`${message.author} ${response}`);
        } catch (sendErr) {
            console.error('Fallback failed:', sendErr.message);
        }
    }
};

// ---------------------- Export ----------------------
module.exports = handleMessage;
