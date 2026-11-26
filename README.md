# Meh

Just another image viewer and editor for Windows and macOS, with no account, no ads, and no data collection.

- Website: https://meh-app.com/
- Privacy policy: https://meh-app.com/privacy
- Report a bug or ask for a feature: [open an issue](https://github.com/ajhsu/meh/issues/new/choose)

This repository holds the public website and the issue tracker. The app's source code is not here.

The screenshots show public-domain photos from the US National Park Service; see
[PHOTO-CREDITS.md](public/assets/PHOTO-CREDITS.md).

## The website

Cloudflare hosts the site as static files on Workers, the current form of Cloudflare Pages.

- `public`: the site. Cloudflare serves this folder.
  - `index.html`: the home page, in the Quiet Mono design: the app's own grays. Speed and size come
    first, with numbers measured on a real laptop. Then each feature has its own section with a demo.
    Every page follows the light or dark theme of the system.
  - `privacy.html`: the privacy policy, at https://meh-app.com/privacy.
  - `404.html`: the page for a missing address.
  - `style.css`: the styles of all three pages.
  - `assets`: the icon (`icon.svg`, and `favicon.png` for older browsers), the app captures in
    `screenshots`, the photos for the feature demos in `photos`, and `hero.png`, the picture for link
    previews. The captures and the photos are JPEG copies of the store materials in the app repo.
  - `_headers`: the security headers. The site has no scripts and loads nothing from other websites.
    The feature demos are CSS animations, and they stop when the system asks for less motion.
- `wrangler.jsonc`: the Worker `meh-app`. It serves `public` on meh-app.com, with no workers.dev
  address and no request logs.
- `www`: the Worker `meh-app-www`. It redirects www.meh-app.com to meh-app.com, because static files
  cannot redirect by host name.
- `index.html` and `privacy.html` at the top: redirects for the old GitHub Pages addresses,
  https://ajhsu.github.io/meh/. The first Microsoft Store submission links there.

## Deploy

Wrangler, the Cloudflare command-line tool, deploys each Worker and connects its domain. Cloudflare
makes the DNS records and the certificates:

```powershell
npx wrangler login
npx wrangler deploy
cd www
npx wrangler deploy
```

On Windows on ARM64, Wrangler needs the x64 package of workerd to start, even though a deploy
does not run it. Install it with `npm install @cloudflare/workerd-windows-64 --force`, at the
version of the `workerd` package next to it.

© 2026 AJ.H