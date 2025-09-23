#!/bin/bash
# --------------------------------------------------
# Stop the Savage Bot container using Docker Compose
# --------------------------------------------------

# Get current directory path
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
cd "$SCRIPT_DIR/.." || exit 1

echo "🛑 Stopping Savage Bot container..."
sudo docker-compose down

echo "✅ Savage Bot container stopped."
