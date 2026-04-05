# Chaos With Clarity — Design System

## Overview

Chaos With Clarity is a poetry/essay website by Abby. Built with Astro, deployed on Cloudflare Pages via GitHub. The design follows a **Forest + Earth + Dark Red** palette with editorial typography.

---

## Color Palette

### Dark Sections
| Color | Hex | Usage |
|-------|-----|-------|
| Deep green | `#1a3a2a` | Hero backgrounds, footer, essay section, newsletter CTA, dark panels |
| Darker green | `#142e22` | Deepest accent (about story section) |
| Plum | `#5a2848` | Variety dark sections (collection pull quote, join hero, about "What is CWC") |

### Light Sections (alternate these for rhythm)
| Color | Hex | Usage |
|-------|-----|-------|
| Warm cream | `#faf6ef` | Default page background, alternating sections |
| Sand | `#f0e8dc` | Alternating sections, form backgrounds |
| Blush rose | `#f5ece8` | Alternating sections (being-human, love, intro panels) |
| Sage green | `#eaf0e8` | Alternating sections (freedom, how-to-use, poem cards) |

### Text Colors (Dark Red Family)
| Color | Hex | Usage |
|-------|-----|-------|
| Primary text | `#4a1a1a` | Body text, headings — dark maroon/red |
| Muted text | `#6a3535` | Secondary text, descriptions |
| Faint text | `#8a6560` | Tertiary text, dates, labels |
| On-dark text | `#faf6ef` | Headings on dark backgrounds |
| On-dark muted | `#c8b8a0` | Body text on dark backgrounds |

### Accent Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Coral | `#e86850` | CTA buttons, overline labels, action links |
| Coral dark | `#d05840` | Button hover states |
| Gold | `#d4a04a` | "With" text, story headers, highlight numbers, gold accents on dark |
| Gold light | `#e8c170` | Brighter gold on plum/dark backgrounds |
| Burgundy | `#6b1a2a` | Card borders, poem accents, labels on light, primary buttons on light |
| Teal | `#1a5a5a` | Icons and labels in "how to use" section |

### Borders
| Color | Hex | Usage |
|-------|-----|-------|
| Border | `#ddd0c0` | Card borders, dividers, section rules |
| Border dark | `#c8b8a0` | Stronger borders, border on dark sections |

---

## Typography

### Fonts
- **Headings:** Fraunces (variable, 400–800 weight, italic supported)
- **Body:** DM Sans (300–600 weight)
- Loaded from Google Fonts with `display=swap`

### Conventions
- Overline labels: 0.66–0.68rem, uppercase, letter-spacing 0.28–0.32em, weight 600
- Hero headings: clamp(3.5rem, 9vw, 8rem), weight 800, letter-spacing -0.03em
- Section headings: Fraunces, weight 700, 1.15–1.5rem
- Body text: DM Sans, 0.9–1rem, line-height 1.65–2.1
- Card titles: Fraunces, 1.3–1.55rem, weight 800
- CTA buttons: 0.72rem, uppercase, letter-spacing 0.15–0.18em, weight 600–700

---

## Layout Patterns

### Section Rhythm
Dark and light sections alternate to create visual rhythm:
1. **Dark hero** (green or plum) — every page starts with one
2. **Light section** (cream/sand/rose/sage) — content sections alternate between these
3. **Dark accent section** — breaks up long light stretches (essays, pull quotes, CTAs)
4. **Dark footer** — consistent green footer on all pages

### Section Backgrounds — Writings Page
```
#being-human           → #f5ece8 (blush rose)
#the-inward-turn       → #faf6ef (cream)
#pain-and-transformation → #f0e8dc (sand)
#freedom-and-becoming  → #eaf0e8 (sage)
#love-nature-and-the-world → #f5ece8 (blush rose)
#essays                → #1a3a2a (dark green)
.work-with-abby        → #f0e8dc (sand)
```

### Section Backgrounds — Collection Page
```
Section 1 (Full Collection)  → #f5ece8 (blush rose)
Section 2 (Free Chapbooks)   → #faf6ef (cream)
Pull quote                   → #5a2848 (plum)
Section 4 (Poem Cards)       → #eaf0e8 (sage)
Section 5 (What you get)     → #faf6ef (cream)
Section 6 (Coming Soon)      → #f0e8dc (sand)
Bottom CTA                   → #1a3a2a (dark green)
```

### Grid System
- Max content width: `72rem`
- Page padding: `3rem` (desktop), `1.5rem` (mobile ≤480px)
- Poem card grids: 3 columns at desktop, 2 at ≤960px, 1 at ≤580px
- Card gap: `2rem`

---

## Component Patterns

### Cards
- Background: `#ffffff`
- Border: `1px solid var(--border)`
- Border-left accent: `3px solid #6b1a2a` (burgundy) for poems, `3px solid #d4a04a` (gold) for essays
- Border-radius: `8px` (cards), `10px` (featured cards), `12px` (info panels)
- Shadow: `0 2px 16px rgba(26,58,42,0.1)`
- Hover: `translateY(-9px)` with elevated shadow

### Buttons
- **Primary CTA (on dark):** `background: #e86850` (coral), `color: #fff`, `border-radius: 4px`
- **Primary CTA (on light):** `background: #6b1a2a` (burgundy), `color: #f0f0f0`
- **Ghost button (on dark):** `border: 1px solid rgba(255,255,255,0.2)`, `color: #c8b8a0`
- **Outline button (on light):** `border: 1px solid var(--border)`, `color: var(--text-muted)`
- Hover: darker shade + `translateY(-2px)`

### Free Badge
- `color: #6b1a2a`, `background: #f0ddd8`, uppercase, tiny text

### Nav
- Fixed, `background: #faf6ef`, `border-bottom: 1px solid #ddd0c0`
- Logo text: burgundy `#6b1a2a`, Fraunces small-caps
- CTA button: green-deep background
- Height: `4.25rem`

### Footer
- `background: var(--green-deep)`, `color: var(--text-on-dark-muted)`
- Padding: `2.5rem 3rem`

### Poem Modal
- Overlay: `rgba(26,58,42,0.6)` with `backdrop-filter: blur(10px)`
- Inner: white bg, `border-left: 4px solid var(--green-deep)`
- Close button top-right

---

## Poems Data (poems.ts)

### Section Accents (CSS variables)
```
--sec-human:   #e86850  (coral)
--sec-inward:  #1a3a2a  (green)
--sec-awaken:  #2a8e6e  (emerald)
--sec-pain:    #c45050  (red)
--sec-freedom: #2a5a3a  (mid green)
--sec-love:    #d4a04a  (gold)
--sec-essay:   #5a2848  (plum)
```

### Taster Strategy
Each section should have **3 taster poems** (shown as full cards with preview lines). Remaining poems appear as compact title chips in a "more poems" row linking to the collection page.

---

## File Structure
```
src/
  layouts/Layout.astro    — Global CSS variables, nav, footer, modal, fonts
  pages/
    index.astro           — Home page (hero, for-you, featured poem, newsletter)
    writings.astro        — All poems + essays (uses poems.ts data)
    collection.astro      — Shop page (chapbooks, cards, downloads)
    about.astro           — About Abby (story, mark, how-to-use)
    join.astro            — Newsletter signup
  data/poems.ts           — All poem text, sections, essays
public/images/            — Photos and video
```

## Deployment
- **Framework:** Astro (static site)
- **Hosting:** Cloudflare Pages via GitHub
- **Forms:** FormSubmit.co (contact), Kit.com/ConvertKit (newsletter)
- **Icons:** Phosphor Icons v2.1.1 (CDN)
- **Shop:** Gumroad links for digital downloads

## Key Design Principles
1. **Dark red text** — maroon/burgundy body text, not black
2. **Section color variety** — alternate blush rose, cream, sand, sage (never monotone)
3. **Dark sections for impact** — deep green and plum for heroes, CTAs, essays
4. **Warm earth tones** — nothing grey, always warm-shifted
5. **Editorial typography** — Fraunces for personality, DM Sans for readability
6. **3 tasters per section** — enough to fill the grid, rest as teaser chips
