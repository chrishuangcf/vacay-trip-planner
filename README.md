# Vacay Trip Planner promotional website

This folder is a standalone static website for GitHub Pages. It has no build
step or external runtime dependencies.

## Preview locally

From the app repository:

```bash
python3 -m http.server 8080 --directory homepage
```

Open `http://localhost:8080`.

## Publish to GitHub Pages

Copy the **contents** of this folder to the root of the
`chrishuangcf/vacay-trip-planner` Pages repository and commit them to `main`.
GitHub Pages will redeploy automatically.

Keep the existing `chiikawa` directory in that repository so the downloadable
theme catalog remains available.

Expected URLs:

- Website: `https://chrishuangcf.github.io/vacay-trip-planner/`
- Privacy policy: `https://chrishuangcf.github.io/vacay-trip-planner/privacy.html`
- Support: `https://chrishuangcf.github.io/vacay-trip-planner/support.html`
- Theme catalog: `https://chrishuangcf.github.io/vacay-trip-planner/chiikawa/catalog.json`

## App Store release

After the App Store listing is public:

1. Set `APP_STORE_URL` near the top of `script.js`.
2. Replace the TestFlight button links in `index.html`, `privacy.html`, and
   `support.html` with the public App Store URL if TestFlight should no longer
   be promoted.
3. Confirm the privacy policy matches the final App Privacy answers and
   production behavior.
4. Use the privacy and support URLs above in App Store Connect.
