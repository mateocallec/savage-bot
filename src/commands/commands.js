/**
 * @file commands/commands.js
 * @brief Aggregates all individual command handlers for the Discord bot.
 *        Maps command names to their corresponding handler functions.
 */

const trashtalk = require('./handlers/trashtalk');
const addmessage = require('./handlers/addmessage');
const listmessages = require('./handlers/listmessages');
const reset = require('./handlers/reset');
const deletemessage = require('./handlers/deletemessage');
const threshold = require('./handlers/threshold');
const exportCmd = require('./handlers/export');
const info = require('./handlers/info');

/**
 * Export a mapping of command names to their handler functions.
 * This is used by the interactionCreate event to dispatch commands.
 */
module.exports = {
    trashtalk,          // `/trashtalk` command handler
    addmessage,         // `/addmessage` command handler
    listmessages,       // `/listmessages` command handler
    reset,              // `/reset` command handler
    deletemessage,      // `/deletemessage` command handler
    threshold,          // `/threshold` command handler
    export: exportCmd,  // `/export` command handler
    info                // `/info` command handler
};
