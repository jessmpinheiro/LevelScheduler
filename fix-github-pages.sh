#!/bin/bash

# Exit on error
set -e

# Build the application
echo "📦 Building the application for GitHub Pages..."
npm run build

# Create a temporary gh-pages directory
echo "🔨 Setting up GitHub Pages deployment..."
rm -rf gh-pages-new
mkdir -p gh-pages-new

# Copy the built files
echo "📋 Copying built files..."
cp -r dist/public/* gh-pages-new/

# Create a .nojekyll file
touch gh-pages-new/.nojekyll

# Fix the paths in index.html
echo "🔧 Fixing asset paths in HTML files..."
sed -i 's|src="/assets/|src="./assets/|g' gh-pages-new/index.html
sed -i 's|href="/assets/|href="./assets/|g' gh-pages-new/index.html

# Add 404.html for SPA routing
cat > gh-pages-new/404.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Jessica's English Assessment</title>
  <script type="text/javascript">
    // Single Page Apps for GitHub Pages
    // This way the code will only replace the route part of the path, and not
    // the real directory in which the app resides, for example:
    // https://jessmpinheiro.github.io/LevelScheduler/one/two?a=b&c=d#qwe, becomes
    // https://jessmpinheiro.github.io/LevelScheduler/?/one/two&a=b~and~c=d#qwe
    var pathSegmentsToKeep = 1;

    var l = window.location;
    l.replace(
      l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
      l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
      l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
      (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
      l.hash
    );
  </script>
</head>
<body>
</body>
</html>
EOF

# Deploy to GitHub
echo "🚀 Pushing to GitHub Pages..."
cd gh-pages-new
git init
git add .
git config --local user.name "Replit User"
git config --local user.email "replit@example.com"
git commit -m "Deploy to GitHub Pages with fixed paths"

# Use the GitHub token from environment variables
GITHUB_TOKEN=$GITHUB_TOKEN
REPO_URL="https://${GITHUB_TOKEN}@github.com/jessmpinheiro/LevelScheduler.git"
git remote add origin $REPO_URL

git push -f origin main:gh-pages

echo "✅ Deployment completed!"
echo "Please wait 1-2 minutes, then check your site at:"
echo "https://jessmpinheiro.github.io/LevelScheduler/"