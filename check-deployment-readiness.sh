#!/bin/bash

echo "===== Deployment Readiness Check ====="
echo ""

# Check if all necessary files exist
echo "Checking necessary files..."

REQUIRED_FILES=(
  "client/index.html"
  "client/_redirects"
  "netlify.toml"
)

all_files_exist=true

for file in "${REQUIRED_FILES[@]}"; do
  if [ -f "$file" ]; then
    echo "✅ $file exists"
  else
    echo "❌ $file is missing"
    all_files_exist=false
  fi
done

# Try to build the project
echo ""
echo "Attempting to build the project..."
npm run build > /dev/null 2>&1

if [ $? -eq 0 ]; then
  echo "✅ Build successful"
  
  # Check if build directory contains files
  if [ "$(ls -A dist/public 2>/dev/null)" ]; then
    echo "✅ Build output contains files"
  else
    echo "❌ Build output is empty"
    all_files_exist=false
  fi
else
  echo "❌ Build failed"
  all_files_exist=false
fi

# Final assessment
echo ""
if $all_files_exist; then
  echo "🎉 Your project is ready for deployment!"
  echo "You can deploy using one of these methods:"
  echo "1. Run './deploy-to-netlify.sh' for Netlify deployment"
  echo "2. Run './deploy-to-github.sh' for GitHub Pages deployment"
  echo ""
  echo "For detailed instructions, see NETLIFY-DEPLOYMENT-GUIDE.md"
else
  echo "❌ Some issues need to be resolved before deployment."
  echo "Please fix the issues listed above and run this check again."
fi