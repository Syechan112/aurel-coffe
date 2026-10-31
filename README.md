# AUREL — The Artisanal Roastery

![AUREL Logo](public/favicon.svg)

> **Tagline:** Every Bean Has a Story. Every Cup, a Character.

A responsive specialty coffee brand website with interactive flavor discovery. This MVP demonstrates a taste‑based coffee recommendation engine, editorial brand storytelling, and a fully accessible frontend experience.

**Live demo:** [http://localhost:3000](http://localhost:3000)

## Features (MVP P0)

- **Homepage** – Editorial dark hero, taste‑family bento, Flavor Wheel preview, featured coffees
- **Flavor Explorer** – Interactive flavor‑family wheel, URL‑synced filters, deterministic recommendation engine
- **Coffee Collection** – Filterable grid with origin, roast, process, flavor‑family filters, mobile‑first filters drawer
- **Coffee Detail** – Sensory profile visualization, tasting notes, origin & process metadata
- **Responsive Navigation** – Accessible sticky header with mobile drawer, semantic footer

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build:** Vite 6 + Tailwind CSS v4 + @tailwindcss/postcss
- **Routing:** React Router 6
- **Icons:** Lucide React
- **State:** React hooks + URL query params as source of truth
- **Testing:** TypeScript compilation, Vite production build

## Project Structure

```
src/
├── app/                # App shell, router, providers
├── components/         # Reusable UI components
│   ├── layout/        # Header, Footer
│   ├── ui/            # Button, Container, Section, Badge, SensoryProfile
│   ├── coffee/        # CoffeeCard
│   └── flavor/        # FlavorWheel, FlavorSelector
├── features/          # Feature‑specific logic (currently in lib/)
├── lib/               # Pure utilities, recommendation engine
├── pages/             # Route‑level page components
├── data/              # Typed mock catalog, flavor families, options
├── types/             # Shared TypeScript types
└── styles/            # Global CSS with Tailwind
```

## Catalog Data Model

The demo includes 8 fictional specialty coffees with structured attributes:

- **Flavor families:** `fruity`, `nutty`, `bold`, `floral`
- **Roast levels:** `light`, `medium`, `dark`
- **Processes:** `washed`, `natural`, `honey`, `other`
- **Sensory profiles:** acidity, body, sweetness, bitterness (1‑5 scales)

## Recommendation Engine

- **Hard filters:** Roast, process, acidity & body ranges (AND)
- **Flavor matching:** Selected families match via OR within families
- **Scoring:** `matchedFamilies / selectedFamilies` (0‑1)
- **Ranking:** Score → matching‑note count → alphabetical name
- **Deterministic:** No random fallback; empty state if no matches

## Design System

- **Colors:** `--ink` (#332A24), `--paper` (#F3EDE2), `--oat` (#D7C6A8), `--olive` (#77765B)
- **Typography:** Serif headlines, sans‑serif UI, editorial eyebrow uppercase
- **Responsive:** Mobile‑first, 320‑767‑1024‑1440+ breakpoints, fluid typography
- **Layout:** Editorial asymmetry, dark hero → light bento → dark feature panel rhythm

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## P0 MVP Status

✅ All core user flows functional  
✅ URL‑synced filter state, persistence on refresh  
✅ Accessible mobile navigation, keyboard navigation  
✅ Responsive at 320‑1920px, reduced‑motion respect  
✅ No fake purchase CTA, honest empty states  
✅ Build passes, TypeScript validates  

## Next Steps (P1 / P2 per PRD)

- **Comparison Page** – Side‑by‑side attribute matrix
- **Brew Studio** – Ratio calculator, recipe guide
- **Our Craft, Brew Journal, About, Contact** – Content pages
- **Wishlist** – Local‑storage persistent shelf
- **Quiz** – Guided discovery questions

## Demo Notes

- All coffee imagery uses placeholder placehold.co fallbacks
- Brand is fictional; all content for demonstration only
- No real checkout, payments, or e‑commerce logic

## Credits

- **Design direction:** Inspired by premium editorial coffee websites
- **Implementation:** Follows PRD.md and DESIGNS.md specifications
- **Accessibility:** WCAG 2.2 AA targets, keyboard‑first navigation
- **Performance:** Core Web Vitals optimized, lazy‑loading images

---

**Documentation:** PRD.md, DESIGNS.md  
**Implementation plan:** TODOS.md  
**License:** Internal demonstration only
