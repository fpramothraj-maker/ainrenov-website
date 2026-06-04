# Ain Renov Website Editing Guide

## Uploading new service/activity photos
1. Open the website folder.
2. Go to `assets/services/`.
3. Add your new images. Use simple names, for example:
   - `interior-fitout-01.jpg`
   - `concrete-work-01.jpg`
   - `joinery-01.jpg`
4. Open `style.css`.
5. Find `.s1`, `.s2`, `.s3` etc.
6. Replace the background gradient with an image path, for example:

```css
.s1{background-image:linear-gradient(180deg,rgba(0,0,0,.05),rgba(0,0,0,.65)),url('assets/services/interior-fitout-01.jpg')}
```

## Adding a new service/activity card
1. Open `index.html`.
2. Find the `vertical-feed` section under `id="services"`.
3. Copy one full service card block.
4. Paste it below the last service card.
5. Change the number, title and description.
6. Add a matching class name like `s8`, then define `.s8` in `style.css`.

## Adding new project photos
1. Create a folder inside `assets/projects/`, for example:
   `assets/projects/villa-renovation/`
2. Add photos:
   - `thumb.jpg`
   - `01.jpg`
   - `02.jpg`
   - `03.jpg`
3. Open `index.html`.
4. Copy one `project-tile` block from the Projects section.
5. Change the project title and description.
6. Open `style.css` and create a new thumbnail class:

```css
.t5{background-image:url('assets/projects/villa-renovation/thumb.jpg')}
```

Then use `<div class="thumb t5"></div>` in the new project tile.

## Adding new design images
Use the same method as projects, but place images inside `assets/designs/` and create classes like `.d5`, `.d6`, `.d7`.

## Important GitHub upload notes
- Keep `index.html` directly in the main repository root.
- Keep `CNAME` if you are using a custom domain.
- Do not upload the ZIP file directly.
- Extract the ZIP and upload the files/folders inside it.
