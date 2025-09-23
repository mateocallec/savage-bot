/**
 * @file utils/helpers.js
 * @brief Utility helper functions for the Discord bot.
 *        Includes random selection and nicely styled embeds.
 */

const { EmbedBuilder } = require('discord.js');

/**
 * Pick a random element from an array.
 * @param {Array} arr - The array to select from.
 * @returns {*} A randomly selected element from the array.
 */
const pickRandom = arr => {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return arr[Math.floor(Math.random() * arr.length)];
};

/**
 * Create a styled Discord embed with a title, description, and color.
 * @param {string} title - The title of the embed.
 * @param {string} description - The main content of the embed.
 * @param {number} [color=0xFF4500] - Optional hexadecimal color for the embed.
 * @returns {EmbedBuilder} A Discord.js EmbedBuilder instance.
 */
const styledEmbed = (title, description, color = 0xFF4500) => 
    new EmbedBuilder()
        .setTitle(`**${title}**`)
        .setDescription(description)
        .setColor(color);

// ---------------------- Export ----------------------
module.exports = { pickRandom, styledEmbed };
