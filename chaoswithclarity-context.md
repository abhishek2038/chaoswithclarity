# chaoswithclarity.com — Project Context for Claude

Use this file to give Claude full context about the site before asking for help.

---

## What This Site Is

**chaoswithclarity.com** is Abby's personal creative and professional website.
Abby is a writer, poet, and fractional CFO. The site is her home for essays,
poetry, a newsletter, and paid offerings. The brand voice is honest, unhurried,
philosophical — not self-help, not motivational, not corporate.

**Tagline:** Short, honest ideas about ego, experience, and being fully alive.
**Audience:** People who think too much and feel even more.

---

## Tech Stack

| Thing | Detail |
|---|---|
| Framework | Astro 5 (static site) |
| Adapter | `@astrojs/cloudflare` |
| Deployment | Cloudflare Workers via GitHub Actions |
| Repo | `~/Downloads/Claude/chaoswithclarity` |
| Fonts | Fraunces (editorial serif, variable) + DM Sans (body, variable) — Google Fonts |
| Icons | Phosphor Icons (`ph ph-*`) via unpkg CDN |
| Email | Kit (ConvertKit) — form ID to be added to `join.astro` |

**To deploy:** `cd ~/Downloads/Claude/chaoswithclarity && git push origin main`
GitHub Actions handles the build and Cloudflare Workers deployment automatically.

---

## File Structure

```
src/
  layouts/
    Layout.astro        ← global nav, footer, poem modal, CSS variables, JS
  pages/
    index.astro         ← homepage
    writings.astro      ← all poems + essays
    about.astro         ← about Abby
    offerings.astro     ← free + paid offerings
    join.astro          ← newsletter signup (Kit form)
public/
  images/
    abby-video.mp4      ← hero video (now in footer)
    abby-mountains.jpg  ← about page photo
    abby-photo.jpg      ← about page photo 2
    og-default.png      ← social share image
```

---

## Design System — CSS Variables

All in `src/layouts/Layout.astro` `:root`. **Never hardcode hex values** — always use these variables so the theme stays consistent across all pages.

```css
:root {
  /* Forest backgrounds (dark sections) */
  --olive-deep:    #152820;   /* deepest — footer bg */
  --olive-dark:    #1c3828;   /* hero bg, newsletter bg */
  --olive-mid:     #2e4e3c;

  /* Accent — warm coral/salmon */
  --olive-accent:  #c4513a;   /* primary accent, CTAs, borders */
  --olive-bright:  #d46040;   /* hover state */
  --olive-light:   #e09070;

  /* Light backgrounds */
  --bg:            #f5ece0;   /* main page bg — warm linen */
  --bg-alt:        #ede3d4;   /* alternate sections */
  --bg-card:       #fdf8f2;   /* card bg */

  /* Text */
  --text:          #180e0a;   /* near-black warm — on light bg */
  --text-muted:    #7c6858;
  --text-faint:    #b8a898;
  --text-on-dark:  #f5ece0;   /* cream — on dark/forest bg */
  --text-dim-dark: #d4b8a0;   /* dimmed cream — on dark bg */

  /* Structure */
  --gold:          #c4513a;   /* alias for --olive-accent */
  --border:        #ddd0c0;   /* warm tan border — light sections */
  --border-dark:   #2a3e30;   /* dark border — forest sections */
}
```

**Section colour logic:**
- Dark forest (`--olive-dark`) → text must be `--text-on-dark` / `--text-dim-dark`
- Light linen (`--bg`, `--bg-alt`) → text is `--text` / `--text-muted`
- Coral (`--olive-accent`) → text is `--text-on-dark`

---

## Typography Rules

- **Headings:** `font-family: 'Fraunces', serif` — always. Variable font, use `font-weight: 800` for display, `400` italic for editorial.
- **Body:** `font-family: 'DM Sans', sans-serif`
- **Overlines/labels:** `font-size: 0.65–0.68rem; letter-spacing: 0.26–0.30em; text-transform: uppercase; font-weight: 600`
- **Hero type:** `font-size: clamp(7rem, 20vw, 24rem)` — bleeds off the right edge intentionally
- **Display headings:** `font-size: clamp(3rem, 8vw, 8–9rem)` for section titles

---

## Pages — What Each One Does

### `index.astro` — Homepage

Four sections, each a full-bleed colour block:

1. **Hero** — `--olive-dark` bg. "CHAOS / with / CLARITY" in giant coral type (`20vw`), bleeding off the right edge. Entry animation: CHAOS slides from left, CLARITY from right. Bottom bar: tag + two links.
2. **Statement** — `--olive-accent` (coral) bg. "You feel it / before you / name it" at `8vw` in cream. Four list items with semi-transparent borders.
3. **About + Poem** — `--bg` (linen). Two-column grid: left = bio quote + body + link. Right = featured poem card with `data-poem-card` (opens modal).
4. **Newsletter** — `--olive-dark` bg. Big italic Fraunces title at `8vw`, coral CTA button.

### `writings.astro` — All Writing

Animated poem/essay cards with scroll-triggered staggered fade-up (Intersection Observer). Sections: Freedom & Observer (3-col grid), Introspection (2-col), Love & Eyes (3-col), Essays (2-col, currently "coming soon").

**Poem card system:** Each `<article>` has `data-poem-card` + data attributes:
- `data-title` — poem title
- `data-date` — date string
- `data-poem` — full poem text (line breaks preserved)
- `data-reflection` — optional reflection note

Clicking any card opens the global poem modal in `Layout.astro`.

### `about.astro` — About Abby

Photo + bio grid. Key narrative: 9 years in finance (EY → fractional CFO) → discovered writing. CFO work lives at `abbyjain.com` (separate site).

### `offerings.astro` — Offerings

**Free:**
- F1: Letters from the Runway (newsletter) → `/join`
- F2: Library of Essays & Reels → `/writings`
- F3: Chaos Notes → `/writings`

**Paid:**
- 01: Soul + Strategy — 90-min 1:1 session, ₹15,000 → **Calendly link needed** (replace `https://calendly.com/abby/soul-strategy`)
- 02: Chaos Circles — small group, 6 weeks → waitlist via `/join`
- 03: Letters from the Edge — poetry collection PDF → **Gumroad/Stripe link needed** (replace `https://stripe.com`)

### `join.astro` — Newsletter Signup

Kit (ConvertKit) embed form. **Form ID needed** — replace `YOUR_FORM_ID` with the actual Kit form ID.

---

## Global Components (Layout.astro)

### Navigation
Fixed top bar. Logo "Chaos With Clarity" + links: Writing, Work with Abby, About, Get the Letters (CTA with `--olive-accent` bg). Mobile: hamburger menu.

### Poem Modal
`#poem-modal` — triggered by clicking any `[data-poem-card]` element. JS reads `data-title`, `data-date`, `data-poem`, `data-reflection` from the clicked card and populates the modal. Close via ✕ button, backdrop click, or Escape key. Backdrop: `rgba(21,40,32,0.93)` (deep forest).

### Footer
- **Video strip** — `abby-video.mp4` plays full-width at `40vh`, loops first 5 seconds, fades into footer bg via gradient overlay
- **Links row** — copyright + navigation + social links + email

---

## Things Still To Do

| Task | Where | What to replace |
|---|---|---|
| Kit form ID | `join.astro` | Replace `YOUR_FORM_ID` |
| Calendly link | `offerings.astro` line ~116 | Replace `https://calendly.com/abby/soul-strategy` |
| Gumroad/Stripe link | `offerings.astro` line ~159 | Replace `https://stripe.com` |
| Essay content | `writings.astro` | 4 essay cards currently say "Coming soon" |
| OG image | `public/og-default.png` | Replace with real social share image |
| Real testimonial | `offerings.astro` | "A reader" placeholder quote |

---

## Content To Add

- **Essays (4 planned):** Cards exist in the Essays section of `writings.astro` but content is "coming soon." Each needs `data-poem` filled in with actual content.
- **Chaos Notes:** Short 1–3 paragraph reflections — a future section.

---

## Brand Voice Guidelines

- **Tone:** Honest, direct, unhurried. Never motivational-poster energy.
- **Do:** Use "I" freely. Short sentences. Observations over advice.
- **Don't:** "Step 1, Step 2." Exclamation marks. "Transform your life." Jargon.
- **Writing examples on the site:**
  - *"Spreadsheets couldn't answer the chest ache. So I write."*
  - *"Clarity without depth is just noise with good formatting."*
  - *"You are so small, yet vast the roles you play / Trying to be more as life slips away."*

---

## Monetisation Roadmap

| Stage | What | Status |
|---|---|---|
| Now | Poetry PDF on Gumroad (Letters from the Edge) | Link needed |
| Now | Soul + Strategy bookings via Calendly | Link needed |
| Soon | Email list growth (Kit) | Form ID needed |
| 3 months | Paid newsletter tier via Kit | After 500 subscribers |
| 6 months | Chaos Circles cohort (6 ppl × ₹5–8k, 6 weeks) | Waitlist open |
| 12 months | Physical poetry book / workshop | After list grows |

---

## Traffic Strategy

- **SEO:** Publish 1 long essay/month (1,500–2,500 words) targeting searches like "why success feels empty," "minimalism for ambitious people," "how to stop overthinking"
- **Instagram/YouTube → site:** Every post/reel should verbally CTA to link in bio / essays page
- **Lead magnet:** A free PDF ("5 Poems for When Everything Looks Fine But Feels Wrong") in exchange for email sign-up
- **Substack Notes:** Cross-post short pieces for built-in discovery
- **Pinterest:** Poem-as-image cards drive long-tail traffic for years
- **LinkedIn:** Finance + philosophy angle — "former EY auditor who writes poems" is a story that travels

---

*Last updated: March 2026*
