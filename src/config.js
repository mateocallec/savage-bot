/**
 * @file config.js
 * @brief Central configuration for the Discord bot.
 *        Loads environment variables first, then falls back to config.json, and finally to hardcoded defaults.
 */

const fs = require('fs');
require('dotenv').config(); // Load environment variables from .env

// ---------------------- Load config.json ----------------------

// Attempt to load default values from config.json
let fileConfig = {};
try {
    fileConfig = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
} catch (err) {
    console.warn('No config.json found or invalid JSON. Falling back to environment variables or defaults.');
}

// ---------------------- Configuration Values ----------------------

// Priority: Environment variable > config.json > hardcoded default

// Bot presence/activity (e.g., "Watching messages")
const BOT_ACTIVITY = process.env.ACTIVITY || fileConfig.ACTIVITY || "";

// Message threshold for automatic replies
const DEFAULT_THRESHOLD = parseInt(process.env.THRESHOLD, 10) || fileConfig.THRESHOLD || 100;

// Terms of service URL
const DEFAULT_TERMS_URI = process.env.TERMS_URI || fileConfig.TERMS_URI || null;

// Privacy policy URL
const DEFAULT_PRIVACY_URI = process.env.PRIVACY_URI || fileConfig.PRIVACY_URI || null;

// Optional maximum number of messages per server
const MESSAGE_LIMIT = process.env.MESSAGE_LIMIT || fileConfig.MESSAGE_LIMIT || null;

// ---------------------- Export ----------------------
module.exports = {
    BOT_ACTIVITY,
    DEFAULT_THRESHOLD,
    DEFAULT_TERMS_URI,
    DEFAULT_PRIVACY_URI,
    MESSAGE_LIMIT
};
