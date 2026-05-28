# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

La Michoacana Elite — a single-page website for a local ice cream shop. The output is a self-contained HTML file with all CSS, JavaScript, and content embedded inline. There is no build tool, no npm, and no package.json.

## Development Workflow

**There is no build step.** Open the HTML file directly in a browser.

- Primary deliverable: `La Michoacana Elite - After Dark.html` — the compiled, self-contained output file
- Source components: `app.jsx`, `builder.jsx`, `menu.jsx`, `reviews.jsx`, `flavor.jsx`, `tweaks-panel.jsx`, `data.jsx`
- React and Babel are loaded via inline `<script>` tags; JSX is transpiled in the browser

When making changes, edit the JSX source files, then manually integrate the updated component code into the compiled HTML file inside its corresponding `<script type="text/babel">` block.

## Architecture

### File Roles

- [app.jsx](app.jsx) — root component; composes Nav, Hero, Menu, MangonadaBuilder, Story, Reviews, and Visit sections
- [builder.jsx](builder.jsx) — interactive 4-step Mangonada builder with real-time glass visualization and receipt printout
- [menu.jsx](menu.jsx) — category-filtered menu with editorial grid layout
- [reviews.jsx](reviews.jsx) — auto-rotating review carousel
- [flavor.jsx](flavor.jsx) — "Flavor of the Month" feature section
- [data.jsx](data.jsx) — single source of truth for MENU, REVIEWS, MANGONADA_INGREDIENTS, MENU_CATEGORIES; exported onto `window.*`
- [tweaks-panel.jsx](tweaks-panel.jsx) — runtime design-token editor; uses `postMessage` to persist settings to LocalStorage

### State and Data Flow

- Component state is local (`useState`, `useEffect`, `useRef`)
- Shared data (menu items, reviews, ingredients) lives in `data.jsx` and is attached to `window.*` globals so all inline `<script>` blocks can access it
- The `useTweaks` hook reads/writes design tokens from LocalStorage via a `postMessage` protocol; the tweaks panel communicates with components this way
- No client-side router — navigation is anchor-based (`#menu`, `#flavor`, `#story`, `#visit`, `#order`, `#top`)

### Theming

CSS custom properties drive the entire color system. Three palettes are defined in the HTML `<style>` block and switched via a `data-palette` attribute on the root:

| Palette | Key feel |
|---|---|
| `festive` | Neon pinks, mango, lime on dark |
| `premium` | Dark background with gold accents |
| `warm` | Terracotta, ochre, sage on cream |

Core variables: `--accent-1` through `--accent-4`, `--bg`, `--surface`, `--text`.

### Data Shapes

```js
// Menu item
{ code, cat, name, price, desc, best, c1, c2 }

// Review
{ rating, name, source, text }

// Mangonada ingredient (grouped by step: base, fruit, sauce, topper)
{ name, emoji, price }
```

### Image Files
Drop photos into `assets/images/` with these exact names:
- `pol-1.jpg` — Story polaroid 1 (paleta wall)
- `pol-2.jpg` — Story polaroid 2 (Vanessa at counter)
- `pol-3.jpg` — Story polaroid 3 (friday after class)

If a file is missing, the gradient fallback renders automatically (`onerror="this.style.display='none'"`).

### Tweaks Persistence

Design-token overrides are stored between comment markers in LocalStorage:
```
EDITMODE-BEGIN
{ "palette": "festive" }
EDITMODE-END
```

## Rules
- NEVER split components into separate files — everything stays self-contained in one HTML output
- NEVER introduce a build tool, npm, or package.json
- NEVER rename the palette keys (festive / premium / warm) — they are referenced throughout
- Always update BOTH the JSX source file AND the compiled HTML when making changes

## Code Style
- Vanilla JS only inside <script> tags — no TypeScript
- Use const over let, never var
- No external libraries beyond what's already loaded via CDN

## Testing
- Open `La Michoacana Elite - After Dark.html` directly in Chrome
- Verify all 3 palettes render correctly via the tweaks panel
- Check the Mangonada builder completes all 4 steps without errors

## Common Gotchas
- JSX changes must be reflected in BOTH the .jsx source AND the compiled HTML <script> block
- window.* globals from data.jsx must be declared before any component that uses them