#!/bin/bash

# Exit on error
set -e

echo "🔧 Preparing to deploy Jessica's English Assessment Website to Netlify..."

# Step 1: Build the application
echo "📦 Building the application..."
npm run build

# Check if the build was successful
if [ ! -d "dist/public" ]; then
  echo "❌ Build failed! The dist/public directory doesn't exist."
  exit 1
fi

echo ""
echo "✅ Build completed successfully!"
echo ""
echo "🌐 Your website is ready to be deployed to Netlify!"
echo ""
echo "You have two options for deployment:"
echo ""
echo "Option 1: Deploy directly from Netlify's website (Easiest)"
echo "------------------------------------------------------"
echo "1. Go to https://app.netlify.com/drop"
echo "2. Drag and drop the 'dist/public' folder from this project"
echo "3. Wait for the deployment to complete"
echo "4. Netlify will give you a URL for your deployed site"
echo ""
echo "Once deployed, your site will be available at a Netlify URL"
echo "You can then set up a custom domain through the Netlify dashboard if desired."
echo ""
echo "Need more help? Check the NETLIFY-DEPLOYMENT-GUIDE.md file in this project."
