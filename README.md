# Savage Bot

<img src="https://github.com/mateocallec/Discord-Savage-Bot/blob/main/docs/profile.png?raw=true" alt="Profile" style="height: 100px;" />

Savage Bot is a French Discord bot that replies automatically to messages in a server and allows users to send playful or trash-talk messages via a slash command.

---

## Files

### `index.js`
This is the main script for Savage Bot.  
It handles:

- Loading responses from `messages.json` and configuration from environment variables (`.env`).
- Connecting to Discord with required intents.
- Counting messages and replying automatically when the threshold is reached.
- Handling the `/trashtalk @username` slash command.
- Error handling for permissions or failed message sending.

Key features:

- Replaces `{user}` in messages with the display name of the target user.
- Fallback to simple message if the bot cannot `reply()`.

---

### `messages.json`
Contains an array of messages that the bot can send.  
Example:

```json
[
  "Hello {user}!",
  "You're unstoppable, {user}!",
  "Watch out, {user}!"
]
````

* `{user}` will be replaced by the target user’s display name.
* You can add, remove, or modify messages freely.

---

### `.env`

Holds bot configuration variables:

```
TOKEN=YOUR_BOT_TOKEN_HERE
THRESHOLD=5
ACTIVITY=Watching the chat 👀
```

* **TOKEN**: Your Discord bot token.
* **THRESHOLD**: Number of messages before the bot automatically replies.
* **ACTIVITY**: Status shown under the bot’s presence in Discord.

---

### `CHANGELOG.md`

Tracks the history of changes, updates, and bug fixes for Savage Bot.

---

### `CONTRIBUTE.md`

Guidelines for contributing to Savage Bot, including how to submit bug fixes, new features, or improvements.

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

The [Terms of Service](./docs/terms.md) for using Savage Bot.

---

### `docs/privacy.md`

The [Privacy Policy](./docs/privacy.md) explaining data usage.
(Note: Savage Bot does **not** fetch or store any personal information.)

---

## Setup

1. Clone this repository.
2. Create a `.env` file in the root folder with your bot token, threshold, and activity.
3. Run the setup script to install dependencies:

```bash
scripts/setup.sh
```

---

## Docker Setup

Savage Bot is fully containerized and can run in Docker with automatic restart on crash.

1. Build the Docker image:

```bash
scripts/build.sh
```

2. Pull the public Docker image (optional):

```bash
scripts/pull.sh
```

Docker image is available at: [mateocallec/savage-bot](https://hub.docker.com/r/mateocallec/savage-bot)

3. Start the bot using Docker Compose:

```bash
scripts/start.sh
```

4. Stop the bot:

```bash
scripts/stop.sh
```

### Important Notes

* The bot uses `scripts/entrypoint.sh` or `scripts/startup.sh` inside the container to start.
* If the bot crashes, the container stops automatically; Docker Compose restart policy handles restarts.
* All scripts (`build.sh`, `start.sh`, `stop.sh`, `pull.sh`, `push.sh`) are located in the `scripts` folder.
* Use `.env` or environment variables to configure `TOKEN`, `THRESHOLD`, and `ACTIVITY`.

---

## Adding the Bot to Your Server

You can add Savage Bot to your Discord server using this link:

[Invite Savage Bot](https://discord.com/oauth2/authorize?client_id=1420071359538528409&permissions=3941734153713728&integration_type=0&scope=bot)

Make sure you have the required permissions in your server to invite a bot.

---

## Usage

* **Automatic replies**: The bot replies every `THRESHOLD` messages with a random message from `messages.json`.
* **Slash command**: `/trashtalk @username` sends a trash-talk message mentioning the target user.

---

## Disclaimer

Savage Bot is designed for fun.
I am **not responsible** if anyone is harmed, offended, or affected by the messages sent by the bot.
See [DISCLAIMER.md](./DISCLAIMER.md) for more information.

---

## License

See the [LICENSE](./LICENSE) file for more information.

---

**Created by Matéo Florian Callec**
