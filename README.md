# SAHAYAA — Technology should feel simple.

A senior-first digital companion prototype built for an accessibility design competition.

## How to run

No build step, no install required.

1. Unzip this folder.
2. Double-click `index.html` — it opens directly in any browser (Chrome, Edge, Safari, Firefox).
3. To deploy online, upload `index.html` and `app.js` to any static host (GitHub Pages, Netlify, Vercel) — they must stay in the same folder together.

## Files

- `index.html` — full markup, styles, and design tokens. The hero photo is embedded directly (base64) so the file is fully portable.
- `app.js` — all interactive logic: the Three.js companion orb, voice companion (speech recognition + text-to-speech), My Day, Scam Shield, Family Connect, Emergency Help, Digital Help tutorials, English/Tamil translations, and the Accessibility Center (persisted via localStorage).

## Notes

- Emergency, call, message, and video actions are simulated — no real calls, messages, or transactions are made anywhere in this prototype.
- The Accessibility Audit on the page is a self-assessment ("Prototype Accessibility Audit"), not an official WCAG certification — see the note in that section.
- Voice input uses the browser's built-in speech recognition (Chrome/Edge support it best); a text field is always available as a fallback.
- 3D uses vanilla Three.js (r128, loaded via CDN) rather than React Three Fiber, so the whole prototype can run as plain files with no bundler.
