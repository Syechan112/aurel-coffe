# DESIGNS.md

# AUREL — The Artisanal Roastery

> **Design specification v1.0** · 27 October 2026  
> **Status:** Ready for design and frontend implementation  
> **Companion document:** `PRD.md` (product scope, functionality, data, acceptance criteria)  
> **Reference:** User-provided coffee website screenshot. Use **layout grammar only**, not its content, brand, text, photographs, product packaging, or exact arrangement.

---

## 1. Purpose and design contract

This document is the **visual and interaction source of truth** for AUREL. It translates the approved PRD into implementable page compositions, reusable components, responsive rules, and visual QA criteria. It does not supersede the PRD's feature requirements or invent commerce, rewards, or store-location capabilities.

**Core idea:** AUREL feels like a small, carefully art-directed specialty roastery with a digital tasting room. It combines the confidence of a premium editorial publication with the usability of a modern product catalog.

**Design pillars:**

1. **Product first:** Authentic coffee photography and clearly legible information, not decorative effects, establish value.
2. **Curated asymmetry:** Large visual anchors are balanced by smaller supporting modules; layouts are deliberately composed, not random masonry.
3. **Warm restraint:** A limited earthy palette, expressive typography, restrained rounding, and generous negative space.
4. **Discovery is functional:** The Flavor Wheel changes filters, matches, and product results; it is not a spinning ornament.
5. **One coherent system:** All pages share grids, card anatomy, spacing, typography, focus behavior, and navigation patterns.
6. **Responsive by design:** Mobile is a purpose-built composition, not a shrunken desktop screenshot.

### 1.1 Reference analysis: what to learn, what to reject

| Observed reference pattern | Design principle | Original AUREL translation | Do not copy |
|---|---|---|---|
| Dark introductory area with dominant product visual | Immediate focal hierarchy and premium contrast | A dark **Roastery Stage** hero with a coffee bag, cup, and carefully staged light | Reference logo, Cyrillic copy, food props, exact product staging |
| Compact top navigation inside a wide rounded shell | Navigation belongs to the composition | Thin, aligned header with editorial wordmark and one primary CTA | Exact menu order, header silhouette |
| Light content area after dark hero | Tonal pacing makes sections distinct | Transition from charcoal hero to ivory **Taste Atlas** | Identical section titles and copy |
| Mixed text cards, tall image, and image tiles | Bento composition with clear roles | **Origin & Craft** grid: manifesto, roasting image, process details | Exact card positions or photos |
| Full-width dark feature panel | One high-impact story between grids | **Flavor Invitation** with wheel preview and CTA | Loyalty points, QR promotion, app promotion |
| Repeating product cards | Comparable products need consistent anatomy | **Coffee Collection** with origin, notes, roast and discovery CTA | Existing packaging, prices, names |
| Location imagery grid | Immersive closing storytelling | **From Farm to Roast** documentary gallery | Address/store location content unless PRD later adds it |

**Reference-derived composition rule:** Alternate dense and spacious regions, with one dominant anchor per section and 1–3 supporting elements. Do not reproduce the reference's section sequence pixel-for-pixel; the sequence must serve AUREL's own user journey.

### 1.2 Product constraints

- The **P0 MVP** is Home, Collection, Coffee Detail, and Flavor Explorer. P1/P2 pages may be visually planned but must not masquerade as working features before implementation.
- No checkout, rewards system, QR loyalty, fabricated reviews, fake scarcity, or fictional store addresses presented as factual.
- English-first UI, with text containers able to expand for future localization.
- Images and sample tasting data must be clearly curated and consistent with the underlying catalog.
- Prefer meaningful photographic storytelling over gradients, floating blobs, excessive badges, and stock dashboard patterns.

---

## 2. Creative direction

### 2.1 Brand personality

**Keywords:** intentional, tactile, composed, curious, intimate, grounded, contemporary.  
**Avoid:** rustic cliché, industrial grunge, faux-luxury gold, neon, glassmorphism, noisy gradients, excessive microcopy, generic SaaS cards.

**Creative motif: The Coffee Archive.** Each bean is treated as an edition in a curated archive: numbered collections, subtle ruled lines, small uppercase metadata, and an expressive editorial headline. The product is tangible; its flavor is explorable.

### 2.2 Palette and semantic tokens

| Token | Hex | Primary use |
|---|---|---|
| `--ink` | `#332A24` | Dark hero, main typography, strong borders |
| `--paper` | `#F3EDE2` | Main background, warm surfaces |
| `--oat` | `#D7C6A8` | Primary CTA on dark surfaces, warm details |
| `--olive` | `#77765B` | Restrained editorial accent and data emphasis |
| `--white` | `#FFFCF7` | Card surface and inverse typography when appropriate |
| `--muted-ink` | `#71675D` | Secondary text on light backgrounds |
| `--line` | `#D9D0C4` | Dividers, borders, field outlines |

Semantic variables: `--bg`, `--surface`, `--text`, `--text-muted`, `--border`, `--action-bg`, `--action-text`, `--focus-ring`, `--error`. Validate contrast of **every** foreground/background pairing to WCAG AA; adjust the token if it fails. Do not use `--olive` for tiny low-contrast body text.

**Color distribution:** approximately 65% paper/white, 25% ink, 10% oat/olive. These are art-direction proportions, not hard CSS quotas. Use no decorative gradients.

### 2.3 Typography

- **Display:** an elegant high-contrast serif such as *Cormorant Garamond* or *Fraunces* (choose and test one); use for big storytelling statements, not dense product data.
- **UI / body:** *Manrope* or *DM Sans* (choose one); use for navigation, descriptions, labels, filters, forms, and prices if later introduced.
- **Editorial eyebrow:** sans-serif, uppercase, slightly tracked, 11–12px; never sacrifice readability for style.
- **Fluid display:** `clamp(3rem, 7vw, 7.5rem)` desktop hero; mobile override around `clamp(2.8rem, 11vw, 4.5rem)`.
- **Section heading:** `clamp(2rem, 4vw, 4.5rem)`; **card heading:** 20–28px; **body:** 16–18px; **small text:** 13–14px.
- Body line height 1.5–1.7; display line height ~0.95–1.1. Never force uppercase for paragraphs.
- Keep headings to intentional 2–4-line measures; prose typically 55–75 characters per line.
- Self-host/subset fonts when licensing allows; define reliable fallback stacks and avoid layout shift.

### 2.4 Shape, lines, and depth

- Primary section frames: 20–28px radius on desktop, 16–20px on mobile.
- Product cards: 16–20px; interactive controls: 8–12px or pill where meaningful.
- Borders: 1px warm-gray; separators and typographic hierarchy are preferred to large shadows.
- Shadows: none by default; subtle elevation only for overlays, menus, and focus layers.
- Imagery: preserve natural textures, soft directional light, matte paper, ceramic, roasted beans, and human craft.

---

## 3. Responsive foundation

### 3.1 Viewports and containers

| Range | Layout mode | Container and spacing | Behavior |
|---|---|---|---|
| 320–479px | Small mobile | 16px page gutter; 16–24px section gaps | One-column hierarchy; horizontal scrolling only for clearly indicated carousels |
| 480–767px | Large mobile | 20–24px gutter | One column; occasional 2-up compact metadata tiles |
| 768–1023px | Tablet | 32px gutter | 2-column grids; hero rebalanced; wheel and results may stack |
| 1024–1439px | Desktop | 40–56px gutter; max content width 1280px | 12-column editorial grid |
| 1440px+ | Wide desktop | Centered max width 1280–1360px | Maintain comfortable text measure; no unlimited stretch |

Use CSS grid and `minmax(0, 1fr)` to avoid overflow. Breakpoints respond to component content, not just device names. Test at **320, 360, 375, 390, 430, 768, 820, 1024, 1280, 1440, 1920px** and at 200% zoom.

**Spacing scale:** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px. Section vertical padding: mobile 56–80px; tablet 80–104px; desktop 104–144px. Internal card padding: mobile 16–20px; desktop 24–36px. Use fluid `clamp()` selectively.

### 3.2 Responsive rules that must hold everywhere

1. Never allow horizontal page overflow at 320px; prevent oversized headings and unbreakable metadata.
2. Interactive targets at least 44×44 CSS px; controls must be keyboard accessible and have visible focus rings.
3. On touch devices, no information or action is hover-only.
4. Product imagery uses stable aspect ratios and `object-fit` rules; no stretching, unexpected cropping of labels, or layout shift.
5. Fixed or sticky UI must not obscure headings, form controls, or the bottom of results.
6. Do not rely on viewport height for essential content; mobile browser bars and on-screen keyboards change it.
7. Grids collapse intentionally: 4→2→1 columns where appropriate, not an indiscriminate `grid-cols-1` everywhere.
8. Respect safe-area insets for bottom sheets, sticky controls, and footer spacing.
9. Test landscape mobile, long translated strings, missing imagery, zero results, and reduced-motion settings.
10. All images have meaningful alternative text or are explicitly decorative.

---

## 4. Global shell and navigation

### 4.1 Site header

**Desktop:** left wordmark `AUREL / ROASTERY`; center/right concise links `Discover`, `Collection`, `Our Craft`, `Journal`; distinct CTA `Explore Flavors`. Keep header height ~72–88px and align with the main container. The header may sit inside the dark hero initially and become a solid, high-contrast sticky bar when scrolled. Avoid changing header height during scroll.

**Mobile:** wordmark left; one menu button right. Open an accessible full-width dropdown/drawer with clear links, CTA, close control, escape handling, focus management, and scroll locking while open. Avoid an unreadable compressed desktop nav.

**Active state:** subtle underline or weight change plus `aria-current="page"`; do not use color alone. All links route to real pages/anchors. Unimplemented P1 links are hidden or clearly marked as upcoming, not broken.

### 4.2 Footer

Warm dark surface; large serif sign-off `Good coffee begins with curiosity.`; 2–4 concise columns for Explore, Learn, Brand, and Contact; copyright and policy links only where valid. Mobile: stack groups, maintain visible contact links and sufficient tap spacing. No fabricated social handles.

### 4.3 Shared section grammar

Each major section uses: (a) small index/eyebrow, (b) one headline, (c) short explanation when needed, (d) meaningful visual/content module, and (e) at most one dominant CTA. Not every section needs all five parts. Avoid repeated centered title + four cards layouts.

---

## 5. Homepage: detailed composition

### 5.1 Sequence and desktop wireframe

```text
┌────────────────────────────── 1280px CONTENT FRAME ──────────────────────────────┐
│ HEADER  AUREL                       DISCOVER  COLLECTION  CRAFT    [EXPLORE]      │
├──────────────────────────────────────────────────────────────────────────────────┤
│ HERO / DARK ROASTERY STAGE                                                    │
│ [01 / SPECIALTY ROASTERY]       [LARGE COFFEE STILL LIFE]     [EDITION DETAILS] │
│ A more considered cup.          [dominant visual, 5/12]       [2/12]            │
│ Short brand proposition.        [editorial photo]            origin/notes      │
│ [Discover your flavor →]                                                        │
├──────────────────────────────────────────────────────────────────────────────────┤
│ TASTE ATLAS / LIGHT                                                               │
│ Intro & philosophy [4/12]     Tall coffee image [4/12]    2 stacked tiles [4/12]│
├──────────────────────────────────────────────────────────────────────────────────┤
│ FLAVOR INVITATION / DARK FEATURE                                                │
│ Editorial copy [5/12]        [interactive wheel preview / visual] [7/12]        │
├──────────────────────────────────────────────────────────────────────────────────┤
│ CURATED COLLECTION / LIGHT                                                      │
│ Heading + filters                         [01] [02] [03] [04] product cards     │
├──────────────────────────────────────────────────────────────────────────────────┤
│ ORIGIN & CRAFT / ASYMMETRIC DOCUMENTARY BENTO                                    │
│ [large landscape roasting photo] [manifesto] / [process detail] [origin image]  │
├──────────────────────────────────────────────────────────────────────────────────┤
│ BREWING RITUAL / EDITORIAL TEASER                                                │
│ [close-up image]                 [practical brewing story + journal CTA]         │
├──────────────────────────────────────────────────────────────────────────────────┤
│ FOOTER                                                                          │
└──────────────────────────────────────────────────────────────────────────────────┘
```

This wireframe is **conceptual**, not a literal copy of the reference. Its content order prioritizes discovery and product comprehension over promotional mechanics.

### 5.2 H01 — Roastery Stage hero

**Purpose:** Establish identity and route visitors toward flavor exploration.

- Desktop 12-column composition: copy 4–5 columns; dominant still-life image 5–6 columns; narrow metadata rail 2 columns, or overlap the rail within the image edge if needed.
- Dark ink background with subtle tonal variation created by photography, **not CSS gradients**. Use a photograph of a real-looking unbranded AUREL coffee package and ceramic cup; avoid levitating objects.
- Eyebrow `SMALL BATCH / SPECIALTY COFFEE`; headline `A more considered cup.`; one concise supporting line; primary CTA `Discover your flavor`; secondary text link `Browse the collection`.
- Metadata rail: edition number, region, roast profile, tasting notes sourced from a featured catalog entry. If no real product data, use clearly labeled concept placeholders.
- Keep image dominant but preserve readable copy and safe contrast. Avoid full-width background photography behind dense text.
- **Tablet:** 2-column copy/image, metadata moves beneath image.
- **Mobile:** eyebrow → headline → description → primary CTA → image → compact metadata. No forced 100vh hero; target natural height. Image approximately 4:5 or 1:1. Hide purely decorative annotations if cramped.

### 5.3 H02 — Taste Atlas

**Purpose:** Teach visitors that flavor is discoverable, not intimidating.

- Light background; editorial section heading `A language of flavor.`
- Desktop bento: left stacked philosophy cards (4 columns), central tall macro/bean image (4), right stacked small images or sensory tiles (4). Vary tile heights, but align their outer edges and gutters.
- Content: four grounded flavor families (`Fruity`, `Nutty`, `Bold`, `Floral`) with a one-sentence explanation each; use restrained labels, not four saturated colors.
- **Tablet:** 2-column layout; primary image spans full height or full row depending on crop.
- **Mobile:** intro first; main image second; four flavor cards in 2×2 if labels fit, otherwise 1 column. Do not preserve a cramped desktop masonry pattern.

### 5.4 H03 — Flavor Invitation

**Purpose:** Showcase the website's signature functionality and drive into the full Flavor Explorer.

- One large dark rounded feature panel; left 5 columns for `Find the notes that feel like you.` and concise guidance; right 7 columns for a **functional mini Flavor Wheel** or accessible simplified selector.
- The preview uses the **same data model and selection state** as the full explorer if feasible; no misleading simulated results.
- Show one live matching product teaser with title, origin, and notes. CTA `Open Flavor Explorer`.
- **Mobile:** stack text → interactive selector → result → CTA. Do not require precise radial tapping; use large segmented buttons as an equivalent alternative.
- Provide non-SVG text control alternatives and keyboard operation.

### 5.5 H04 — Curated Collection

**Purpose:** Convert curiosity into product exploration.

- Heading left; `View all coffees` text link right.
- Desktop 4-up product cards, tablet 2-up, mobile 1-up or 2-up **only** when content remains legible at the target width; default 1-up for 320–390px.
- Product card anatomy: image area (stable 4:5 or square) → edition/origin eyebrow → product name → tasting-note line → roast/process metadata → `Explore coffee` action.
- Keep images consistently scaled and art-directed; do not introduce fictional prices if catalog data has none.
- At most 4 featured coffees; selection comes from actual catalog records. Empty state explains no featured coffees are available.

### 5.6 H05 — Origin & Craft

**Purpose:** Explain what makes the roasting process credible.

- Documentary bento: one dominant wide photograph of roasting or sourcing; one editorial manifesto card; two supporting panels on sourcing, processing, or small-batch roasting.
- Desktop composition could be 7/5 with the right side subdivided. Avoid symmetrical repeated image cards.
- **Mobile:** order content by meaning: section title → manifesto → dominant image → supporting process cards. Crop images intentionally, never randomly.
- CTA `Explore our craft` links to the P1 page only when implemented; otherwise use an anchored, fully implemented homepage story.

### 5.7 H06 — Brewing Ritual teaser

**Purpose:** Show that AUREL supports the cup after purchase.

- Two-column image + editorial text, with a single clear link to brewing education when available.
- Feature an authentic V60 or espresso preparation photograph; avoid generic café lifestyle images.
- Mobile stacks image and text, with readable instructions teaser and no horizontal text overlay.

### 5.8 Homepage section rhythm

Alternate dark hero → light bento → dark interactive panel → light product grid → light documentary bento → quiet editorial teaser → dark footer. **Not every section needs a different background**; use whitespace, alignment, and image density to create rhythm.

---

## 6. Flavor Explorer: signature experience

### 6.1 Page composition

- Top: small breadcrumb, title `Find your flavor.`, short instructional copy.
- Desktop: left 5/12 **sticky flavor controls**, right 7/12 **results panel**. Sticky positioning only when panel fits viewport; disable when it would trap controls.
- Primary interactive wheel centered in a well-defined surface. Around it: flavor family labels, selection state, and a plain-language explanation.
- Secondary controls: acidity, body, roast intensity, and optional brewing preference **only if present in PRD data**.
- Results: matching count, clear sort/default order, product cards with `Why it matches` explanation, and `Reset filters`.

### 6.2 Flavor Wheel anatomy

1. Accessible heading and brief instruction.
2. SVG radial sectors with clear selection/hover/focus states.
3. **Equivalent HTML controls** below/beside the wheel: Fruity, Nutty, Bold, Floral.
4. Selected flavor chips and `Clear all`.
5. Live status (`3 coffees match your preferences`) announced politely, not repeatedly on every tiny motion.
6. Matching products with notes and a concise rationale.

**Input model:** click/tap to select; keyboard Tab reaches standard buttons, Space/Enter toggles; Escape dismisses auxiliary tooltips. For multiple flavors, allow additive selection with a visible maximum if required by PRD. Never require dragging or spinning the wheel to discover results.

**Mobile:** text-based flavor selector appears before or alongside a smaller decorative/interactive wheel; results follow immediately below. Do not make users scroll past a giant SVG to see recommendations. Optional collapsible advanced filters must preserve selections.

**States:** default, hover, keyboard focus, selected, loading (if async), empty result, invalid catalog entry, reset, and reduced-motion. Use color + outline/checkmark/label, never color alone.

### 6.3 Matching explanation

Use actual PRD matching rules. Show `Matches your fruity preference because it features berry and citrus notes`, not invented percentages or fake AI certainty. If scoring is exposed, explain what it means and derive it deterministically from data.

---

## 7. Collection page

**Desktop:** editorial heading and short introduction; left filter rail ~240–280px, right 3-column catalog grid. At medium desktop, use 2 columns if cards become narrow. Filters include flavor, origin, roast, process, and other attributes supported by the data model. Top row shows result count, sort control, and active filter chips.

**Tablet:** filters collapse into a disclosure panel above a 2-column grid. **Mobile:** full-width `Filter & sort` button opens a bottom sheet or dialog; visible active-filter chips remain above results. The sheet has Apply, Reset, Close, correct focus behavior, and safe-area padding. Filtering must work without JS animation.

**Card interaction:** entire card may be linked only if nested controls are avoided; otherwise keep one clearly labeled product link. Product cards must have consistent title placement and no layout jumping when note counts differ.

**States:** skeletons only for genuine async loads; meaningful empty state, clear-all action, image fallback, and visible result count.

---

## 8. Coffee Detail page

**Desktop composition:** 7/12 image gallery and 5/12 product narrative panel. The information panel contains origin, product title, concise story, tasting notes, roast/process, acidity/body/sweetness data (where available), and a prominent link back to Flavor Explorer or Collection. Avoid fake purchase buttons in the frontend-only MVP.

**Below the fold:** `The flavor profile` using accessible horizontal scales; `From origin to roast` editorial content; `How to brew` teaser; related coffees selected from structured data.

**Mobile:** hero image → product identity → tasting notes → specifications → profile visualization → story → related coffees. Thumbnails become a horizontally scrollable, accessible strip with snap points if needed. All profile graphics have textual equivalents.

**Visual identity:** Product detail should feel like opening an archival tasting sheet, not an ecommerce marketplace product page. Use quiet ruled tables and oversized product imagery.

---

## 9. P1 / P2 page direction (design now, implement by scope)

| Page | Signature composition | Responsive adaptation |
|---|---|---|
| Coffee Comparison | Two aligned product columns with a shared attributes matrix and profile bars | Stacked product selectors and horizontally scrollable comparison **table with clear cue** or vertically paired attributes |
| Brew Studio | Large editorial recipe panel plus compact controls and calculated output | Controls first, output immediately after; no sticky side panel |
| Our Craft | Alternating full-width documentary photos, numbered chapters, restrained captions | Linear chronological story; no scroll-jacking |
| Brew Journal | Featured editorial article plus clean article index and categories | Featured story followed by 1-column article list |
| About | Brand manifesto, team/process imagery, values, and contact route | Readable narrative with selective full-bleed photography |
| Contact | Concise contact details and validated form if in scope | Single column with accessible labels and errors |
| Wishlist (P2) | Curated saved-coffee shelf, not a dashboard | Simple stacked saved cards and empty state |

Do not add pages merely to fill the sitemap. Respect the PRD's P0/P1/P2 milestones.

---

## 10. Reusable component system

### 10.1 Foundation components

| Component | Responsibility | Required variants / states |
|---|---|---|
| `Container` | Consistent centered max width and gutters | Default, wide, narrow |
| `Section` | Vertical rhythm and section boundaries | Light, dark, flush-media |
| `SectionHeading` | Eyebrow, headline, intro, action | Left, split, centered only when justified |
| `Button` | Primary/secondary action | Primary, outline, text; disabled/loading/focus |
| `TextLink` | Low-emphasis navigation | Default, inverse, hover/focus |
| `EditorialCard` | Storytelling text block | Dark/light, compact/feature |
| `MediaFrame` | Predictable image cropping and caption | Square, portrait, landscape; fallback |
| `MetadataList` | Origin, roast, process, altitude | Inline, stacked, definition-list semantics |
| `Chip` | Filters and selected notes | Unselected, selected, removable, disabled |
| `Dialog` / `Drawer` | Mobile nav and filter sheet | Open/closed, focus trap, escape, scroll lock |

### 10.2 Domain components

| Component | Responsibility | Key contract |
|---|---|---|
| `CoffeeCard` | Product preview | Data-driven; title, image, origin, notes, detail link |
| `CoffeeGallery` | Product imagery | Stable dimensions, keyboard-friendly thumbnails |
| `FlavorWheel` | Radial flavor selection | Controlled selection; keyboard-equivalent HTML controls |
| `FlavorSelector` | Accessible non-radial input | Shares selection model with wheel |
| `FlavorMatchCard` | Recommendation with rationale | Derived from recommendation engine, no invented score |
| `FlavorProfile` | Visual flavor metrics | Numeric/text equivalent for every chart |
| `CatalogFilters` | Filter inputs and chips | URL/state sync according to PRD architecture |
| `CollectionGrid` | Responsive products | 1/2/3/4-column decisions by context |
| `BrewRatioCalculator` | Ratio inputs and output (P1) | Validation, units, precise accessible result |
| `StoryBento` | Documentary image/text composition | Explicit placements, meaningful mobile order |
| `FeaturePanel` | Dark feature storytelling | Copy + visual/action, responsive stack |

### 10.3 Composition rules

- Build pages from semantic sections; **do not** create one giant component per page.
- Prefer reusable primitives with deliberate page-specific composition; avoid a universal `Card` with 20 unrelated props.
- Separate content/data from presentational components. No hardcoded coffee catalog inside JSX cards.
- Use React props and state rather than querying the DOM to manipulate layouts.
- Use semantic HTML: `header`, `nav`, `main`, `section`, `article`, `figure`, `figcaption`, `dl`, `button`, `a`.
- One `<h1>` per page; heading order reflects document hierarchy rather than visual font size.
- Avoid nested clickable elements, unlabeled icon-only controls, and fake disabled-looking links.

---

## 11. Photography and asset direction

**Photography families:**

1. **Hero still life:** hero product, ceramic cup, directional window light, dark neutral backdrop.
2. **Macro sensory:** roasted beans, ground coffee, crema, tactile paper, pouring water.
3. **Human craft:** hands at roaster, weighing beans, brewing, origin-related process imagery.
4. **Product archive:** consistent package scale, warm studio light, simple neutral background.
5. **Origin documentary:** farms, processing and landscapes only when properly licensed and accurately attributed.

**Asset rules:** Use original or properly licensed photography. Never reuse the uploaded reference screenshot or crop its images into the finished website. Do not copy logos or packaging. Keep focal subjects inside safe crops at 1:1, 4:5, 3:2, and 16:9. Prepare AVIF/WebP and responsive `srcset` sizes, set width/height or aspect ratio, lazy-load below-the-fold imagery, and prioritize the hero's LCP asset. Do not lazy-load the LCP hero image.

If authentic imagery is unavailable, use clearly labeled art-direction placeholders during implementation rather than unrelated stock photography.

---

## 12. Motion and interaction specification

| Interaction | Recommended treatment | Accessibility / fallback |
|---|---|---|
| Hero entrance | One short staggered headline/media reveal (400–700ms total) | Immediate content under reduced motion |
| Header state | Subtle color/surface transition (150–250ms) | No moving layout dimensions |
| Card hover | 1–2% image scale or underline transition (150–250ms) | Equivalent focus style; touch unaffected |
| Flavor selection | Sector highlight and result transition (150–300ms) | Instant update under reduced motion; HTML controls remain usable |
| Scroll reveal | Light opacity/translate on selected editorial elements | Content always present and readable without animation |
| Drawer/dialog | Short translate/fade (180–280ms) | Proper focus management; no motion required |
| Route change | Optional brief fade after functionality is stable | Never delay navigation or block focus |

**Avoid:** scroll-jacking, compulsory horizontal scrolling, perpetual floating effects, cursor followers, forced intro loaders, and parallax that moves text away from its reading order. GSAP is optional for motion; CSS handles simple hover/focus states.

---

## 13. Accessibility and inclusive UX

- Target **WCAG 2.2 AA** where applicable. Test actual contrast rather than trusting aesthetic palette labels.
- Visible focus indicators with sufficient contrast and offset. Keyboard path works for nav, filters, wheel equivalents, product gallery, and dialogs.
- Respect `prefers-reduced-motion`; no essential information is communicated only through movement.
- Proper form labels, field descriptions, error text, and status announcements. Never rely on placeholder text as a label.
- Provide skip-to-content, logical heading structure, and predictable tab order.
- Touch targets at least 44×44 CSS px where feasible; leave enough spacing between adjacent targets.
- Keep text legible at 200% zoom and when users enlarge browser fonts.
- Images with informational content have descriptive alt text; decorative imagery uses empty alt.
- Profile charts and Flavor Wheel have readable textual equivalents; no taste category is identified only by hue.
- Dialogs return focus to their trigger on close; overlays do not strand keyboard users.

---

## 14. Content and copy style

**Voice:** knowledgeable without being elitist; precise but inviting. Explain terms on first use. Prefer short, sensory descriptions tied to actual coffee data.

**Examples (original AUREL placeholder copy):**

| Placement | Proposed copy |
|---|---|
| Hero | `A more considered cup.` |
| Hero supporting | `Thoughtfully sourced, carefully roasted, and discovered through taste.` |
| Taste Atlas | `A language of flavor.` |
| Flavor feature | `Find the notes that feel like you.` |
| Collection | `Small batches. Distinct characters.` |
| Craft | `Made with attention, from origin to roast.` |
| Brewing teaser | `A better cup is in the details.` |
| Footer | `Good coffee begins with curiosity.` |

Use actual coffee product names, origins, processes, and tasting notes from `PRD.md` data definitions or the implemented catalog. Avoid unsupported claims such as direct trade, organic certification, award-winning status, or exact farm provenance unless the data establishes them.

---

## 15. Implementation mapping and suggested component structure

```text
src/
  app/
    router/
    providers/
  components/
    ui/                  # Button, Container, Dialog, Chip, MediaFrame
    layout/              # Header, Footer, Section, SectionHeading
    coffee/              # CoffeeCard, CoffeeGallery, FlavorProfile
    flavor/              # FlavorWheel, FlavorSelector, FlavorMatchCard
    editorial/           # StoryBento, FeaturePanel, EditorialCard
  features/
    catalog/             # filtering, sorting, catalog UI and hooks
    flavor-discovery/    # selection, matching, recommendation presentation
    brewing/             # P1 calculations and UI
  pages/
    Home/
    Collection/
    CoffeeDetail/
    FlavorExplorer/
    OurCraft/             # P1
    BrewJournal/          # P1
    BrewStudio/           # P1
  data/                   # typed mock catalog and content
  styles/
    tokens.css
    globals.css
  assets/
    images/
```

This is a **suggested separation**, not an instruction to generate unused folders or premature abstractions. Preserve any existing project architecture where appropriate. Follow `PRD.md` for business logic and feature priority.

**Design implementation order:**

1. Tokens, fonts, responsive `Container`, semantic layout primitives.
2. Header, mobile menu, footer, buttons, card primitives.
3. Homepage hero and Taste Atlas, verified on mobile before desktop polish.
4. Product card, Collection grid, filter system, and Coffee Detail.
5. Functional Flavor Wheel and HTML selector, integrated with the recommendation engine.
6. Flavor feature preview on Home and documentary bento sections.
7. Motion polish, loading/empty/error states, accessibility/performance audit.
8. P1/P2 pages only after MVP acceptance.

---

## 16. Visual quality gates and acceptance criteria

### 16.1 Layout acceptance

- [ ] Desktop home uses deliberate asymmetry with one dominant image per major section.
- [ ] Dark hero and feature panel balance predominantly light editorial content.
- [ ] Product cards share consistent image treatment and information hierarchy.
- [ ] Section gutters and headings align to the same container/grid system.
- [ ] Bento compositions remain purposeful and readable when reordered for mobile.
- [ ] At 320px width, no page-level horizontal overflow or clipped controls.
- [ ] At 768px, layouts reflow rather than merely shrinking.
- [ ] At 1920px, reading text does not become excessively wide.
- [ ] At 200% zoom, content and interactive controls remain usable.

### 16.2 Interaction acceptance

- [ ] Flavor selection updates actual recommendation results and selection labels.
- [ ] All wheel actions can be completed with HTML controls and keyboard only.
- [ ] Mobile filter drawer can open, apply, reset, close, and restore focus.
- [ ] Every CTA points to a working route, real anchor, or an explicitly disabled future feature.
- [ ] Hover effects have equivalent focus and touch experiences.
- [ ] Reduced-motion mode disables nonessential motion.
- [ ] Empty states and missing-image fallbacks preserve layout.

### 16.3 Content and integrity acceptance

- [ ] No content, logo, image, QR mechanic, loyalty program, or store address copied from reference.
- [ ] No fake pricing, reviews, ratings, awards, stock, or sales urgency.
- [ ] Tasting notes and origin metadata come from the catalog, not arbitrary component text.
- [ ] All meaningful images have appropriate alt text and asset usage rights.
- [ ] Design remains recognizable as AUREL rather than a generic coffee template.

### 16.4 Engineering review

- [ ] No unnecessary animation library for trivial transitions.
- [ ] Stable image dimensions prevent layout shift.
- [ ] Semantic headings, focus styles, accessible dialogs, and contrast checks pass.
- [ ] Lighthouse/Core Web Vitals are measured against the targets in `PRD.md` on mobile and desktop.
- [ ] Test real touch interaction, not only a desktop browser resized to mobile width.

---

## 17. Design decisions and anti-patterns

**Decisions:**

- Use an **editorial dark hero** rather than a full-page dark theme.
- Make the **Flavor Wheel** the centerpiece of interactive discovery, not the only way to navigate flavors.
- Use **bento grids** for storytelling, **uniform cards** for comparing products. These patterns solve different problems and should not be mixed indiscriminately.
- Use product photography and typographic hierarchy to create premium quality, not gradients and glow.
- Keep the MVP focused on discovery; avoid ecommerce affordances that imply nonexistent checkout.

**Explicit anti-patterns:**

- Generic hero with center-aligned slogan over unrelated full-bleed stock photo.
- Four identical rounded statistic cards with arbitrary icons.
- Every section using the same 3-column grid and centered heading.
- Overlapping imagery that breaks on tablet.
- Huge Flavor Wheel that forces mobile users to scroll before they can act.
- Tiny labels, pale text on cream, decorative controls with no functionality.
- Hover-only product details and scroll animations that hide content.
- Copying the reference screenshot's brand, products, location tiles, promotional QR, or precise arrangement.

---

## 18. Agent instructions for implementing this design

When an AI coding agent receives `PRD.md` and `DESIGNS.md`:

1. Read **both** files before planning. `PRD.md` governs *what must work*; `DESIGNS.md` governs *how it should look and behave*.
2. Inspect the existing repository and conventions before changing files; do not scaffold over working code.
3. Implement P0 first. If design suggests P1/P2, do not silently add functionality outside scope.
4. Plan each page by section hierarchy, responsive composition, components, states, and data dependencies.
5. Build mobile layouts and test 320–430px widths before desktop fine-tuning.
6. Use the reference screenshot only for **layout and component principles**; create original AUREL content and visual composition.
7. Do not add random colors, gradients, glassmorphism, oversized shadows, ornamental icons, or meaningless animations.
8. Keep components modular and accessible; ensure Flavor Wheel behavior is driven by catalog data and PRD matching logic.
9. Request approval before destructive changes if project permissions require it; show a concise implementation plan before substantial refactoring.
10. Validate using screenshots at mobile/tablet/desktop, keyboard testing, reduced-motion testing, and the acceptance checklists above.

### 18.1 Definition of design complete

A page is **design complete** only when it is visually coherent, responsive, keyboard-accessible, content-correct, functionally integrated, and checked at representative viewport sizes. A visually attractive static mockup does not count as complete if its primary controls do not work.

---

## 19. Design summary

**AUREL's visual identity:** a dark, art-directed introduction; warm editorial surfaces; carefully balanced asymmetrical bento compositions; a real interactive tasting experience; consistent product cards; documentary craft imagery; and quiet, accessible motion.

**Primary distinction from the supplied reference:** AUREL borrows the **principles of visual hierarchy, contrast, modular composition, and section pacing**, while its identity, content, page flow, flavor interaction, and visual storytelling remain original.

**Final rule:** Design for comprehension and character first. Decoration is allowed only when it reinforces those goals.
