---
name: jptech-minimal-design
description: Apply the jptech-minimal design language — a navy-and-gold, typography-driven minimal aesthetic with halftone dot textures, pixel-font display headings, tiny uppercase monospace labels, soft large-radius cards, and full light/dark theming. Use this whenever building or restyling any web UI (portfolio, landing page, blog, dashboard, docs site, app screen, component) for the JP Technology Solutions brand, or wherever the user mentions "jptech-minimal", "my design system", or asks for something that "looks like our brand". Works with any stack (plain HTML/CSS, Tailwind, React, Vue, etc.) — it describes the aesthetic in values, not code.
---

# jptech-minimal design language

A typography-first aesthetic built on a near-black navy ink and a cool-tinted gray ramp, with two brand accents used precisely: deep blue for anything interactive, and gold reserved for the single loudest highlight on a screen. Hierarchy comes from font choice as much as color; texture comes from halftone dots. It should feel like a well-set technical zine that happens to belong to a specific company — quiet and precise, with one confident flash of gold when it matters.

This spec is technology-agnostic. Every rule is given as values and intent; implement it with whatever the project already uses (vanilla CSS, Tailwind, CSS-in-JS, a native toolkit's web view — anything). Never bolt on a new framework just to satisfy this skill.

## Philosophy — read this first

Three decisions drive everything else:

- **Two accents, precisely rationed.** Navy (`#043e9f` / `#02286c`) carries all interactive meaning — links, primary buttons, focus rings, active nav items. Gold (`#fcd043` and its darker relatives) is reserved for the *one* loudest element per view — a featured badge, a hero CTA, a single stat callout. If more than one thing on a screen is gold, nothing is. Everything else stays in the ink/gray ramp.
- **Type does the talking.** Four font roles with sharply different personalities carry the hierarchy. Sizes stay modest; contrast comes from which font is used, its casing, and its tracking.
- **Whitespace is structure.** Content lives in a narrow measure with generous vertical rhythm. Sections are separated by hairline rules and numbered labels, not by boxes or background tints.

## Color

The palette is a navy-tinted neutral ramp (background, ink, nine-step gray) plus two accent families. Both themes use the same semantic roles; dark mode is a re-mapping, not a redesign.

| Role | Light theme | Dark theme |
|---|---|---|
| Background | pure white `#ffffff` | near-black with a navy cast `#070a14` |
| Surface (cards/panels) | `#fafbfd` | `#0c0f1c` |
| Ink (foreground) | navy-black `#051633` | cool off-white `#f4f6fa` |
| Gray 50 (faintest fill) | `#f7f8fa` | `#0e1220` |
| Gray 100 (subtle fill) | `#eef1f6` | `#131829` |
| Gray 200 (hairlines, borders) | `#dde3ec` | `#1b2136` |
| Gray 300 (strong borders, scrollbar) | `#c1c9d6` | `#2a3350` |
| Gray 400 (faint text, labels) | `#8d97ab` | `#4a5470` |
| Gray 500 (muted text) | `#5c6780` | `#7a839c` |
| Gray 600–950 | progressively darker toward ink | progressively lighter toward ink |

**Brand accents** (used consistently across both themes unless noted):

| Role | Hex | Use |
|---|---|---|
| Navy (primary) | `#043e9f` (light) / `#5b8ce0` (dark — lightened for AA contrast) | links, primary buttons, focus rings, active states |
| Navy dark | `#02286c` | header/nav fills, hover/pressed state, the identity constant that stays deep in both themes |
| Gold | `#fcd043` | the single "loud" element per view — featured chip, hero CTA, hero stat |
| Gold mid | `#c38107` | icon fills or borders on gold surfaces, secondary gold emphasis |
| Bronze | `#935b04` | text set on gold backgrounds, subtle gradients/shadows |

Usage rules:

- Body text is ink; secondary text is gray 500; tertiary/meta text is gray 400. Never go lighter than gray 400 for anything that must be read.
- Borders and dividers are gray 200 at one-pixel weight. Dividers are hairlines (1px lines), used generously to separate sections and grid cells.
- Filled surfaces are rare. When a card needs a fill, use gray 50 or a barely-there gradient from gray 50 down to the background.
- Links and anything clickable use navy (the dark-theme variant, `#5b8ce0`, exists specifically because raw `#043e9f` is too low-contrast for text on the `#070a14` background — use it for body-sized interactive text in dark mode; the deeper `#043e9f`/`#02286c` pair is still fine for large surfaces like buttons and headers in dark mode).
- The one "loud" element allowed per view is a gold-filled chip (ink-colored text, no border) — e.g. a featured badge or a hero CTA. A lower-emphasis alternative is the inverted chip (ink background, background-colored text) — use it when something needs to stand out but doesn't deserve the gold.
- Text selection inverts: ink background, background-colored text.

Theming mechanics (adapt to the stack): store colors as semantic tokens (background, ink, gray-50…gray-950, primary, primary-dark, gold, gold-mid, bronze) that are swapped wholesale when a dark class or attribute is set on the document root, honoring three user choices: light, dark, and system (following the OS preference). If the platform supports storing color tokens as raw RGB/HSL channels so alpha can be applied at point of use, do that. Theme changes crossfade over half a second on background, text, and border colors. Persist the choice; default to system.

## Typography

Four fonts, four jobs. All are free and openly licensed:

| Role | Font | Fallbacks | Used for |
|---|---|---|---|
| Body/UI | Geist | system-ui, sans-serif | paragraphs, navigation, card titles, buttons |
| Technical | Geist Mono | ui-monospace, monospace | labels, timestamps, tags, footer links, nav items |
| Display | Geist Pixel (Square) | Geist Mono, monospace | page titles, section number labels, big stat values |
| Long-form | Source Serif 4 | Georgia, serif | article/blog body text only |

Geist and Geist Mono load from Google Fonts; Source Serif 4 too. Geist Pixel is Vercel's pixel variant (available via its GitHub releases / CDN as a woff2). Always load fonts with swap behavior so text renders immediately. If Geist Pixel is unavailable in some environment, fall back to Geist Mono in uppercase — never substitute a decorative font.

The scale is compact — base UI text is 15px, not 16:

- Page title (pixel font): about 3rem, line-height 1, lowercase, usually a single word ("blog", "projects").
- Article headings (serif or sans, weight 600, letter-spacing −0.02em): h1 ≈ 1.6rem, h2 ≈ 1.3rem, h3 ≈ 1.1rem.
- Long-form body: 1.0625rem (17px) serif with a roomy 1.75 line-height.
- UI body: 15px sans; small text 13px.
- Micro-labels: 9–11px mono, UPPERCASE, letter-spacing about +1px (wide tracking), gray 400/500. This is the aesthetic's signature register — timestamps, tags, section markers, button captions all live here.

Section headers follow a numbered, em-dashed convention set in the display font at small size and gray 400: "01 — blog", "02 — projects". Page titles and most standalone labels are lowercase; only mono micro-labels are uppercase. Links are underlined with the underline drawn at 25% opacity of the text color, offset ~2px below baseline, rising to full opacity on hover; link text and underline both use the navy accent rather than ink. External links get a trailing "↗".

## Layout & spacing

- Content column: narrow — 42rem (672px) max for reading pages; up to 56rem (896px) only when a page genuinely needs multi-column grids.
- Navigation is a fixed left sidebar, 14rem wide, appearing at ≥1024px viewports; content shifts right to clear it. Below that, a sticky top bar (hairline bottom border, ~90%-opaque background with background blur) with a full-screen overlay menu.
- Horizontal page padding: 1rem on mobile, 1.5rem on desktop. Card padding: 1.25rem. Vertical rhythm between sections: large — 3.5rem block spacing. Small gaps inside components: 0.75rem; between grid cards: 0.75–1.5rem.
- Grids are modest: 2 columns on small screens, 3 at ≥1024px. Stat rows divide cells with hairline rules (both axes) instead of gaps — the dividers are the design.
- Sidebar groups separate with 1px gray-200 rules; the active nav item is navy-colored with a small leading arrow, inactive items are gray and darken to ink on hover.

## Components

Every component follows the same recipe: hairline gray-200 border, generous radius, near-white fill, soft low-alpha shadow, mono micro-label somewhere.

- Radii: large cards 16px; medium cards 12px; small elements 8px; inputs/minimal 6px; pills and badges fully rounded. Thumbnails ~10px.
- Shadows are always black at low alpha with large blur and strong negative spread, so they read as soft ground contact, not material elevation. Resting card: roughly "8px down, 22px blur, −14px spread, 25% black". Hover: deepen to roughly "18px down, 36px blur, −20px spread, 40% black" while the card lifts 2px. Modal panels go much deeper (≈"40px down, 90px blur, −20px spread, 35% black"). In dark mode shadows nearly disappear — rely on borders.
- Tags/pills: fully-rounded, hairline gray-300 border, 9px uppercase mono, gray 500, tight padding (~2px vertical, 8px horizontal). The featured/champion variant fills with gold and sets ink-colored text, no border — this is the "one loud element" from the color section. A secondary emphasis variant inverts instead (ink fill, background-colored text) when gold would be one highlight too many.
- Buttons: understated. Primary action: navy fill (`primary` token), white text, 6–8px radius, 12px text, deepening to `primary-dark` on hover. Most "buttons" are really mono text links, in navy, with an arrow glyph that nudges up-and-right on hover. A page gets at most one gold button (its single hero CTA), everything else stays navy or text-link.
- Cards: border + radius + white/gray-50 fill + soft shadow, optionally an inset hairline border 5px inside the edge as a framing accent. Images inside zoom to 1.04 scale over half a second on hover.
- Inputs: either invisible (transparent, borderless, mono text, no focus ring beyond caret) inside composed widgets, or minimal: gray-50 fill, gray-200 border, 6px radius, 13px mono text; focus ring uses the navy `ring` token.
- Modals: full-viewport overlay, ink at 30% opacity with a strong background blur; a centered panel (max width ~24rem, 16px radius, 1.75rem padding) that fades and scales from 95% to 100% over 200ms. Escape closes.
- Scrollbars: slim — 6px, transparent track, gray-300 rounded thumb.

## Texture — the halftone motif

The signature flourish: fields of tiny round dots (a print-style halftone), rendered in the ink color (never gold or navy — texture stays monochrome so the accents keep their power), used as page backdrops, section accents, and photo treatments.

- Construction: a repeating grid of 1px-radius dots on a ~9px cell (denser variants at 6px and 5px cells). Light theme: near-black dots at 90% alpha. Dark theme: off-white dots at ~42% alpha.
- Always fade the field out with a soft mask (radial or linear) so it dissolves at the edges rather than ending abruptly — into a corner, under a heading, or along the bottom edge of a photo so the image appears to dissolve into dots.
- Use it in at most one or two places per page. It is seasoning, not wallpaper.

## Motion

Motion is brief, eased, and one-directional (things settle downward-up, never bounce):

- Micro-interactions (color, opacity, small transforms): 200ms.
- Card hovers: ~350ms for shadows, ~420ms for transforms, on a strong ease-out curve (fast start, long gentle landing — `cubic-bezier(0.16, 1, 0.3, 1)` or similar).
- Page entrance: elements fade up from 12px below over 700ms on that same curve, staggered ~70ms apart down the page (first at 50ms, each subsequent later, capped around 330ms).
- Status dots pulse by opacity (1 → 0.25 → 1) on a slow 1.8s loop.
- Theme switching crossfades colors over 500ms; if the platform offers view transitions, a circular reveal expanding from the click point over ~540ms is the ideal.
- Always disable all of this under a reduced-motion preference — the design must be complete when perfectly still.

## Accessibility & quality bar

Non-negotiables that keep the minimalism honest: semantic landmarks (nav/main/header/article); readable contrast (the ramp guarantees it if you respect the "nothing lighter than gray 400 for text" rule, and the dark-mode navy link color exists specifically to keep interactive text at AA contrast); keyboard escape routes for every overlay; honoring both `prefers-color-scheme` and `prefers-reduced-motion`; and declaring support for both color schemes to the browser so form controls and scrollbars match the theme.

## Applying this to an existing project

When restyling something that already exists: keep its structure and stack, then work in this order — (1) collapse the palette to the navy-tinted ink/gray ramp, reserving gold as the one rationed accent, (2) install the four font roles and re-cast labels into the mono micro-label register, (3) thin every border to a gray-200 hairline and align radii to the 16/12/8/6 ladder, (4) soften shadows to the low-alpha recipe, (5) add dark mode via token re-mapping (including the lightened navy link color), (6) add the entrance stagger, (7) finish with one tasteful halftone accent and confirm only one gold element exists per view. Stop before it gets busy: if a screen feels empty, that is usually correct.