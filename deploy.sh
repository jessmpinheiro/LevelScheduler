#!/bin/bash

# Build the React application
npm run build

# Create a new directory for GitHub Pages
mkdir -p github-pages
cd github-pages

# Initialize git
git init
git checkout -b main

# Copy the built files
cp -r ../dist/public/* .

# Create a .nojekyll file to bypass Jekyll processing
touch .nojekyll

# Add all files
git add .

# Commit changes
git commit -m "Deploy to GitHub Pages"

# Set the remote repository (replace with your GitHub repository URL)
# You'll need to create this repository on GitHub first
# git remote add origin https://github.com/yourusername/yourrepository.git

echo "===================="
echo "GitHub Pages deployment files prepared!"
echo "Now you need to:"
echo "1. Create a repository on GitHub"
echo "2. Run these commands in the github-pages directory:"
echo "   git remote add origin https://github.com/yourusername/yourrepository.git"
echo "   git push -f origin main"
echo "===================="