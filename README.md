# Savage Bot

<img src="https://github.com/mateocallec/savage-bot/blob/main/docs/profile.png?raw=true" alt="Profile" style="height: 100px;" />

Savage Bot is a French Discord bot that replies automatically to messages in a server and allows users to send playful or trash-talk messages via slash commands.
All messages and configurations are **user-defined per server**.

---

## Files

### `index.js`

The main entry point for Savage Bot.
It handles:

* Connecting to Discord with the required intents.
* Counting messages per server and replying automatically when the threshold is reached.
* Handling slash commands like `/trashtalk`, `/addmessage`, `/listmessages`, `/reset`, `/deletemessage`, `/threshold`, `/export`, and `/info`.
* Error handling for permissions and failed message sending.

Key features:

* Replaces `{user}` in messages with the display name of the target user.
* Stores messages and server configuration **locally per server**.
* Allows exporting all server messages and settings via `/export`.

---

### `server storage`

All user-added messages and server configuration are stored **per server** in the `./storage/servers/<guildId>/` folder:

* `messages.json` – Stores messages added by server members.
* `config.json` – Stores server-specific settings like message threshold, terms URI, and privacy URI.

> All message content is **defined by users**, not preloaded.

---

### `.env`

Holds bot configuration variables:

```
TOKEN=YOUR_BOT_TOKEN_HERE
THRESHOLD=5
ACTIVITY=Watching the chat 👀
TERMS_URI=https://yourwebsite.com/terms
PRIVACY_URI=https://yourwebsite.com/privacy
```

* **TOKEN**: Your Discord bot token.
* **THRESHOLD**: Default number of messages before automatic reply.
* **ACTIVITY**: Status shown under the bot’s presence in Discord.
* **TERMS\_URI** & **PRIVACY\_URI**: Optional; can override server-specific links.

---

### `CHANGELOG.md`

Tracks the history of changes, updates, and bug fixes for Savage Bot.

---

### `CONTRIBUTE.md`

Guidelines for contributing to Savage Bot, including submitting bug fixes or new features.

---

### `SECURITY.md`

Instructions for reporting security vulnerabilities responsibly.
Contact: **[mateo@callec.net](mailto:mateo@callec.net)**

---

### `DISCLAIMER.md`

Details about liability and usage of Savage Bot.
See this file for more information.

---

### `docs/terms.md`

[Terms of Service](./docs/terms.md) for using Savage Bot.

---

### `docs/privacy.md`

[Privacy Policy](./docs/privacy.md) explaining data usage.
Savage Bot **only stores messages and configuration necessary for its operation**, no external personal data is collected.

---

## Setup

1. Clone this repository.
2. Create a `.env` file in the root folder with your bot token, threshold, activity, and optional URIs.
3. Install dependencies:

```bash
npm install
```

4. Start the bot:

```bash
node src/index.js
```

---

## Docker Setup

Savage Bot is containerized and can run in Docker:

1. Build the Docker image:

```bash
scripts/build.sh
```

2. Pull the public Docker image (optional):

```bash
scripts/pull.sh
```

3. Start the bot using Docker Compose:

```bash
scripts/start.sh
```

4. Stop the bot:

```bash
scripts/stop.sh
```

> The bot uses `scripts/entrypoint.sh` or `scripts/startup.sh` inside the container to start.
> Use `.env` or environment variables to configure settings.

---

## Adding the Bot to Your Server

[Invite Savage Bot](https://discord.com/oauth2/authorize?client_id=1420071359538528409&permissions=3941734153713728&scope=bot)

Make sure you have permissions to invite a bot.

---

## Usage

* **Automatic replies**: The bot replies every `THRESHOLD` messages with a random message added by users.
* **Slash commands**:

  * `/trashtalk @username` – Send a trash-talk message to a user.
  * `/addmessage` – Add a new message to the server storage.
  * `/listmessages` – List all messages stored for the server.
  * `/reset` – Delete all stored messages.
  * `/deletemessage` – Delete a specific message by ID.
  * `/threshold` – Set or view the server message threshold.
  * `/export` – Export messages and server configuration as JSON.
  * `/info` – Show GitHub, Terms, and Privacy links.

> All messages are **user-defined** and managed per server.

---

## Disclaimer

Savage Bot is designed for fun.
The developer is **not responsible** if anyone is harmed, offended, or affected by messages sent by the bot.
See [DISCLAIMER.md](./DISCLAIMER.md) for more information.

---

## License

See [LICENSE](./LICENSE) for more information.

---

**Created by Matéo Florian Callec**
