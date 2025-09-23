#!/bin/bash
# --------------------------------------------------
# Pull the latest Savage Bot Docker image from Docker Hub
# --------------------------------------------------

# Get current directory path
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

echo "⬇️ Pulling latest Docker image for Savage Bot..."
sudo docker pull mateocallec/savage-bot:latest

echo "✅ Docker image pulled successfully."
