# Changelog

All notable changes to Savage Bot will be documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).  
This project adheres to [Semantic Versioning](https://semver.org/).

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
