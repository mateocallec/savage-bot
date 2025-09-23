# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first for caching
COPY package*.json ./

# Install dependencies
RUN apk add --no-cache bash
RUN npm install --production

# Copy the rest of the application
COPY . .

# Copy entrypoint script
COPY scripts/startup.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

# Run the startup script
CMD ["/usr/local/bin/entrypoint.sh"]
