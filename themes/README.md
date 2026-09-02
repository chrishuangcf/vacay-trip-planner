# Vacay Trip Planner theme hosting

This directory is ready to publish as a static theme catalog. Generate the
catalog and optimized PNG packages from the repository root. The packaging
script requires Pillow:

```bash
python3 -m pip install Pillow
python3 tools/build_theme_packages.py
```

The app reads `catalog.json`, resolves each relative `downloadURL` against the
catalog URL, and installs the selected `.vacaytheme` package locally.
Chiikawa's source PNGs live in `chiikawa/assets`; they are intentionally not
included in the app bundle.

## Publish with GitHub Pages

1. Push this repository to GitHub.
2. Open the repository on GitHub.
3. Select **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the branch and `/ (root)`, then save.
6. Wait for the Pages deployment to finish.

If the repository is named `vacay-trip-planner`, the catalog URL will be:

```text
https://YOUR-GITHUB-USERNAME.github.io/vacay-trip-planner/themes/catalog.json
```

Paste that URL into **Settings → Theme Presets → Theme catalog URL** in the
app, save it, and select **Refresh catalog**.

Use a new package version and filename whenever theme assets change. Running
the build script updates the package checksum and `catalog.json`.
