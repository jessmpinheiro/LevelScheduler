# Netlify Deployment Guide for Jessica's English Assessment Website

This guide will walk you through deploying your website to Netlify, a free hosting service that's perfect for this type of application.

## Option 1: Using the Deployment Script (Easiest)

1. In your Replit project, open the terminal
2. Run the deployment script:
   ```
   ./deploy-to-netlify.sh
   ```
3. Follow the prompts in the script. It will give you two options:
   - Deploy directly from the terminal (you'll need to create a Netlify account)
   - Get instructions for manual deployment

## Option 2: Manual Deployment through Netlify's Website

1. Go to [Netlify.com](https://www.netlify.com/) and sign up for a free account
2. In your Replit project, run this command to build your website:
   ```
   npm run build
   ```
3. When the build completes, locate the `dist/public` folder in your project
4. On the Netlify dashboard, drag and drop the `dist/public` folder onto the designated area
5. Netlify will automatically deploy your site and provide you with a URL

## After Deployment

Once deployed, Netlify will give you a URL like `https://yoursitename.netlify.app`

### Setting Up a Custom Domain (Optional)

1. From your Netlify dashboard, go to the site settings
2. Click on "Domain Management" 
3. Click "Add custom domain"
4. Follow the instructions to connect your domain

### Making Future Updates

Whenever you make changes to your website and want to update the deployed version:

1. Run `npm run build` to rebuild the project
2. Go to your Netlify dashboard
3. Drag and drop the updated `dist/public` folder onto your site page

Or, if you connected your GitHub repository:
1. Push changes to your GitHub repository
2. Netlify will automatically detect the changes and redeploy

## Need Help?

If you encounter any issues with deployment, visit [Netlify's support documentation](https://docs.netlify.com/) or contact me for assistance.