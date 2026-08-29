# ISRAAYA — React + TypeScript + Tailwind

Premium editorial e-commerce site for Israaya India, built with React 19,
TypeScript, Vite, Tailwind CSS v4, React Router, and Framer Motion.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
```

## Structure

```
src/
  components/   Nav, Footer, Cursor, ImageSlot, PageHero
  pages/        Home, Shop, Product, Lookbook, Stories, Story, About
  data/         products.ts, stories.ts — edit these to add/change products & journal entries
  lib/          textures.ts — placeholder art-direction gradients
  index.css     design tokens (colors, fonts) via Tailwind v4 @theme
```

## Design tokens

Colors and fonts are defined once in `src/index.css` under `@theme` and used
throughout via Tailwind classes (`bg-ivory`, `text-wine`, `font-display`, etc.):

| Token      | Hex       |
|------------|-----------|
| ivory      | #F5F1E8   |
| peach      | #E8B8A7   |
| rose       | #C9827A   |
| wine       | #7D1638   |
| maroon     | #570D26   |
| gold       | #B89A5B   |
| espresso   | #2C211D   |

## Imagery

Every image slot on the site currently shows a **real, free-to-use photo**
sourced from Unsplash (free under the [Unsplash License](https://unsplash.com/license)),
wired in via `src/lib/images.ts`:

- **Brand/atmosphere imagery** (hero, chapter storytelling, collection cards,
  craft section, About, Stories) uses real architecture and craft photography
  — heritage archways, carved doors, tile patterns, thread/loom close-ups,
  marigolds — that genuinely matches the brand mood.
- **Product-specific imagery** (Shop grid, Product gallery, Lookbook,
  Featured Edit) uses **random fabric/textile close-ups** as stand-ins, since
  no real garment photography exists yet for Komal Tara, Sona Pankh, etc.
  These are placeholders in spirit even though they're real photos — treat
  every product image as temporary until you shoot the actual pieces.

To swap any image, edit `src/data/products.ts` / `src/data/stories.ts` (for
product and journal imagery) or the relevant page's `IMAGES.xxx` reference
(for brand/atmosphere imagery), and update `src/lib/images.ts` with the new
URL or a local asset path:

```tsx
<ImageSlot texture="t1" label="Hero" image="/images/hero-nikhaar.jpg" />
```

`texture` is the gradient fallback shown only if `image` is ever omitted, so
removing an image never breaks the layout.

## Routes

- `/` — Home
- `/shop` — Shop / collection grid with filters
- `/product/:slug` — Product detail page
- `/lookbook` — Editorial masonry lookbook
- `/stories` — Journal listing
- `/stories/:slug` — Single journal entry
- `/about` — About / brand story

## Still to wire up

- Real cart/checkout logic (Add to Bag is currently UI-only)
- Search and account flows
- Real product photography in place of the random fabric-texture stand-ins
