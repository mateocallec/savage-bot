#!/bin/bash
# --------------------------------------------------
# Push the Docker image to Docker Hub
# --------------------------------------------------

if [ -z "$1" ]; then
    echo "Usage: ./push.sh <dockerhub-username>"
    exit 1
fi

USERNAME="$1"

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
cd "$SCRIPT_DIR/.." || exit 1

echo "⬆️ Tagging Docker image..."
sudo docker tag mateocallec/savage-bot:latest $USERNAME/savage-bot:latest

echo "⬆️ Pushing Docker image to Docker Hub..."
sudo docker push $USERNAME/savage-bot:latest

echo "✅ Docker image pushed successfully."
