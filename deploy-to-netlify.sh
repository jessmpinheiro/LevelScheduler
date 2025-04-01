#!/bin/bash

echo "===== Netlify Deployment Helper ====="
echo ""
echo "This script will help you deploy to Netlify in a few easy steps."
echo ""

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
  echo "📥 Installing Netlify CLI..."
  npm install -g netlify-cli
  echo "✅ Netlify CLI installed"
  echo ""
fi

echo "🔄 Options for deployment:"
echo "1. Deploy directly (if you already have a Netlify account)"
echo "2. Get deployment instructions (if you prefer to use the Netlify web interface)"
echo ""
read -p "Select an option (1 or 2): " option

if [ "$option" == "1" ]; then
  echo ""
  echo "🚀 Deploying to Netlify..."
  echo "You'll be prompted to log in to your Netlify account if you haven't already."
  echo ""
  netlify deploy --build
  
  echo ""
  echo "✅ Deployment complete!"
  echo "You can now access your site at the URL provided above."
  echo ""
  echo "To set up a custom domain, go to the Netlify dashboard and configure it there."
else
  echo ""
  echo "=== Manual Deployment Instructions ==="
  echo ""
  echo "1. Go to https://app.netlify.com/ and sign up or log in"
  echo "2. Click 'Add new site' > 'Import an existing project'"
  echo "3. Connect to your GitHub, GitLab, or Bitbucket account"
  echo "4. Select your repository"
  echo "5. Use these build settings:"
  echo "   - Build command: npm run build"
  echo "   - Publish directory: dist/public"
  echo "6. Click 'Deploy site'"
  echo ""
  echo "Alternatively, you can use drag-and-drop deployment:"
  echo ""
  echo "1. Run 'npm run build' locally"
  echo "2. Go to https://app.netlify.com/ and sign up or log in"
  echo "3. Drag and drop the 'dist/public' folder onto the Netlify dashboard"
  echo ""
  echo "Your site will be live in minutes! 🎉"
fi