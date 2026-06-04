# Ain Renov Website

This is a static animated website for **Ain Renov Technical Services LLC**.

## How to update projects

1. Put new project photos inside the `assets` folder.
2. Open `projects.json`.
3. Add a new project entry like this:

```json
{
  "title": "Project Name",
  "category": "Retail Fit-Out",
  "location": "Dubai",
  "year": "2026",
  "cover": "assets/photo-name.png",
  "images": ["assets/photo-name.png"],
  "description": "Short project description."
}
```

4. Save the file and upload to GitHub. The website updates automatically.

## Free hosting steps

1. Create a GitHub account.
2. Create a new repository named `ainrenov-website`.
3. Upload all files from this folder.
4. Go to Repository Settings → Pages.
5. Source: Deploy from branch.
6. Branch: main, folder: root.
7. Add custom domain: `www.ainrenov.com`.
8. In Cloudflare DNS, point `www` CNAME to your GitHub Pages URL.
