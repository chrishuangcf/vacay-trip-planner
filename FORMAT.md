# `.vacaytheme` format, version 1

A `.vacaytheme` file is a ZIP archive with this layout:

```text
manifest.json
assets/
  mascot.png
  banner.png
  hero-*.png
  card-*.png
```

`manifest.json` uses `format: "com.vacaytrip.theme"` and
`formatVersion: 1`. The `theme` object contains a stable package `id`, the
in-app `themeKey`, semantic `version`, localized names, allowlisted color and
icon tokens, defaults, and explicit asset maps. The `integrity.files` object
contains a SHA-256 digest for every referenced image.

Installed packages are validated and extracted atomically under the app's
Application Support directory. They persist across app launches but are
removed when the app is deleted. Theme files are served to WKWebView through
the read-only `vacay-theme://` URL scheme.

The importer rejects:

- archives larger than 50 MB or expanded content larger than 80 MB;
- more than 128 entries, symbolic links, absolute paths, or `..` traversal;
- scripts, HTML, SVG, and image formats other than PNG, JPEG, and WebP;
- individual images larger than 15 MB or 4096 pixels on either axis;
- invalid identifiers, colors, icons, manifests, or SHA-256 checksums.

The catalog format uses `format: "com.vacaytrip.theme-catalog"` and
`formatVersion: 1`. A relative `downloadURL` is resolved against the HTTPS
catalog URL.
