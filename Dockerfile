# Use the official Node.js image with the desired Node.js version
FROM node:alpine

# Set the working directory
WORKDIR /app/frontend

# Copy the project files
COPY . .

# Install dependencies
RUN npm install

# Expose the application port
EXPOSE 5173

# Start the application server
CMD npm run dev
