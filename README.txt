# Time Cost Calculator — iPhone web app

## Files
- `index.html` — calculator
- `manifest.webmanifest` — home-screen web app metadata
- `service-worker.js` — offline cache
- `icon-192.png`, `icon-512.png` — app icons

## Publish with GitHub Pages
1. Create a public repository named `time-cost-calculator`.
2. Upload all five files to the repository root (not inside another folder).
3. Open repository **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**, then Save.
6. Wait for the published URL shown on the Pages settings screen.

## Install on iPhone
1. Open the published HTTPS URL in Safari.
2. Tap Share → Add to Home Screen.
3. Keep **Open as Web App** enabled if shown.
4. Tap Add.

The app can cache its files after the first successful online visit. The calculator itself does not need a network connection after its files have been cached.

## Haptics
The app tries the standard Web Vibration API if the browser exposes it. iOS Safari does not provide a dependable web API for directly triggering the iPhone Taptic Engine, so tactile feedback is not guaranteed on iPhone. Button press animation remains available.
