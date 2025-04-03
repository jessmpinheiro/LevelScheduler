#!/bin/bash

# Exit on error
set -e

# Build the React application
echo "📦 Building the application..."
npm run build

# Create a gh-pages directory for GitHub Pages deployment
echo "🔨 Setting up GitHub Pages deployment..."
rm -rf gh-pages
mkdir -p gh-pages

# Copy the built files to gh-pages directory
echo "📋 Copying built files..."
cp -r dist/public/* gh-pages/
cp client/404.html gh-pages/

# Create a .nojekyll file to bypass Jekyll processing
touch gh-pages/.nojekyll

# Create env.js file with base path configuration for GitHub Pages
echo "window.BASE_PATH = '/LevelScheduler/';" > gh-pages/env.js

echo ""
echo "✅ GitHub Pages deployment files prepared in the 'gh-pages' directory!"
echo ""
echo "🚀 To deploy to GitHub Pages:"
echo ""
echo "1. Create a repository on GitHub (if you haven't already)"
echo "2. Initialize git in the gh-pages directory:"
echo "   cd gh-pages"
echo "   git init"
echo "   git add ."
echo "   git commit -m \"Deploy to GitHub Pages\""
echo ""
echo "3. Connect to your GitHub repository:"
echo "   git remote add origin https://github.com/yourusername/your-repository.git"
echo "   git push -f origin main"
echo ""
echo "4. Set up GitHub Pages in your repository settings to use the 'main' branch"
echo ""
echo "Your site will be available at: https://yourusername.github.io/your-repository/"