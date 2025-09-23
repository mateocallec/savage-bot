#!/bin/bash
# --------------------------------------------------
# Build the Docker image for Savage Bot
# --------------------------------------------------

# Get current directory path
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
cd "$SCRIPT_DIR/.." || exit 1

echo "📦 Building Docker image for Savage Bot..."
sudo docker build -t mateocallec/savage-bot:latest .

echo "✅ Build complete."
