# Privacy Policy – Savage Bot

**Effective Date:** 2025-09-23

Savage Bot ("the Bot") respects the privacy of its users. This Privacy Policy explains what information is collected, stored, and how it is handled when using the Bot.

---

## 1. Information Collected

Savage Bot collects and stores only what is necessary for its functionality:

* **User-added messages:** Messages added via `/addmessage` and used for commands like `/trashtalk`.
* **Server configuration:** Per-server thresholds, terms, and privacy URIs.
* **User information:** Display names and Discord IDs are temporarily used for message personalization (e.g., `{user}` in `/trashtalk`).

No external personal information (emails, passwords, DMs) is collected or shared.

---

## 2. Message Storage and Handling

* Messages are stored locally on the host server in each server's storage folder (e.g., `./storage/servers/<guildId>/messages.json`).
* Server configuration is stored in `config.json`.
* Messages are used only to generate automated replies and interactive commands like `/trashtalk`.
* The `/export` command allows server administrators to download all stored messages and configuration in a JSON file.

---

## 3. Use of Environment Variables

* Discord token (`TOKEN`) is required to authenticate the Bot.
* Optional environment variables like `THRESHOLD`, `TERMS_URI`, and `PRIVACY_URI` can configure default behavior.
* Tokens and environment variables are **never shared** or stored externally by the Bot.

---

## 4. Third-Party Services

* Savage Bot uses the Discord API to operate.
* Any data sent to Discord (messages, user mentions) is subject to Discord’s privacy policies.

---

## 5. Security

* All stored data resides **locally on the host server**.
* The developer is **not responsible** for server misconfiguration, security breaches, or misuse by administrators or members.
* Server administrators are responsible for access control and management of exported JSON files.

---

## 6. Retention and Deletion

* Messages and server configuration remain stored locally until manually deleted or reset.
* Administrators can delete all messages using `/reset` or remove specific messages with `/deletemessage`.
* The `/export` command allows administrators to back up all stored messages and configuration.

---

## 7. Changes to Privacy Policy

The developer may update this Privacy Policy at any time. Continued use of Savage Bot constitutes acceptance of any changes.

---

## 8. Contact

For questions or concerns about privacy or data handling:

**Matéo Florian Callec**
Email: [mateo@callec.net](mailto:mateo@callec.net)

---

**Savage Bot stores only user-added messages and server configuration required for its operation. No external personal data is collected.**
