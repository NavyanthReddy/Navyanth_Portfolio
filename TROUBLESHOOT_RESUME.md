# Troubleshooting Resume PDF Not Opening

## Quick Fix Steps

1. **Make sure dev server is running:**
   ```bash
   npm run dev
   ```
   You should see output like:
   ```
   VITE v4.x.x  ready in xxx ms
   ➜  Local:   http://localhost:5173/
   ```

2. **Test the direct URL:**
   - Open: `http://localhost:5173/resume/NavyanthBollareddy_Resume.pdf`
   - If this doesn't work, the dev server isn't serving the file

3. **Check browser console:**
   - Press F12 → Console tab
   - Look for: "✅ Resume file is accessible" or error messages
   - Share any error messages you see

4. **Clear browser cache:**
   - Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
   - Or use incognito/private window

5. **Verify file location:**
   - File should be at: `public/resume/NavyanthBollareddy_Resume.pdf`
   - Check: `ls -la public/resume/`

## If Still Not Working

The file might need to be in a different location or there's a Vite configuration issue.
