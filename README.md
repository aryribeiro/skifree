 SkiFree Three.js remake# SkiFree Three.js remake
 SkiFree Three.js remake
 SkiFree Three.js remakeThe runtime uses the 86 bitmaps, state tables, course descriptors, spawn
 SkiFree Three.js remakeweights, controls, and collision behaviors recovered from the bundled
 SkiFree Three.js remake`SKI.EXE`. Rendering stays pixel-perfect and orthographic while Three.js
 SkiFree Three.js remakehandles the scene.
 SkiFree Three.js remake
 SkiFree Three.js remakeControls: mouse or numeric keypad to steer and perform tricks, arrow keys as
 SkiFree Three.js remakethe keypad equivalents, `F2` to restart, and `F3` to pause/resume. On touch
 SkiFree Three.js remakescreens, hold and move a finger to steer; use a short tap to jump.
 SkiFree Three.js remake
 SkiFree Three.js remakeRun it with:
 SkiFree Three.js remake
 SkiFree Three.js remake```powershell
 SkiFree Three.js remakecd skifree
 SkiFree Three.js remakenpm.cmd install
 SkiFree Three.js remakenpm.cmd run dev -- --port 5173
 SkiFree Three.js remake```
 SkiFree Three.js remake
 SkiFree Three.js remakeBuild it with:
 SkiFree Three.js remake
 SkiFree Three.js remake```powershell
 SkiFree Three.js remakecd skifree
 SkiFree Three.js remakenpm.cmd run build
 SkiFree Three.js remake```
 SkiFree Three.js remake
 SkiFree Three.js remakeVerify rendering and gameplay behavior with:
 SkiFree Three.js remake
 SkiFree Three.js remake```powershell
 SkiFree Three.js remakecd skifree
 SkiFree Three.js remakenpm.cmd run verify
 SkiFree Three.js remake```
 SkiFree Three.js remake
 SkiFree Three.js remakeThe browser-free rules check (assets, recovered tables, recovery, and touch
 SkiFree Three.js remakegestures) is available with:
 SkiFree Three.js remake
 SkiFree Three.js remake```powershell
 SkiFree Three.js remakenpm.cmd run verify:logic
 SkiFree Three.js remake```
 SkiFree Three.js remake
 SkiFree Three.js remakeSee `ORIGINAL_PARITY_AUDIT.md` for the source-parity review and the explicitly
 SkiFree Three.js remakedocumented web extensions.
 SkiFree Three.js remake
 SkiFree Three.js remake## Deploy
 SkiFree Three.js remake
 SkiFree Three.js remake- **Vercel** (primary): import the GitHub repo; Vite is auto-detected via
 SkiFree Three.js remake  `vercel.json`. `api/country.js` is a Vercel Function that reads the
 SkiFree Three.js remake  `x-vercel-ip-country` header to suggest the initial language.
 SkiFree Three.js remake- **GitHub Pages**: `.github/workflows/pages.yml` publishes `dist/` on push to `main`.
 SkiFree Three.js remake- **Cloudflare-style hosting** (`worker/index.js`): `npm run build:sites` produces
 SkiFree Three.js remake  `dist/client` + `dist/server`.
 SkiFree Three.js remake
 SkiFree Three.js remakeThe language detection falls back to browser hints when `/api/country` is unavailable.
