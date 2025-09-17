# Online Editing with GitHub Codespaces

## Quick Start
1. Go to your GitHub repository
2. Click the green "Code" button
3. Select "Codespaces" tab
4. Click "Create codespace on main"

## Your Workflow
1. **Start Development Server:**
   ```bash
   pnpm dev
   ```
   The dev server will run on port 4321 and be automatically forwarded

2. **Edit Content:**
   - Blog posts: `src/content/post/`
   - Notes: `src/content/note/`
   - Pages: `src/pages/`

3. **See Live Preview:**
   - Click the "Ports" tab in VS Code
   - Click the globe icon next to port 4321
   - Your site opens in a new tab with live reload

4. **Deploy Changes:**
   - Commit your changes in VS Code
   - Push to GitHub
   - Vercel automatically deploys

## Tips
- Codespaces auto-saves your work
- You get 60 hours free per month
- The environment includes all your extensions and settings
- Use Ctrl+` to open terminal
