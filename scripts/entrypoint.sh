#!/bin/sh

# --------------------------------------------------
# Startup script for Savage Bot
# Ensures the bot starts and stops on crash
# --------------------------------------------------

echo "🚀 Starting Savage Bot..."

# Run the bot with Node.js
# Exit if Node.js process crashes
node src/index.js

EXIT_CODE=$?
echo "❌ Savage Bot exited with code $EXIT_CODE"
echo "Container will stop. Docker Compose restart policy will handle restarts."
exit $EXIT_CODE
