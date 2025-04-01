#!/bin/bash

# Exit on error
set -e

# Use the GitHub token from environment variables
GITHUB_TOKEN=$GITHUB_TOKEN
REPO_URL="https://${GITHUB_TOKEN}@github.com/jessmpinheiro/LevelScheduler.git"

echo "Setting up gh-pages branch..."
cd gh-pages
git init
git add .
git config --local user.name "Replit User"
git config --local user.email "replit@example.com"
git commit -m "Deploy to GitHub Pages"
git branch -M gh-pages

echo "Pushing to gh-pages branch..."
git remote add origin $REPO_URL
git push -f origin gh-pages

echo "🎉 Deployment complete!"
echo "Now you need to set up GitHub Pages in your repository settings:"
echo "1. Go to https://github.com/jessmpinheiro/LevelScheduler/settings/pages"
echo "2. Under 'Source', select 'Deploy from a branch'"
echo "3. Under 'Branch', select 'gh-pages' and '/(root)'"
echo "4. Click 'Save'"
echo ""
echo "Your site will be available at: https://jessmpinheiro.github.io/LevelScheduler/"