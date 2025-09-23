/**
 * @file utils/paths.js
 * @brief Provides helper functions to get file paths for server-specific storage.
 *        Centralizes paths for messages and server configuration JSON files.
 */

/**
 * Get the file path for a server's messages JSON.
 * @param {string} guildId - The ID of the Discord server (guild).
 * @returns {string} Path to the messages JSON file for the given server.
 */
const getServerFile = guildId => `./storage/servers/${guildId}/messages.json`;

/**
 * Get the file path for a server's configuration JSON.
 * @param {string} guildId - The ID of the Discord server (guild).
 * @returns {string} Path to the config JSON file for the given server.
 */
const getServerConfigFile = guildId => `./storage/servers/${guildId}/config.json`;

// ---------------------- Export ----------------------
module.exports = { getServerFile, getServerConfigFile };
