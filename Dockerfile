# Use the official Node.js base image
FROM node:alpine AS development

# Set the working directory in the container
WORKDIR /src/app

# Copy the React project files into the container
COPY . .

# Install dependencies
RUN npm install

# Build the production version of the app
RUN npm run build

# Expose the necessary ports
EXPOSE 80

# Set the entry point command
CMD npm run dev
