#!/bin/bash
# --------------------------------------------------
# Start Savage Bot using Docker Compose
# --------------------------------------------------

# Get current directory path
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
cd "$SCRIPT_DIR/.." || exit 1

echo "🚀 Starting Savage Bot with Docker Compose..."
sudo docker-compose up -d

echo "✅ Savage Bot should now be running."
echo "📖 Check logs with: docker-compose logs -f savage-bot"
