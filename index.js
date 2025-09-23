/**
 * @file index.js
 * @brief Discord bot that replies every N messages and supports a /trashtalk @username command.
 */

require("dotenv").config();
const { Client, GatewayIntentBits, REST, Routes, SlashCommandBuilder } = require('discord.js');
const fs = require('fs');

// ---------- Helper Functions ----------

/**
 * @brief Reads a JSON file and parses it.
 * @param {string} path Path to the JSON file.
 * @returns {any} Parsed JSON object.
 * @throws Will exit if the file cannot be read or parsed.
 */
function loadJSON(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error(`Failed to read ${path}:`, err);
        process.exit(1);
    }
}

/**
 * @brief Picks a random element from an array.
 * @template T
 * @param {Array<T>} arr Array to pick from.
 * @returns {T} Random element.
 */
function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// ---------- Load Messages & Environment Config ----------

const MESSAGES_THRESHOLD = parseInt(process.env.THRESHOLD, 10) || 100;
const BOT_ACTIVITY = process.env.ACTIVITY || "👀";
const responses = loadJSON('./messages.json');

// ---------- Create Client ----------

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// ---------- Message Counter ----------

let messageCounter = 0;

// ---------- Handle Regular Messages ----------

async function handleMessage(message) {
    if (message.author.bot) return;

    messageCounter++;
    if (messageCounter >= MESSAGES_THRESHOLD) {
        messageCounter = 0;
        let response = pickRandom(responses);

        if (response.includes("{user}")) {
            const displayName = message.member ? message.member.displayName : message.author.username;
            response = response.replace(/{user}/g, displayName);
        }

        try {
            await message.reply(response);
        } catch (err) {
            console.warn("Failed to reply, sending plain message instead:", err.message);
            try {
                await message.channel.send(`${message.author} ${response}`);
            } catch (sendErr) {
                console.error("Failed to send fallback message:", sendErr.message);
            }
        }
    }
}

// ---------- Slash Command Registration ----------

client.once("ready", async () => {
    console.log(`Connected as ${client.user.tag}`);
    client.user.setPresence({
        activities: [{ name: BOT_ACTIVITY }],
        status: "online"
    });

    // Register /trashtalk command globally
    const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

    const trashtalkCommand = new SlashCommandBuilder()
        .setName('trashtalk')
        .setDescription('Send a trash-talk message to a user')
        .addUserOption(option =>
            option.setName('target')
                  .setDescription('The user to trashtalk')
                  .setRequired(true)
        );

    try {
        await rest.put(
            Routes.applicationCommands(client.user.id),
            { body: [trashtalkCommand.toJSON()] }
        );
        console.log("/trashtalk command registered.");
    } catch (err) {
        console.error("Failed to register slash command:", err);
    }
});

// ---------- Slash Command Interaction ----------

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'trashtalk') {
        const targetUser = interaction.options.getUser('target');
        let response = pickRandom(responses);

        // Replace {user} with target username
        if (response.includes("{user}")) {
            const displayName = interaction.guild.members.cache.get(targetUser.id)?.displayName || targetUser.username;
            response = response.replace(/{user}/g, displayName);
        }

        try {
            await interaction.reply({ content: `${targetUser} ${response}` });
        } catch (err) {
            console.error("Failed to send slash command reply:", err.message);
        }
    }
});

// ---------- Message Event ----------
client.on("messageCreate", handleMessage);

// ---------- Login ----------
client.login(process.env.TOKEN).catch(err => {
    console.error("Failed to login:", err);
    process.exit(1);
});
