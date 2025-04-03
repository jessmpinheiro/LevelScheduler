#!/bin/bash

# Exit on error
set -e

# Build the React application
echo "📦 Building the application..."
npm run build

# Create gh-pages-new directory for GitHub Pages deployment
echo "🔨 Setting up GitHub Pages deployment..."
rm -rf gh-pages-new
mkdir -p gh-pages-new

# Copy the built files to gh-pages-new directory
echo "📋 Copying built files..."
cp -r dist/public/* gh-pages-new/

# Copy the 404.html file which is crucial for SPA routing on GitHub Pages
cp client/404.html gh-pages-new/

# Create a .nojekyll file to bypass Jekyll processing
touch gh-pages-new/.nojekyll

# Update the index.html file to correctly handle GitHub Pages paths
sed -i 's|src="/|src="./|g' gh-pages-new/index.html
sed -i 's|href="/|href="./|g' gh-pages-new/index.html

# Add a simple script to fix GitHub Pages asset loading
sed -i 's|</head>|<script>window.GH_PATH_PREFIX="/LevelScheduler/";</script></head>|' gh-pages-new/index.html

echo ""
echo "✅ GitHub Pages deployment files prepared in the 'gh-pages-new' directory!"
echo ""
echo "🚀 To deploy to GitHub Pages:"
echo ""
echo "1. Upload the contents of the 'gh-pages-new' directory to the gh-pages branch of your repository"
echo "2. Make sure GitHub Pages is configured to use the 'gh-pages' branch in your repository settings"
echo ""
echo "Your site will be available at: https://jessmpinheiro.github.io/LevelScheduler/"
