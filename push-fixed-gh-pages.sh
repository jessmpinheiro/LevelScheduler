#!/bin/bash

# Exit on error
set -e

# Use the GitHub token from environment variables
GITHUB_TOKEN=$GITHUB_TOKEN
REPO_URL="https://${GITHUB_TOKEN}@github.com/jessmpinheiro/LevelScheduler.git"

echo "Setting up gh-pages branch from fixed version..."
cd gh-pages-new
git init
git add .
git config --local user.name "Replit User"
git config --local user.email "replit@example.com"
git commit -m "Deploy fixed version to GitHub Pages"
git branch -M gh-pages

echo "Pushing to gh-pages branch..."
git remote add origin $REPO_URL || git remote set-url origin $REPO_URL
git push -f origin gh-pages

echo "🎉 Fixed deployment complete!"
echo "Now make sure GitHub Pages in your repository settings:"
echo "1. Is set to 'Deploy from a branch'"
echo "2. Has the 'gh-pages' branch selected with '/(root)'"
echo ""
echo "Your site should be available at: https://jessmpinheiro.github.io/LevelScheduler/"