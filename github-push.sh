#!/bin/bash

# Exit on error
set -e

# Use the GitHub token from environment variables
GITHUB_TOKEN=$GITHUB_TOKEN
REPO_URL="https://${GITHUB_TOKEN}@github.com/jessmpinheiro/LevelScheduler.git"

# Set Git configuration
git config --global user.name "Replit User"
git config --global user.email "replit@example.com"

# Update remote URL with token authentication
git remote set-url origin $REPO_URL

# Push to GitHub
echo "Pushing to GitHub..."
git push -u origin main

echo "Push completed successfully!"