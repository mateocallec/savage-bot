# Savage Bot

Savage Bot is a Discord bot that replies automatically to messages in a server and allows users to send playful or trash-talk messages via a slash command.

---

## Files

### `index.js`
This is the main script for Savage Bot.  
It handles:

- Loading configuration (`config.json`) and responses (`messages.json`).
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

### `config.json`

Holds bot configuration:

```json
{
  "threshold": 5,
  "activity": "Watching the chat 👀"
}
```

* **threshold**: Number of messages before the bot automatically replies.
* **activity**: Status shown under the bot’s presence in Discord.

---

### `CHANGELOG.md`

Tracks the history of changes, updates, and bug fixes for Savage Bot.
Refer to this file to see what’s new in each version.

---

### `CONTRIBUTE.md`

Guidelines for contributing to Savage Bot, including how to submit bug fixes, new features, or improvements.

---

### `SECURITY.md`

Instructions for reporting security vulnerabilities responsibly.
Contact: **[mateo@callec.net](mailto:mateo@callec.net)**

---

## Setup

1. Clone this repository.
2. Create a `.env` file in the root folder with your bot token:

```
TOKEN=YOUR_BOT_TOKEN_HERE
```

Alternatively, set the `TOKEN` variable in your environment variables.

3. Run the setup script to install dependencies:

```bash
scripts/setup.sh
```

---

## Adding the Bot to Your Server

You can add Savage Bot to your Discord server using this link:

[Invite Savage Bot](https://discord.com/oauth2/authorize?client_id=1420071359538528409&permissions=3941734153713728&integration_type=0&scope=bot)

Make sure you have the required permissions in your server to invite a bot.

---

## Usage

* **Automatic replies**: The bot replies every `threshold` messages with a random message from `messages.json`.
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
