# Deploying to GitHub Pages

This guide will help you deploy your static React site to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. The repository pushed to GitHub

## Step-by-Step Instructions

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it (e.g., `lss-react` or `london-skate-school`)
3. **Important**: If you want the site at `username.github.io/repo-name`, use any name. If you want it at `username.github.io` (root), the repo MUST be named `username.github.io`

### 2. Update Base Path in Vite Config

If your repository name is NOT `username.github.io`, you need to update the base path:

1. Open `vite.config.js`
2. Change the `base` property to match your repository name:
   ```js
   base: '/your-repo-name/',
   ```
   For example, if your repo is `lss-react`, use:
   ```js
   base: '/lss-react/',
   ```

If your repo IS named `username.github.io`, use:
```js
base: '/',
```

### 3. Push Your Code to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
5. Save the settings

### 5. Deploy

The GitHub Actions workflow will automatically:
- Build your site when you push to the `main` branch
- Deploy it to GitHub Pages

After pushing, you can:
- Check the **Actions** tab to see the deployment progress
- Once complete, your site will be available at:
  - `https://your-username.github.io/repo-name/` (if repo has a custom name)
  - `https://your-username.github.io/` (if repo is `username.github.io`)

### 6. Manual Deployment (Optional)

If you want to deploy manually:

```bash
npm run build
```

Then push the `dist` folder contents to the `gh-pages` branch, or use the GitHub Actions workflow (recommended).

## Troubleshooting

- **404 errors**: Make sure the `base` path in `vite.config.js` matches your repository name
- **Assets not loading**: Check that the base path is correct
- **Build fails**: Check the Actions tab for error messages

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file in the `public` folder with your domain name
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings with your custom domain
