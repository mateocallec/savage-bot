# Changelog

All notable changes to Savage Bot will be documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).  
This project adheres to [Semantic Versioning](https://semver.org/).

---

## [2.0.1] - 2025-09-27
### Fixed
- Resolved Docker-related bugs affecting container startup and deployment
- Improved stability of Docker build and run scripts

### Changed
- Cleaned and reorganized documentation for better readability
- Updated README with clarified instructions for Docker usage and configuration

---

## [2.0.0] - 2025-09-26
### Added
- Fully user-managed messages per server; no `messages.json` preloaded.
- Server-specific storage for messages and configuration (`./storage/servers/<guildId>/`).
- New slash commands for managing server messages:
  - `/addmessage` – Add new message.
  - `/listmessages` – List all messages in the server.
  - `/reset` – Delete all server messages.
  - `/deletemessage` – Delete a specific message by ID.
  - `/threshold` – View or update message threshold.
  - `/export` – Export messages and configuration as JSON.
  - `/info` – Show GitHub, Terms, and Privacy links.
- Configurable Terms of Use and Privacy Policy per server.
- README updated to reflect user-managed messages system.
- Legal files updated: `docs/terms.md` and `docs/privacy.md`.

### Fixed
- Removed dependency on predefined `messages.json`.
- Fixed automatic replies to use server-stored messages.

### Changed
- Refactored `index.js` and commands to support server-specific storage.
- Deprecated old messages system; all content now user-defined.
- `.env` variables for `THRESHOLD`, `ACTIVITY`, `TERMS_URI`, and `PRIVACY_URI` now optional with server fallback.
- README and documentation updated to match new architecture.

---

## [1.1.1] - 2025-09-25
### Added
- New playful and trash-talk messages added to `messages.json`
- Minor stylistic improvements to existing messages

### Fixed
- Corrected orthography in messages

### Changed
- Updated `messages.json` to improve readability and consistency

---

## [1.1.0] - 2025-09-24
### Added
- Docker support for containerized deployment
- `scripts/` folder with `build.sh`, `start.sh`, `stop.sh`, `pull.sh`, `push.sh`, and `entrypoint.sh`
- Automatic container restart policy on crash
- `.env` support for configuration: `THRESHOLD` and `ACTIVITY`
- Links to `docs/terms.md` and `docs/privacy.md` in README
- Updated README with detailed Docker setup instructions

### Fixed
- N/A

### Changed
- Replaced `config.json` usage with `.env` variables
- Refactored `index.js` to use environment variables instead of `config.json`
- README.md updated to reflect new Docker workflow and legal documentation

---

## [1.0.0] - 2025-09-23
### Added
- Initial release of Savage Bot
- Automatic replies every N messages (configured via `config.json`)
- `/trashtalk @username` slash command
- Reads messages from `messages.json`
- Configurable threshold and activity in `config.json`
- Error handling for message permissions and failed replies
- Environment variable support for `TOKEN`
- README, LICENSE, CONTRIBUTING, SECURITY, DISCLAIMER, and CHANGELOG files

### Fixed
- N/A (first release)

### Changed
- N/A (first release)

---

## [Unreleased]
### Added
- New features planned for next release

### Fixed
- Bugs fixed in next release

### Changed
- Improvements or changes in next release
