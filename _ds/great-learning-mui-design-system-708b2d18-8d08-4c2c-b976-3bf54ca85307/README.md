# Great Learning — MUI "Olympus" Design System

A token-based Material UI design system for Great Learning products. Built on MUI v9, themed with a custom palette ("Olympus"), a non-linear 4px spacing scale, and Inter as the sole typeface.

## Sources

- **Figma:** "Olympus MUI.fig" (mounted as virtual FS — 59 pages, 270 top-level frames). Pages: Cover, Overview, Screens-Layouts, Accordion → Tree-View (one per component), Logo, Logo2, Typography, Documentation.
- **Codebase:** `gl-mui-design-system/` (Vite + React 19 + TypeScript + MUI v9). Theme published as `@sachinsinha1/olympus-theme`. The local mirror at `src/theme/olympusTheme.ts` defines light + dark palettes, spacing map, shadow stack, and component overrides.
- **GitHub:** `sachinsinha0/gl-mui-design-system`.

## Product context

Great Learning is an ed-tech company. This repo is the company's internal design system — an MUI-themed token library used across Great Learning's product surfaces (web app, admin/learner dashboards). Because the visual contract is MUI, every token maps 1:1 to the MUI theme object; designers work in Figma with the "Olympus MUI" library and engineers consume `@sachinsinha1/olympus-theme`.

The reference app in `gl-mui-design-system/` is itself a documentation site with pages: Home, Get Started, Foundations, Components, Tools.

---

## CONTENT FUNDAMENTALS

**Voice:** Functional, plain, documentation-style. No marketing fluff. Sentences are short and declarative. Feature descriptions lead with the noun ("Contained, Outlined, Text variants…"), not a verb.

**Casing:**
- **Section titles** — Title Case ("Get Started", "Color Palette", "Floating Action Buttons").
- **Buttons** — `UPPERCASE` (MUI default, preserved: `textTransform: 'uppercase'`). Example: `SUBMIT`, `CANCEL`, `LEARN MORE`.
- **Overlines / eyebrows** — `UPPERCASE` with wide letter-spacing (`1.25px`). Example: `DESIGN TOKENS`, `EXPLORE`.
- **Chips / labels / status** — lowercase for semantic color labels (`primary`, `error`, `success`); Title Case for content labels ("Deletable", "With Icon").
- **Helper / caption** — sentence case. Example: "Something went wrong", "Required field".
- **Token names** — dot-path, lowercase (`primary.main`, `text.secondary`, `background.paper`).

**Pronouns:** Neutral / "you" when instructional ("check it out!", "use `theme.spacing(n)`"), but most copy is descriptive rather than addressed. Never "we" marketing-speak.

**Emoji:** None. This system deliberately avoids emoji.

**Punctuation:** em-dash (—) used to separate label and spec ("Headline 1 — 32px / 600"). Slash in typography specs ("16px / 500"). Ellipsis avoided.

**Examples from the system:**
- Hero tagline: *"Token-based. Figma-mapped. Dark mode ready."* (three short punchy sentences)
- Foundations subtitle: *"The visual language that powers every component — color, type, spacing, and elevation."*
- Component descriptions open with the variant list, then rules: *"Contained, Outlined, Text variants across all semantic colors."*
- Spacing rule: *"Always use `theme.spacing(n)` — never hardcode pixel values."*

---

## VISUAL FOUNDATIONS

### Colors
- **Primary** is a saturated Material blue `#196AE5` (MUI blue shifted slightly cooler), paired with dark `#0F4089` and light `#4788EA`.
- **Brand** has a secondary gradient axis: `--gl-brand-bright: #1974D2` → `--gl-brand-darker: #0E39A9` — used in the hero gradient and the GL logomark.
- **Semantic:** error `#FF3333`, warning `#FF9800`, success `#22BB34`, info (same as primary). Each has `light`, `main`, `dark`, and two tint shades (`160p` / `190p`) for backgrounds.
- **Grey** runs 50→900 as a standard Material ramp (`#FAFAFA` → `#212121`). Text uses alpha-on-`#212121` (`0.92 / 0.72 / 0.24`).
- **Dark mode** is a true sibling palette (not auto-inverted): primary shifts to `#66BBFF`, background is `#121212`, text is white.

### Typography
- **One family, always:** Inter. Sizes: 10/12/14/16/18/20/24/28/32. Weights: 400/500/600. No 700 in semantic tokens (brand display is 700).
- **Negative letter-spacing** on headings (`-0.4px`) and large display (`-0.5px` to `-1px`) for tight display text.
- **Overlines / buttons are uppercase** with `1.25px` / `0.4px` letter-spacing.
- **Roboto Mono** appears in tiny sprinkles for tokens (`primary.main`) in doc UIs.

### Spacing
Non-linear, 4px-based: `0, 4, 8, 16, 24, 32, 40, 48, 64, 96, 128`. Accessed as `theme.spacing(0..10)`. **Hardcoded px is forbidden** in product code.

### Elevation / Shadows
A 3-layer Material shadow recipe mixed at 6%/7%/10% opacity. 25 levels `[0..24]` with plateaus at 1, 2, 4, 8, 16, 24. Used for cards (1), hover (4), menus (8), modals (16), dialogs (24).

### Borders
- **Radius:** 4px everywhere (cards, buttons, inputs, paper). Chips are pill (9999px). Avatars are circular.
- **Dividers:** 1px `rgba(33,33,33,0.06)` on light; `rgba(255,255,255,0.12)` on dark.
- **Outlined border:** `rgba(33,33,33,0.23)` (inputs, outlined buttons, outlined cards).

### Backgrounds
- **Pages:** `#FAFAFA` default / `#FFFFFF` paper — plain flat surfaces, no textures, no patterns.
- **Hero:** single linear gradient `135deg, #196AE5 → #0F4089 → #0E39A9`, with soft white radial circles (6% / 4% opacity) as decoration — the only "brand flourish" in the system.
- **Feature cards:** very light tinted gradients at ~6–10% saturation (`#FFF8E1 → #FFF3E0`, `#E8F0FC → #D6E4F9`, `#E9F8EB → #D4F0D8`).
- **No full-bleed imagery, no hand-drawn illustrations, no repeating patterns.** The system is strictly flat + tokenized.

### Animation
- **Transitions:** `all 0.15s ease` for interactive state; `all 0.2s` for elevation; `0.25s cubic-bezier(0.4, 0, 0.2, 1)` for the sidebar width (MUI's "sharp" curve).
- **Page entrance:** `fadeIn 0.5s ease-out`, `fadeInUp 0.5s`, `scaleIn 0.5s`. Three keyframes total.
- **No bounce, no spring, no physics.** Everything is linear or cubic-bezier Material-standard.

### Hover / press states
- **Buttons:** contained → `primary.dark` fill; outlined/text → `primary.hover` (4% primary alpha) bg.
- **Nav items / cards:** `action.hover` (4% alpha of `#212121`). Active nav gets `primary.main` fill with white text (light) or `primary.shades.select` tint (dark).
- **Elevation hover:** card lifts to `boxShadow: 4`; hero feature cards also `translateY(-4px)`.
- **No press scale / shrink.** Press uses MUI ripple.

### Focus
- Focus ring is the default MUI outline (`primary.main` 2px) — never custom.

### Transparency / blur
- Mobile top bar uses `backdrop-filter: blur(12px)`.
- Hero chip uses `rgba(255,255,255,0.15)` with `backdrop-filter: blur(8px)` and 1px white border.
- Most surfaces are **opaque** — blur is rare and tasteful.

### Cards
- Default: `elevation={1}`, `borderRadius: 4`, `padding: theme.spacing(3)` or `(4)`, `bgcolor: background.paper`.
- Outlined variant: `1px solid other.outlinedBorder`, no shadow.
- Hero / feature cards: softer `borderRadius: 3` (12px), light gradient bg, `1px solid rgba(0,0,0,0.06)` border, hover lifts with `shadows[8]`.

### Iconography
Material Symbols / `@mui/icons-material` (Rounded / Outlined). See `ICONOGRAPHY` section below.

### Layout rules
- Max content width 1200px, horizontally centered.
- Sidebar: 80px collapsed / 260px expanded, `position: fixed`.
- Mobile top bar: 56px, sticky top, backdrop-blur.
- Page gutters: 24px xs / 40px md.

---

## ICONOGRAPHY

The system uses **Material Symbols** via `@mui/icons-material` (MUI v9). Icons are 24×24 by default with a 2px stroke (Outlined is the default style in this system), filled variants used for active/selected states.

- **Library:** `@mui/icons-material` — already a codebase dependency.
- **Style:** Outlined at rest, Filled for active/selected states. Rounded used occasionally (e.g., `CancelFilled`).
- **Sizes:** `small` = 20px, `medium` = 24px (default), `large` = 28px. For decorative icons inside hero cards, up to 32px.
- **Colors:** always via MUI color props (`color="primary" | "error" | "action"`) — never hardcoded.
- **Emoji:** never used.
- **Unicode as icons:** not used (no arrows-as-glyphs). Dividers use dots/em-dashes only.
- **Logos:** two versions — a square "G" mark (light blue `#1974D2` + dark blue `#0E39A9`) and a horizontal lockup with the "Great Learning" wordmark in `#0E39A9`. Both live in `assets/`.

**CDN fallback (when outside this repo):** link Material Symbols from Google Fonts `https://fonts.googleapis.com/icon?family=Material+Icons+Outlined`. For Lucide/Heroicons equivalents, fall back to Lucide with stroke-width 2 (closest match).

Icon assets imported: the MUI icon set (Node package). For static HTML previews, icons are rendered via Material Symbols font link.

---

## Files

- `README.md` — this file.
- `SKILL.md` — skill manifest for Claude Code.
- `colors_and_type.css` — all CSS tokens (colors, type, spacing, shadows, radii) + dark theme. `@import` this in any design.
- `assets/` — logos (GL mark + wordmark, Design Mirror gradient mark).
- `preview/` — small HTML cards that populate the Design System tab (colors, type, spacing, components).
- `ui_kits/docs-site/` — high-fidelity recreation of the Olympus docs site (Foundations + Components pages). `index.html` is interactive.
- `fonts/` — (empty — Inter, Roboto, Roboto Mono loaded from Google Fonts CDN; see caveat below).

### Font substitution
The codebase uses **Inter** (via `@fontsource/inter`), **Roboto** (MUI default), and **Roboto Mono** — all available from Google Fonts. I haven't vendored TTF files; `colors_and_type.css` loads them via `@import`. **Ask if you'd like local `.ttf` / `.woff2` files bundled instead.**

## UI kits

- **`ui_kits/docs-site/`** — the Olympus design system documentation site (recreates Foundations + Components pages from `gl-mui-design-system`). Nav: Home / Foundations / Components. Interactive theme toggle.

---

## Known caveats / open questions

- **No product surfaces beyond the docs site.** The attached codebase *is* the docs site — there's no consumer app or admin app in scope. If you have the actual Great Learning learner / admin UIs, attach them and I'll recreate them as a second UI kit.
- **Fonts served from Google Fonts CDN** — flag if you need vendored `.woff2` files.
- **Figma logo** reconstructed as SVG (close but not vector-perfect). The `assets/great-learning-logo.svg` is my recreation of the wordmark + glyph; replace with the canonical SVG export if you have it.
- **Icons** are linked via CDN (Material Symbols). No icon sprite is vendored.
