# Tamanna — A little garden of light

A personal homepage for Tamanna (`@red_heart_07`). This release is a full implementation pass against `WEBSITE-DESIGN.md`, the site's living design reference.

## What's included

- A warm editorial botanical homepage with the approved **Playfair Display**, **DM Sans**, and **DM Mono** type system.
- The paper / ink / lilac / coral / butter / sage palette, plus a coordinated dark theme.
- Sticky navigation, responsive mobile menu, a keyboard skip link, and visible focus states.
- A hero bouquet of three original Prism library animations: Cosmos, Carnation and Snapdragon. These run as live Canvas previews in isolated frames, with subtle floating/orbit decoration and a global pause control.
- A separate, lightweight scroll-bloom interlude that complements the live Prism flowers.
- One-time scroll reveals, staggered card arrival, and a thin scroll-progress line.
- Truthful placeholder cards for future pages and a verified GitHub profile link.
- Reduced-motion support, no-JavaScript content visibility, mobile layouts, and print styling.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure, metadata, content, and SVG artwork placements |
| `styles.css` | Design tokens, themes, layout, responsive rules, and motion |
| `main.js` | Theme state, mobile navigation, progress line, reveal observer, pause control |
| `prism-library.js` | Lazy source loader, 947-entry search/filter gallery, and sandboxed live animation previews |
| `og-image.png` | 1200 × 630 social-sharing preview |
| `favicon.svg` | Small flower browser icon |
| `robots.txt` / `sitemap.xml` | Crawler and canonical URL guidance |
| `WEBSITE-DESIGN.md` | Full design, content, motion, accessibility, and implementation specification |

## Motion and provenance

The hero is led by three original Prism Flowers source entries — Cosmos, Carnation and Snapdragon — rendered in isolated canvas frames from the pinned TRILYVA JSON. The gallery excludes the Prism Aster entry because Tamanna does not like that flower. It exposes the other 946 source entries: 916 botanical studies, 10 seasonal pieces and 20 other studies. The full TRILYVA editor/video-export runtime is not embedded. Keep the original-source attribution visible and do not imply the complete renderer has been included.

Original `renderFrame` code executes in sandboxed iframes; only visible previews animate. The gallery pauses when the document is hidden or the global motion pause is active and renders a still frame for reduced-motion preference. Visitors can pause continuous decorative motion across the flower scenes; scroll-triggered content reveals remain usable. The page retains visible credit for the Prism animation code, reflecting the permission Tamanna reported. Do not reintroduce the Aster artwork against her preference, and do not broaden the permission claim to unrelated TRILYVA source, templates, or assets.

## Upload to GitHub Pages

1. Download and extract this ZIP on your computer.
2. Open `tasnimaktertamanna/tasnimaktertamanna.github.io` on GitHub.
3. Choose **Add file → Upload files**.
4. Upload the files *inside* this folder directly into the repository root. Do not upload the ZIP itself and do not create a new folder.
5. Replace the same-named files in the repository.
6. Commit the changes to the default branch.

The bundle is prepared locally; it is not published until the GitHub commit and live page are verified.

## Validation performed for this package

- JavaScript syntax checked with Node.js; the generated sandbox iframe document was also parsed.
- All 947 Prism source entries were syntax-compiled and invoked once against a Canvas-like test context; no errors were reported.
- HTML parsed; IDs checked for duplicates; local file references checked against package files.
- CSS parsed with `tinycss2`.
- Reduced-motion rules, static/no-JavaScript content visibility, mobile navigation fallback, and the theme storage key reviewed.

## Release notes — full design pass

- Consolidated the stylesheet into one canonical set of rules instead of stacking late override blocks.
- Fixed the malformed closing anchor from the earlier package.
- Removed the unverified “EST. 2026” decorative note.
- Added a pre-paint theme restore using the existing `tamanna-theme` key.
- Made mobile navigation functional when JavaScript is available and visible as a simple wrapped row when it is not.
- Hid interactive theme/pause controls when their JavaScript behavior is unavailable; the content remains readable.
- Added scroll reveal progressive enhancement: without `IntersectionObserver` or JavaScript, content remains visible.
- Ensured the CSS flower is open and visible without JavaScript and in reduced-motion mode.
- Kept the existing identity, approved fonts, palette, and truthful placeholder copy.


## Original Prism library gallery

The page loads the pinned 947-entry TRILYVA Prism Flowers JSON when the hero/gallery area approaches the viewport, omits the disliked Prism Aster entry, and exposes the remaining 946 entries. It starts with eight curated botanical entries and supports search, category filters, and incremental loading. The hero runs three real source entries (Cosmos, Carnation and Snapdragon). Each preview runs its source `renderFrame` code in a sandboxed iframe; only visible cards animate. The full TRILYVA editor and video-export system are not embedded.

Source: [TRILYVA `prism-library.json`](https://github.com/Tamasrazim/tamasrazim.github.io/blob/cf9da54ce6793fe550fadd08cf26f86c517af913/projects/trilyva/renderer/library/prism-library.json). Credit is shown on the page.
