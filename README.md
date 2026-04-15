# Daniel's Portfolio — MVP

Minimal, dark, fast. Built with Next.js 15 + TypeScript + Tailwind CSS v4.

---

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel

```bash
npx vercel
# Follow prompts — it will detect Next.js automatically
```

---

## What to edit before launching

Search for `// EDIT THIS LATER` across all files. Here's the list:

### `app/layout.tsx`
- [ ] Your full name in the `<title>`
- [ ] Your personal tagline for SEO in `description`
- [ ] Your domain in `metadataBase`
- [ ] Your og:title and og:description
- [ ] Add `/public/og-image.png` (1200x630px screenshot or branded image)

### `components/Hero.tsx`
- [ ] Status badge text (Available / Open to offers / etc.)
- [ ] Your first and last name
- [ ] Your one-liner / tagline
- [ ] Your location or specialty (optional)

### `components/ValueProp.tsx`
- [ ] Rewrite the 3 pillar descriptions in your own voice

### `components/CaseStudy.tsx`
- [ ] SaaS product name
- [ ] Product tagline
- [ ] Replace placeholder image with `/public/saas-screenshot.png`
- [ ] Actual tech stack array
- [ ] The Problem paragraph
- [ ] Key Decision paragraph
- [ ] Result paragraph + real metrics if you have them
- [ ] Live product URL

### `components/Projects.tsx`
- [ ] Project 1: name, description, URL, tags
- [ ] Project 2: your next idea or a WIP

### `components/Footer.tsx`
- [ ] What you're open to (roles / consulting / freelance / cofounder)
- [ ] Your email: `mailto:daniel@youremail.com`
- [ ] LinkedIn URL
- [ ] GitHub URL
- [ ] Your full name in the copyright line

---

## File Structure

```
portfolio/
├── app/
│   ├── layout.tsx     # Root layout + metadata
│   ├── page.tsx       # Main page (assembles sections)
│   └── globals.css    # Design system (colors, tokens, utilities)
├── components/
│   ├── Hero.tsx       # Name, tagline, CTAs
│   ├── ValueProp.tsx  # 3 value pillars
│   ├── CaseStudy.tsx  # Your SaaS — the centerpiece
│   ├── Projects.tsx   # Project cards
│   └── Footer.tsx     # Contact + socials
├── public/
│   └── (add og-image.png and saas-screenshot.png here)
└── README.md
```

---

## Design Tokens (globals.css)

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#0a0a0a` | Page background |
| `--bg-card` | `#111111` | Card backgrounds |
| `--accent` | `#00e5a0` | Green accent — change freely |
| `--text-primary` | `#f0f0f0` | Headings |
| `--text-secondary` | `#888888` | Body text |
| `--text-muted` | `#555555` | Labels, mono text |
| `--border` | `#1f1f1f` | Card borders |

To change the accent color, edit `--accent` in `globals.css`.
