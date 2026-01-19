import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages
  // Automatically set from GITHUB_REPOSITORY_NAME environment variable
  // If your repo is named "username.github.io", base will be '/'
  // Otherwise, base will be '/your-repo-name/'
  base: (() => {
    const repoName = process.env.GITHUB_REPOSITORY_NAME;
    if (!repoName) return '/lss-react/'; // Default for local development
    if (repoName.endsWith('.github.io')) return '/';
    return `/${repoName}/`;
  })(),
})
