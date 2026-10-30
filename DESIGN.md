# radibit: Style Reference
> Modern Bauhaus: a studio notebook that turns into a midnight workshop. Eggshell paper and warm carbon ink by day, bone-white type on carbon by night, signal orange and seafoam as architectural surfaces, and three playful 3D primitives (circle, triangle, square) that answer a click with a tone.

**Theme:** light + dark (user toggle: system, light, dark)

radibit is the personal consultancy site of Radimir Bitsov (web accessibility, performance, sustainability). The system blends three influences:

- **ElevenLabs:** warm off-white canvas, whisper-weight display type, pill buttons, flat taupe cards with large radii, hairline dividers.
- **Enter GmbH:** full-bleed color bands with hard seams, a flat geometric hero illustration, a monospaced voice for labels and links, `→` arrow links.
- **Max Yinger:** the dark theme (warm carbon and bone white), telemetry-style uppercase mono labels, a two-color restraint.

The overall direction is a **modern interpretation of the Bauhaus**: minimal, geometric, primary shapes, with subtle animated 3D objects and sound on click.

The brand promise is accessibility and performance, so the design system treats both as constraints: every text pair meets WCAG AA, every looping animation can be paused and respects `prefers-reduced-motion`, sound is synthesized (no audio files) and can be muted, and the font budget is two families with four weights in total. The 3D is pure CSS; there is no WebGL or 3D library.

## Tokens: Colors

Colors are CSS custom properties on `[data-theme]`, mapped into Tailwind v4 via `@theme` in `src/styles/global.css`. Use the Tailwind names (`bg-surface`, `text-muted`, `fill-accent`), never raw hex values in components.

| Token | Tailwind | Light | Dark | Role |
|-------|----------|-------|------|------|
| `--bg` | `bg` | `#fbfaf6` eggshell | `#12130f` midnight carbon | Page canvas |
| `--surface` | `surface` | `#f2efe8` taupe | `#1b1c18` | Cards, pills, code blocks |
| `--line` | `line` | `#e4dfd6` stone | `#3c3c38` charcoal vein | Hairline borders and dividers |
| `--fg` | `fg` | `#12130f` warm carbon | `#e4dfda` bone glow | Primary text, filled buttons, focus rings |
| `--muted` | `muted` | `#5f5a52` | `#a39d95` | Body copy in cards, labels, dates |
| `--accent` | `accent` | `#ff5000` signal orange | `#ff6a2b` | Surfaces only: CTA band, illustration cap, status dots, link underlines |
| `--accent-ink` | `accent-ink` | `#b83a00` | `#ff8a5c` | Orange used as text (hero word, hover states) |
| `--on-accent` | `on-accent` | `#12130f` | `#12130f` | Text and buttons placed on the orange band |
| `--cool` | `cool` | `#a5d3d4` seafoam | `#1d2b2b` deep seafoam | Full-bleed expertise band |
| `--on-cool-muted` | `on-cool-muted` | `#2f3a3a` | `#a9bdbc` | Secondary text on the seafoam band |
| `--art-cool` | `art-cool` | `#a5d3d4` | `#7fb3b4` | Seafoam in illustrations (stays visible on the dark canvas) |
| `--art-sun` | `art-sun` | `#f2b31b` | `#f5c242` | Bauhaus yellow, art only: the triangle and its skill marker. Never text, never UI chrome |
| `--subtle` | `subtle` | `rgba(18,19,15,.06)` | `rgba(228,223,218,.06)` | Legacy faint wash |

### Verified contrast (WCAG 2.x)

| Pair | Light | Dark |
|------|-------|------|
| fg on bg | 17.9:1 | 14.1:1 |
| muted on bg | 6.5:1 | 6.9:1 |
| muted on surface | 6.0:1 | 6.4:1 |
| accent-ink on bg | 5.5:1 | 8.0:1 |
| accent-ink on surface | 5.0:1 | 7.4:1 |
| fg on cool | 11.4:1 | 11.1:1 |
| on-cool-muted on cool | 7.2:1 | 7.5:1 |
| on-accent on accent | 5.7:1 | 6.5:1 |

White on signal orange is about 3.3:1 and **fails**. Text on orange is always `on-accent` (carbon).

## Tokens: Typography

Two families, **self-hosted** in `public/fonts/` (no requests to Google: better privacy under GDPR, one less connection). Geist is a single variable file per subset covering weights 300 to 500; Geist Mono is 400 only. Only the `latin` and `latin-ext` subsets ship (about 62 KB in total), split by `unicode-range` so most pages download just the two `latin` files, which are preloaded in `Layout.astro`. `@font-face` rules live at the top of `global.css` with `font-display: swap`. To add a weight or subset, download it from Google Fonts' css2 API and add a matching `@font-face`.

### Geist (display): `font-display`
- **Weight:** 300 (`font-light`) for every headline. The whisper weight is the signature; never bold a headline.
- **Tracking:** tight and negative, scaling with size: `-0.04em` at hero, `-0.035em` at section titles, `-0.03em` at card titles.
- **Line height:** 0.98 to 1.1.
- **Sizes:** fluid `clamp()`: hero `clamp(3rem, 8.5vw, 7.5rem)`, section `clamp(2rem, 4.5vw, 3.25rem)`, card `clamp(1.75rem, 3vw, 2.25rem)`.

### Geist (body): `font-sans`
- **Weights:** 400 for body, 500 for button labels.
- **Sizes:** 15px (cards), 17px (hero intro, prose), 18px (list titles).
- **Line height:** 1.65 for paragraphs; prose 1.75 at max 68ch.

### Geist Mono (telemetry): `font-mono`, `.label-mono`
- **Use:** every label, kicker, date, nav item, pill text and arrow link. This is the "readout" voice from Enter and Yinger.
- `.label-mono` = 12px, line-height 1.25, `+0.02em`, uppercase.
- Arrow links use `font-mono` at 14px in sentence case (not uppercase).

### Type scale

| Role | Family | Weight | Size | Line height | Tracking |
|------|--------|--------|------|-------------|----------|
| label | Geist Mono | 400 | 12px | 1.25 | +0.02em, uppercase |
| link-mono | Geist Mono | 400 | 14px | inherit | normal |
| body-sm | Geist | 400 | 15px | 1.65 | normal |
| body | Geist | 400 | 17px | 1.65 to 1.75 | normal |
| list-title | Geist | 400 | 18px | 1.4 | -0.01em |
| card-title | Geist | 300 | 28 to 36px | 1.1 | -0.03em |
| section | Geist | 300 | 32 to 52px | 1.05 | -0.035em |
| display | Geist | 300 | 48 to 120px | 0.98 | -0.04em |

## Tokens: Spacing & Shapes

**Base unit:** 4px (Tailwind default scale). **Density:** comfortable, editorial.

### Layout container: `.shell`
- Max width 1280px, centered.
- Side gutter: 20px (mobile), 40px (≥768px), 64px (≥1100px).
- Full-bleed bands are plain full-width `<section>` elements with a `.shell` inside. Never use `100vw` (it includes the scrollbar and causes horizontal scroll).

### Vertical rhythm
- Sections: `py-20` mobile, `py-24` to `py-28` desktop (80 to 112px).
- Label to heading: 16 to 32px. Card internal padding: 32px mobile, 40px desktop.
- Card grid gap: 16px.

### Breakpoints
- `sm` 640px, `md` 768px (two-column hero, services and writing), `desk` 1100px (custom; three-column expertise).

### Radius

| Element | Value | Class |
|---------|-------|-------|
| Buttons, pills, tags, toggle | 9999px | `rounded-full` |
| Cards | 24px | `rounded-card` (`--radius-card`) |
| Prose images and code blocks | 16px | in `.prose` |
| Inline code | 6px | in `.prose` |
| Illustration | 0 (hard edges, chamfered corner) | n/a |

### Elevation
Flat. No box shadows anywhere. Depth comes from surface steps (bg → surface → line) and full-bleed color bands.

## Components

### Site header (`SiteNav.astro`)
Transparent, sits on the canvas. Logo left (cut-corner square with "radi" and "bit" in `fill-accent`). Center: availability pill (surface fill, hairline border, orange status dot, mono label), hidden below `md`. Right: "Writing" ghost pill, theme toggle (outline pill cycling system/light/dark, label hidden below `sm`), and a filled "Get in touch" pill (hidden below `sm`, where the hero CTA covers it).

### Filled pill button (primary)
`rounded-full bg-fg text-bg px-6 py-3`, Geist 15px/500. Hover: `opacity-80`. Inverts automatically in dark mode. On the orange band: `bg-on-accent text-accent`.

### Outline pill button (secondary)
`rounded-full border border-line bg-bg text-fg px-6 py-3`, Geist 15px/500. Hover: `bg-surface`.

### Mono arrow link
`font-mono text-[0.875rem] text-fg underline decoration-accent decoration-2 underline-offset-4`, prefixed with an `aria-hidden` `→`. Hover: `text-accent-ink`, arrow nudges 4px right. The orange underline is the only orange on interactive text.

### Kicker pill
`label-mono inline-flex gap-2 rounded-full bg-bg border border-line px-3 py-[0.4rem] text-muted` with a 6px orange dot. Tops each service card and the external article card.

### Service card
`rounded-card bg-surface p-8 md:p-10`, flex column. Kicker pill, display-weight title, muted body, arrow link pinned to the bottom with `mt-auto`.

### Expertise band
Full-bleed `bg-cool`. Mono label, then three items: mono number (`01` to `03`), light display title, `on-cool-muted` body. Mobile: rows separated by `border-fg/20`. Desktop (`desk`): three columns separated by vertical hairlines.

### Writing list
Rows with `border-t border-line` (and a bottom border on the last row). Grid: mono date | title | mono tag (`External ↗` or `→`). The whole row is the link; title hovers to `accent-ink`. External links open in a new tab with a screen reader hint.

### CTA band
Full-bleed `bg-accent text-on-accent`. Mono label, a large light headline, and an inverted pill with the email address. Focus rings switch to `on-accent` inside `.bg-accent`.

### Bauhaus shapes (`BauhausShapes.astro`)
The hero object. Three primitives float over flat ground shadows (no ground line), following Kandinsky's Bauhaus pairing of form and color:

| Shape | Build | Color | Meaning | Voice |
|-------|-------|-------|---------|-------|
| Circle | Disc with a radial highlight (always faces the viewer) | `art-cool` seafoam | 01 Accessibility | Sine "bloop", C5 pentatonic, 0.45s |
| Triangle | Square pyramid: 4 clip-path faces leaning in 28.5°, plus a base | `art-sun` yellow | 02 Performance | Triangle wave plus a quiet octave, chime, 0.9s |
| Square | Cube: 6 faces, sized `0.78 × --u` | `accent` orange | 03 Sustainability | Low-passed square wave, woody knock, 0.22s |

- **Scale:** one unit `--u` drives everything: 84px mobile, 80px at `md`, 104px at `desk`.
- **Shading:** faces are shaded with `filter: brightness()` on the leaf face elements (0.6 to 1.12). Never put `overflow`, `opacity`, `filter` or `clip-path` on an element that has `preserve-3d`, because it flattens the scene.
- **Idle loop:** pyramid and cube spin on Y (22s and 28s, opposite directions, 18° downward view); every shape bobs (4.8s, staggered) above a flat stone shadow ellipse that breathes with it.
- **Pointer:** the whole scene tilts up to ±7° toward the pointer, only on `(pointer: fine)`.
- **Click or Enter/Space:** each shape is a real `<button>` with an accessible name ("Circle, accessibility. Play a tone"). The circle squashes and bounces, the triangle jumps with a half spin, the cube tumbles a full turn, and a ring ripples out on the ground. Repeated clicks walk up a pentatonic scale, so mashing always sounds pleasant.
- **Sound:** Web Audio oscillators. The `AudioContext` is created on the first click (autoplay policy). Peak gain 0.05 to 0.12, envelopes ramp to 0.0001 to avoid pops. Zero bytes of audio are downloaded.
- **Controls:** two pill toggles under the stage with fixed labels and `aria-pressed`: "Sound" (pressed = on, stored as `localStorage.sound = 'off'` when muted) and "Pause motion" (pressed = paused, stored as `localStorage.motion`, applied to `<html data-motion>` before first paint).

### Avatar
The portrait beside the name in the hero is clipped to the logo silhouette with `.clip-logo` (`clip-path: polygon(0 28.7%, 28.9% 0, 100% 0, 100% 71.3%, 71.1% 100%, 0 100%)`). It sits to the left of the name and intro, 96px on mobile and 120px from `sm`, generated by Astro's `<Image>` as a 240px WebP (about 5 KB, sharp on 2x screens), `bg-surface` while loading. The source is `src/assets/avatar.jpg`, pre-cropped square around the face at 600px; the markup only renders when an `avatar.{jpg,jpeg,png,webp}` exists. Black and white photography suits the palette; never round it into a circle.

### Brand marquee (`BrandMarquee.astro`)
A hairline-bordered strip under the hero: mono label "Brands I’ve worked with", then monochrome logos (28px tall, max 176px wide, 80% opacity) scrolling left in a 70s loop, with soft edge fades from a `mask-image` gradient. The list is rendered six times and the track shifts by half, so the loop stays gapless up to about 3,300px wide even with few brands; copies 2 to 6 are `aria-hidden` with empty `alt`s, and logos are images, not links, so the strip adds no tab stops. Logos are single-color `#0B0B0C` files in `public/logos/brands/` (SVG preferred; recolor brand-colored logos to black), inverted in dark mode. Add a brand by dropping the file there and adding `{ name, logo, width, height }` to `brands` in `src/data/profile.ts`, with `width` = 48 × the logo's aspect ratio. Hover pauses it; "Pause motion" stops it.

### Experience timeline
Section `#experience`. Heading with three stat tiles (light display numerals over mono labels), then an `<ol>` of roles, newest first. Each row is a two-column grid from `sm` (`10rem | 1fr`): mono date range with `→` (screen readers hear "to"), then the role title in light display, with the company (underlined link where available) and a mono place aligned to the right. No descriptions or technology lists. Only the latest three roles show; the rest sit in a second `<ol start="4">` that JS hides behind a "Show more (n)" pill (`aria-expanded`, `aria-controls`; label becomes "Show less"). Without JS every role stays visible. Content lives in `src/data/profile.ts`.

### Skills band
Section `#skills` on a full-bleed `bg-surface` band. Four groups, each under a carbon rule and headed by a mono label with a tiny Bauhaus marker (seafoam circle, yellow triangle, orange square, carbon square). Below a hairline: languages.

### Side project cards
Section `#projects`. Three columns: a 3:2 image tile (`rounded-card`, hairline border, screenshot via `<Image>` at 720px, gently zooms on hover), mono "01 · kind" line, light display name with `↗`, muted description. Only the project name is a link (underlined, keyboard focusable) so the description stays selectable text. The screenshot is a mouse-only duplicate link (`tabindex="-1"`, `aria-hidden`). An unannounced project shows a flat circle, triangle and square composition instead of a screenshot.

### Footer (`SiteFooter.astro`)
Hairline top border, mono labels: copyright left; LinkedIn ↗, GitHub ↗ (both `rel="me"`, open in a new tab with a screen reader hint) and the email address right.

## Motion

- `animate-rise-1` to `animate-rise-5`: an 18px rise with fade, staggered by 0.1s, on hero elements only.
- Hover transitions: 200ms on color, opacity, and transform.
- Theme change: 350ms background/color transition on `body`.
- Shape loops: spin 22s and 28s, bob 4.8s, click animations 700ms with `cubic-bezier(.3,.7,.2,1)`.
- Marquee: 70s linear loop.
- Every infinite animation carries the `.motion-loop` class. `html[data-motion='paused'] .motion-loop` pauses it (the visible "Pause motion" toggle satisfies WCAG 2.2.2), and `prefers-reduced-motion: reduce` sets it to `animation: none`. The reduced-motion rule also forces `animation-iteration-count: 1`, so no loop flickers.
- Under reduced motion, clicking a shape still plays its tone but does not move it.

## Accessibility rules

- Focus: `2px solid var(--fg)` outline with a 3px offset everywhere; `var(--on-accent)` inside the orange band.
- Decorative glyphs (`→`, `↗`, `◐`, `♪`, dots, shape faces) are `aria-hidden`.
- Interactive art is never decoration-only: each shape is a labelled `<button>`, and sound always follows a user gesture and can be muted.
- New-tab links carry `<span class="sr-only">(opens in a new tab)</span>`.
- Sections use `aria-labelledby` pointing to their heading. Heading order: one `h1` per page, `h2` per section, `h3` per card or item.
- The theme toggle exposes its current state in `aria-label`.

## Do's and Don'ts

### Do
- Use Geist 300 with negative tracking for every headline.
- Use `.label-mono` for labels, dates, nav and pill text.
- Use orange as a surface (band, cap, dot, underline). For orange text, use `accent-ink`.
- Stack sections as full-bleed bands with hard seams: canvas → seafoam → canvas → hairline → orange.
- Keep buttons and tags fully pill-shaped and cards at 24px.
- Separate with 1px `line` hairlines; prefer them over shadows.
- Check every new text and background pair against WCAG AA in both themes before shipping.

### Don't
- Don't bold or semibold display type.
- Don't put white text on signal orange (fails contrast).
- Don't add shadows, gradients, or glows to UI. Exceptions are art only: the sphere's radial highlight, flat (unblurred) ground shadow ellipses, and the marquee's edge-fade mask. Every seam between bands stays hard.
- Don't introduce new accent hues. The palette is carbon, eggshell/bone, orange and seafoam, plus `art-sun` yellow for art only.
- Don't autoplay sound or add audio files; tones come from a click and Web Audio.
- Don't add a looping animation without the `.motion-loop` class.
- Don't use em or en dashes as punctuation in UI copy.
- Don't add `<style>` blocks to components. Styles live in Tailwind classes or `global.css`.
- Don't add fonts or weights casually. Page weight is part of the brand.
- Don't show measured performance numbers unless they are complete and correct.

## Surfaces

| Level | Light | Dark | Purpose |
|-------|-------|------|---------|
| 1 Canvas | `#fbfaf6` | `#12130f` | Page background |
| 2 Surface | `#f2efe8` | `#1b1c18` | Cards, pills, code |
| 3 Line | `#e4dfd6` | `#3c3c38` | Hairlines, illustration collar |
| Band, cool | `#a5d3d4` | `#1d2b2b` | Expertise section |
| Band, loud | `#ff5000` | `#ff6a2b` | CTA section |

## Imagery

Geometry over pictures. The hero's CSS 3D circle, triangle and square are the signature visual; the same three forms reappear flat as skill markers and as the placeholder for unannounced projects. Photographs are limited to the logo-clipped portrait and side-project screenshots. Brand logos are monochrome. No stock photography, no icons beyond text glyphs (`→`, `↗`, `◐`, `♪`), and no WebGL. Blog posts may contain their own screenshots and slides; `.prose` gives them a 16px radius.

## Layout

A single 1280px `.shell` column with 20/40/64px gutters, interrupted by full-bleed color bands with hard seams. Homepage order:

1. **Header:** logo, availability pill (`desk` only), Experience and Projects (`md` and up), Writing, theme toggle, Get in touch.
2. **Hero (canvas):** mono kicker and three-line light headline on the left, Bauhaus shapes with sound and motion toggles on the right (`md:grid-cols-[1.25fr_1fr]`). Below a hairline: avatar and name with the intro on the left, pill buttons on the right.
3. **Brand marquee (hairline strip).**
4. **Expertise (seafoam band):** three numbered items.
5. **Services (canvas):** section heading plus two taupe cards.
6. **Experience (canvas, hairline above):** stats, then the role timeline.
7. **Skills (taupe band).**
8. **Side projects (canvas):** three cards.
9. **Writing and talks (canvas, hairline above):** heading on the left, latest three posts on the right.
10. **CTA (orange band).**
11. **Footer.**

Inner pages (writing list, post) use the same header and footer with a narrower reading column (`max-w-240` for the list, `72ch` for articles). Everything collapses to one column below `md`.

## Agent Prompt Guide

**Quick color reference**
- Text: `fg` (#12130f light / #e4dfda dark), secondary `muted`.
- Background: `bg` (#fbfaf6 / #12130f), cards `surface` (#f2efe8 / #1b1c18).
- Border: `line` (#e4dfd6 / #3c3c38).
- Accent surface: `accent` (#ff5000 / #ff6a2b); accent as text: `accent-ink`.
- Cool band: `cool` (#a5d3d4 / #1d2b2b).
- Primary action: `bg-fg text-bg` pill.

**Example component prompts**

1. *Section heading:* a `.label-mono text-muted` kicker ("How we work together"), then an `h2` in `font-display font-light text-[clamp(2rem,4.5vw,3.25rem)] tracking-[-0.035em] leading-[1.05]`.
2. *Primary button:* `rounded-full bg-fg text-bg px-6 py-3 text-[0.9375rem] font-medium no-underline hover:opacity-80`, with an outline sibling `rounded-full border border-line bg-bg text-fg hover:bg-surface`.
3. *Feature card:* `rounded-card bg-surface p-8 md:p-10` containing a kicker pill with an orange dot, a light display title, a `text-muted` paragraph, and a mono arrow link (`→ Book a workshop`) with an orange 2px underline.
4. *Full-bleed band:* `<section class="bg-cool"><div class="shell py-20 md:py-24">…</div></section>`, with secondary text in `text-on-cool-muted`. For the loud band use `bg-accent text-on-accent`.
5. *Dated list row:* a whole-row link in a grid `sm:grid-cols-[7.5rem_1fr_auto]`: mono date, 18px title that hovers to `accent-ink`, and a mono tag (`External ↗`).

## Quick Start

Copied from `src/styles/global.css`, which is the source of truth.

```css
[data-theme='light'] {
  --bg: #fbfaf6; /* eggshell canvas */
  --surface: #f2efe8; /* taupe card / band */
  --line: #e4dfd6; /* stone hairline */
  --fg: #12130f; /* warm carbon ink */
  --muted: #5f5a52; /* 6.5:1 on bg, 5.9:1 on surface */
  --accent: #ff5000; /* signal orange, surfaces only */
  --accent-ink: #b83a00; /* orange for text, 5.5:1 on bg */
  --on-accent: #12130f;
  --cool: #a5d3d4; /* seafoam band */
  --on-cool-muted: #2f3a3a; /* 7.2:1 on cool */
  --art-cool: #a5d3d4; /* seafoam for illustration shapes */
  --art-sun: #f2b31b; /* Bauhaus yellow, art only */
  --subtle: rgba(18, 19, 15, 0.06);
}
[data-theme='dark'] {
  --bg: #12130f; /* midnight carbon */
  --surface: #1b1c18;
  --line: #3c3c38; /* charcoal vein */
  --fg: #e4dfda; /* bone glow */
  --muted: #a39d95; /* 6.9:1 on bg */
  --accent: #ff6a2b;
  --accent-ink: #ff8a5c; /* 8.0:1 on bg */
  --on-accent: #12130f;
  --cool: #1d2b2b; /* deep seafoam band */
  --on-cool-muted: #a9bdbc; /* 7.4:1 on cool */
  --art-cool: #7fb3b4;
  --art-sun: #f5c242;
  --subtle: rgba(228, 223, 218, 0.06);
}
@theme {
  --color-bg: var(--bg);
  --color-surface: var(--surface);
  --color-line: var(--line);
  --color-fg: var(--fg);
  --color-muted: var(--muted);
  --color-accent: var(--accent);
  --color-accent-ink: var(--accent-ink);
  --color-on-accent: var(--on-accent);
  --color-cool: var(--cool);
  --color-on-cool-muted: var(--on-cool-muted);
  --color-art-cool: var(--art-cool);
  --color-art-sun: var(--art-sun);
  --color-subtle: var(--subtle);

  --font-display: 'Geist', system-ui, sans-serif;
  --font-sans: 'Geist', system-ui, sans-serif;
  --font-mono: 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace;

  --radius-card: 24px;

  --breakpoint-desk: 1100px;
}
```

## Files

- `src/styles/global.css`: tokens, `@theme` mapping, base, focus, motion, `.prose`, `.c-slide`, `.label-mono`, `.shell`, `.clip-logo`.
- `src/layouts/Layout.astro`: font preloads, no-flash theme script, canonical URL, and sharing tags (Open Graph and Twitter card). Props: `title`, `description`, `type` (`website` or `article`), `image`, `imageAlt`. The site URL comes from `site` in `astro.config.mjs`.
- `public/og.png`: 1200×630 sharing image (headline, the three shapes, name), about 58 KB.
- `src/components/SiteNav.astro`, `src/components/SiteFooter.astro`: shared chrome.
- `src/lib/posts.ts`: post listing helper (glob relative to `src/lib`).
- `src/components/BauhausShapes.astro`: hero 3D shapes, Web Audio voices, sound and motion toggles.
- `src/components/BrandMarquee.astro`: logo strip.
- `src/data/profile.ts`: experience, skills, languages, projects, brands.
- `public/logos/brands/`: brand logos. `src/assets/projects/`: project screenshots.
- `src/pages/index.astro`, `src/pages/posts/index.astro`, `src/layouts/BlogPost.astro`: page compositions.
