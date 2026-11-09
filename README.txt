TIME COST CALCULATOR — PWA

Upload all six files to the root of a public GitHub repository.
GitHub: Settings > Pages > Deploy from a branch > main > /(root) > Save.

Open the resulting HTTPS URL in Safari on iPhone.
Share > Add to Home Screen. Keep Open as Web App enabled if offered.

The app caches its files after the first successful visit and can then work offline.
The CSS uses touch-action: manipulation on controls to prevent double-tap zoom
on buttons while retaining normal pinch zoom.

Note: iOS Safari does not provide a dependable web API for directly triggering
the iPhone Taptic Engine. Haptic feedback is therefore not guaranteed.

UI revision v3:
- Circular number/operator buttons.
- Pill-shaped wide and tall buttons.
- Hourly-rate badge enlarged by approximately 20% and moved lower.
- Solid black iOS web-app status bar to avoid translucent overlay.

UI revision v4:
- Number and single-cell operator buttons use square 1:1 geometry, rendered as circles.
- AC, backspace, zero, and tall plus use their full rectangular grid cells with 999px corner radii.
- Outer calculator padding doubled from 12px to 24px (16px on short screens).
- Grid gaps are uniform horizontally and vertically.
- Main time display and cost subtitle enlarged by approximately 20%.
- Hourly-rate badge moved slightly lower.
