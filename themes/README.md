# Vacay Trip Planner theme hosting

This directory is ready to use as the root of a static theme website. Generate
the catalog and optimized PNG packages from the app repository root. The
packaging script requires Pillow:

```bash
python3 -m pip install Pillow
python3 tools/build_theme_packages.py
```

The app reads `catalog.json`, resolves each relative `downloadURL` against the
catalog URL, and installs the selected `.vacaytheme` package locally. The root
catalog contains the Chiikawa, Origami Journeys, and Enamel Pin Collection
themes. Each theme directory also has a standalone catalog and package.
Source PNGs live in each theme's `assets` directory and are intentionally not
included in the app bundle.

## Publish with GitHub Pages

1. Copy the contents of this `themes` directory to the root of the branch used
   by your `vacay-trip-planner` GitHub Pages site.
2. Open the repository on GitHub and select **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select that branch and `/ (root)`, then save.
5. Wait for the Pages deployment to finish.

The catalog URLs will then be:

```text
https://chrishuangcf.github.io/vacay-trip-planner/catalog.json
https://chrishuangcf.github.io/vacay-trip-planner/chiikawa/catalog.json
https://chrishuangcf.github.io/vacay-trip-planner/origami/catalog.json
https://chrishuangcf.github.io/vacay-trip-planner/enamel_pin/catalog.json
```

## Import a theme in the app

1. Open **Settings → Theme Presets**.
2. Paste the catalog URL into **Theme catalog URL**.
3. Tap **Refresh catalog**.
4. Find the desired theme under **Available downloads** and tap **Install**.

Alternatively, download a `.vacaytheme` package from its theme directory, tap
**Import theme file**, and select it in Apple Files.

Use a new package version and filename whenever theme assets change. Running
the build script updates the package checksum and `catalog.json`.
