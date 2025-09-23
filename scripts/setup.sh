#!/bin/bash

# --------------------------------------------------
# Savage Bot Setup Script
# Automatically installs Node.js, npm, and dependencies
# --------------------------------------------------

echo "🔧 Setting up Savage Bot..."

# Function to install Node.js if missing
install_node() {
    echo "Node.js not found. Installing Node.js..."
    # Using NodeSource setup for latest LTS
    curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
    sudo apt-get install -y nodejs
}

# Check Node.js
if ! command -v node &> /dev/null
then
    install_node
else
    echo "✅ Node.js found: $(node -v)"
fi

# Check npm
if ! command -v npm &> /dev/null
then
    echo "npm not found. Installing npm..."
    sudo apt-get install -y npm
else
    echo "✅ npm found: $(npm -v)"
fi

# Install dependencies from package.json
echo "📦 Installing npm dependencies..."
npm install

echo "✅ Setup complete! You can now run the bot with:"
echo "   npm run start"
