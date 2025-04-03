#!/bin/bash

# Exit on error
set -e

# Build only the client part
echo "📦 Building the client application..."
cd client
node ../node_modules/vite/bin/vite.js build --outDir ../deploy-files

# Add necessary files for SPA routing
echo "📝 Adding SPA routing files..."
touch ../deploy-files/.nojekyll 
cat > ../deploy-files/404.html << 'HTML_CONTENT'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jessica's English Assessment</title>
  <script>
    // SPA Redirect Script
    const location = window.location;
    const segment = location.pathname.substring(1).split('/')[0];
    const redirectUrl = location.origin + (segment === 'LevelScheduler' ? '/LevelScheduler' : '') + '/' + 
      location.pathname.split('/').slice(segment === 'LevelScheduler' ? 2 : 1).join('/') +
      location.search + location.hash;
    
    window.location.replace(redirectUrl);
  </script>
</head>
<body>
  <p>Redirecting...</p>
</body>
</html>
HTML_CONTENT

cat > ../deploy-files/_redirects << 'NETLIFY_REDIRECTS'
/*    /index.html   200
NETLIFY_REDIRECTS

echo ""
echo "✅ Build completed successfully!"
echo ""
echo "🌐 Your website is ready in the 'deploy-files' directory!"
echo ""
echo "For GitHub Pages deployment:"
echo "1. Create a new gh-pages branch"
echo "2. Upload these files to that branch"
echo ""
echo "For Netlify deployment:"
echo "1. Go to https://app.netlify.com/drop"
echo "2. Drag and drop the deploy-files folder"
echo ""
