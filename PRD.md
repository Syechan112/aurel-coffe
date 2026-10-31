# Product Requirements Document (PRD)

# AUREL — The Artisanal Roastery

> **Tagline:** Every Bean Has a Story. Every Cup, a Character.

| Metadata | Detail |
|---|---|
| Product | AUREL — The Artisanal Roastery |
| Document | Product Requirements Document (PRD) |
| Version | 1.0 |
| Status | Draft for implementation |
| Date | 27 October 2026 |
| Product type | Responsive specialty coffee brand website and interactive discovery experience |
| Primary language | English (content-ready for future localization) |
| Target | Desktop, tablet, mobile |
| Initial release | Frontend-first, curated mock catalog, no payment processing |

## 1. Executive Summary

AUREL is a fictional premium independent specialty coffee roastery brand. Its website combines an editorial brand experience, discoverable coffee catalog, and interactive flavor-based recommendations. Rather than forcing visitors to understand specialty-coffee terminology, the product helps them discover coffees by taste, compare profiles, and learn how to brew them.

**Product promise:** Discover, understand, and select coffee with confidence.

**Differentiator:** The Interactive Flavor Wheel is a functional discovery tool tied to real structured product attributes, not a decorative animation.

### 1.1 Problem Statement

- New buyers struggle to translate technical tasting notes, processing methods, and roast descriptions into a suitable purchase.
- Conventional coffee storefronts overemphasize product grids and under-explain differences between beans.
- Premium brand storytelling is often disconnected from the shopping/discovery journey.
- Brewing guidance is commonly scattered across unrelated articles rather than contextual to a coffee.

### 1.2 Product Goals

1. Make it easy to find a suitable coffee through an approachable taste-first interface.
2. Present an original, polished, credible premium roastery identity.
3. Make coffee differences transparent using consistent structured tasting attributes.
4. Help users understand and brew selected coffees.
5. Deliver a performant, accessible, mobile-first frontend suitable for portfolio demonstration and future commercial expansion.

### 1.3 Non-goals for MVP

- Real checkout, payments, taxes, shipping, inventory, order fulfillment, or account registration.
- Machine-learning recommendations or claims of objectively predicting individual taste.
- Live barista chat, subscriptions, loyalty points, or community features.
- Real supplier certifications, customer reviews, or traceability claims without verified data.

## 2. Audience and Jobs to Be Done

| Persona | Needs | Primary journey |
|---|---|---|
| Curious newcomer | Understand flavors without jargon | Home → Flavor Explorer → Recommended coffee → Detail |
| Coffee enthusiast | Inspect origin, process, roast and tasting notes | Collection → Filters → Compare → Detail |
| Home brewer | Find a usable recipe for available equipment | Coffee Detail → Brew Studio → Recipe |
| Design-conscious visitor | Explore premium visual storytelling | Home → Our Craft → Collection |

**Jobs to be done:**
- “When I do not know which coffee to choose, help me describe what I enjoy and show understandable matches.”
- “When two coffees look similar, help me see meaningful differences.”
- “When I have a coffee and a brewing method, help me calculate a reasonable starting recipe.”

## 3. Product Scope and Release Strategy

| Phase | Scope | Exit condition |
|---|---|---|
| MVP / P0 | Design system, responsive navigation, Home, Collection, Coffee Detail, Flavor Explorer, structured product dataset, accessibility and SEO basics | Complete end-to-end discovery journey using sample products |
| Phase 2 / P1 | Coffee Comparison, Brew Studio, Our Craft, About, Contact, Brew Journal | Comparison and brewing journeys validated |
| Phase 3 / P2 | Wishlist, guided discovery quiz, interactive labels, brewing timer, CMS integration, localization | Enhancements do not degrade performance or usability |
| Commercial future | Real catalog management, stock, checkout, shipping, privacy/consent, transactional flows | Requires separate commerce PRD and operational readiness |

P0 = must have for MVP; P1 = next planned release; P2 = optional enhancement.

## 4. Information Architecture

```text
/
├── /explore                 Flavor Explorer
├── /coffee                  Coffee Collection
│   └── /coffee/:slug        Coffee Detail
├── /craft                  Our Craft [P1]
├── /brew                   Brew Journal [P1]
│   └── /brew/:slug         Journal Article [P1]
├── /brew-studio            Brew Studio [P1]
├── /compare                Coffee Comparison [P1]
├── /about                  About [P1]
├── /contact                Contact [P1]
└── /*                      Not Found
```

Global navigation: Logo, Discover, Collection, Our Craft, Brew Journal; contextual CTA “Find Your Flavor”. On small screens use an accessible collapsible menu. Footer: brand story, links, contact/social placeholders, legal notices.

## 5. Core User Flows

### 5.1 Taste-based Discovery (P0)

1. Visitor opens `/explore` from Home or navigation.
2. Visitor selects one or more flavor families on the wheel.
3. Visitor optionally adjusts roast level, acidity, body, and processing filters.
4. Interface displays matched coffees ordered by transparent score and explains key matches.
5. Visitor opens a coffee detail and can return without losing selected filters.
6. Visitor can clear all filters and restart.

**Empty state:** If no coffee meets hard filters, explain the conflict and offer a single-click reset or removal of restrictive filters. Never fabricate matching products.

### 5.2 Catalog Browsing (P0)

1. Visitor opens `/coffee`.
2. Visitor filters by origin, roast, process, and flavor; optionally sorts results.
3. Catalog displays accurate result count and cards.
4. Visitor opens a detail page with consistent metadata and recommendations for similar coffees.

### 5.3 Coffee Comparison (P1)

1. Visitor selects two coffees from Collection or Detail.
2. Comparison page shows shared attribute scales and textual explanations.
3. Visitor can remove or replace either coffee; scales remain consistent.

### 5.4 Brew Calculation (P1)

1. Visitor chooses brewing method, coffee dose, and brew ratio.
2. App calculates target water mass and displays a starter recipe.
3. Visitor adjusts values and sees immediate updates.
4. Safety and expectation note: recipes are starting points, not guaranteed results.

## 6. Functional Requirements

### 6.1 Global UI and Navigation

| ID | Priority | Requirement | Acceptance criteria |
|---|---|---|---|
| NAV-01 | P0 | Responsive global navigation | All main P0 routes accessible via keyboard, pointer and touch |
| NAV-02 | P0 | Clear active navigation state | Current route is identifiable visually and via `aria-current` where applicable |
| NAV-03 | P0 | Mobile menu | Can open, close, navigate; Escape closes; focus behavior is usable |
| NAV-04 | P0 | 404 and route recovery | Invalid path displays meaningful 404 with Home and Collection links |
| NAV-05 | P0 | Accessible interaction feedback | Focus states, disabled states and loading/empty states are visible |

### 6.2 Homepage

| ID | Priority | Requirement | Acceptance criteria |
|---|---|---|---|
| HOME-01 | P0 | Editorial hero | Headline, brand proposition, visual and clear primary CTA above/near fold |
| HOME-02 | P0 | Featured coffees | Cards use the same catalog source as Collection |
| HOME-03 | P0 | Flavor Explorer teaser | CTA navigates to `/explore` |
| HOME-04 | P0 | Brand story preview | Copy is legible and links to future story page when published |
| HOME-05 | P0 | Responsive layout | No horizontal overflow at 320px and common viewport widths |

### 6.3 Coffee Collection

| ID | Priority | Requirement | Acceptance criteria |
|---|---|---|---|
| CAT-01 | P0 | Product cards | Image, name, origin, roast and tasting notes rendered from data |
| CAT-02 | P0 | Multi-attribute filters | Filter combinations yield deterministic, correct results |
| CAT-03 | P0 | Sorting | Name A–Z and roast intensity available; never show fake price sorting |
| CAT-04 | P0 | Result count and reset | Count updates correctly; reset clears all filters |
| CAT-05 | P0 | Empty state | Explains no results and offers reset |
| CAT-06 | P0 | Shareable filter state | Filters encoded in URL query parameters and restored on refresh |

### 6.4 Coffee Detail

| ID | Priority | Requirement | Acceptance criteria |
|---|---|---|---|
| DETAIL-01 | P0 | Product identity | Name, origin, process, roast, varietal when known, tasting notes |
| DETAIL-02 | P0 | Sensory profile | Acidity, body, sweetness, bitterness rendered on labeled common 1–5 scale |
| DETAIL-03 | P0 | Accessible images | Descriptive alt text; no critical details only inside images |
| DETAIL-04 | P0 | Discovery continuity | Back to results retains search/filter state |
| DETAIL-05 | P0 | Missing data | Unknown attributes are shown as “Not specified”, not invented |
| DETAIL-06 | P0 | No fake purchase CTA | MVP uses “Explore flavors” or “Find similar coffee”; no nonfunctional checkout |

### 6.5 Interactive Flavor Wheel

| ID | Priority | Requirement | Acceptance criteria |
|---|---|---|---|
| FLV-01 | P0 | Flavor families | Fruity, Nutty, Bold and Floral supported initially |
| FLV-02 | P0 | Accessible selection | Each segment also has a keyboard-operable, labeled control; selection not color-only |
| FLV-03 | P0 | Multi-select | Selecting multiple families applies OR within flavor family selection |
| FLV-04 | P0 | Dynamic matching | Results update on selection with deterministic ranking |
| FLV-05 | P0 | Explainability | Each recommendation shows matching notes/attributes and a plain-language reason |
| FLV-06 | P0 | Additional filters | Roast, acidity and body can narrow recommendations; AND across filter dimensions |
| FLV-07 | P0 | Reset and empty state | Reset restores default; no-result state never shows unrelated matches as matches |
| FLV-08 | P0 | URL persistence | Current selections reflected in query parameters and restored on refresh |
| FLV-09 | P0 | Reduced motion | Animation respects `prefers-reduced-motion` and works without animation |
| FLV-10 | P1 | Sub-flavor drill-down | Optional subcategories (citrus, berry, chocolate, etc.) map to tagged data |

**Interaction rules:** Wheel segments and equivalent textual controls are synchronized. Mouse drag/rotary interaction is optional enhancement, never the only method. On mobile, targets should be comfortably touch-sized and labels must remain readable.

### 6.6 Comparison, Brewing and Content

| ID | Priority | Requirement | Acceptance criteria |
|---|---|---|---|
| CMP-01 | P1 | Compare exactly two coffees | Selection, replacement and removal supported |
| CMP-02 | P1 | Common comparison scale | All charts and labels use identical 1–5 normalization |
| BREW-01 | P1 | Brew method selection | V60, French Press, Espresso offered as starter methods |
| BREW-02 | P1 | Ratio calculator | Water (g) = coffee dose (g) × ratio; outputs rounded sensibly |
| BREW-03 | P1 | Input validation | Invalid, zero and out-of-range inputs rejected with clear messages |
| STORY-01 | P1 | Our Craft content | Origin, sourcing and roasting sections with no unverified claims |
| BLOG-01 | P1 | Brew Journal | Article listing and article details; semantic headings and metadata |
| CONTACT-01 | P1 | Contact | Valid contact information or clearly labeled demo placeholders; no fake form submission |
| WISH-01 | P2 | Local wishlist | Add/remove, persistent on same browser, clear state; no cross-device promise |
| QUIZ-01 | P2 | Guided quiz | Questions map transparently to the same matching engine |

## 7. Recommendation Engine Specification

### 7.1 Data inputs

- Product flavor families: array of controlled values `fruity`, `nutty`, `bold`, `floral`.
- Tasting notes: descriptive strings, mapped to families in curated metadata.
- Sensory attributes: integers 1–5 for acidity, body, sweetness, bitterness.
- Roast level: `light`, `medium`, `dark`.
- Process: controlled string such as `washed`, `natural`, `honey`, `other`.

### 7.2 Matching rules

1. **Hard filters:** Selected roast/process filters and chosen acidity/body ranges restrict eligible coffees. Multiple flavor families match if a product has **any** selected family; all other active filter dimensions combine with AND.
2. **Ranking:** Among eligible coffees, compute a deterministic flavor score: `matchedSelectedFamilies / selectedFamiliesCount` (0–1). When no family is selected, treat all eligible coffees as neutral matches.
3. **Tie-breakers:** Higher number of matching notes first, then product name alphabetically. No artificial randomization.
4. **Explanation:** Show matched flavor families and specific tasting notes; avoid numerical “97% perfect match” marketing claims.
5. **No matches:** Show an empty state and actionable filter reset, never silent fallback to unrelated products.

Recommendation scoring is an editorial heuristic, not personalized machine learning. Revisit weights after usability testing.

### 7.3 Sample Catalog (illustrative only)

| Name | Origin | Roast | Families | Example notes |
|---|---|---|---|---|
| Ethiopia Guji | Ethiopia | Light | Fruity, Floral | Blueberry, bergamot, peach |
| Brazil Cerrado | Brazil | Medium | Nutty, Bold | Hazelnut, caramel, cocoa |
| Sumatra Mandheling | Indonesia | Dark | Bold, Nutty | Dark chocolate, cedar, spice |
| Ethiopia Yirgacheffe | Ethiopia | Light | Floral, Fruity | Jasmine, lemon, black tea |

These are fictional demonstration catalog entries and flavor descriptions. Production claims require verification against actual lots.

## 8. Content and Data Model

### 8.1 Coffee entity

```ts
type FlavorFamily = 'fruity' | 'nutty' | 'bold' | 'floral';
type RoastLevel = 'light' | 'medium' | 'dark';
type Process = 'washed' | 'natural' | 'honey' | 'other';

type Coffee = {
  id: string;
  slug: string;
  name: string;
  originCountry: string;
  region?: string;
  producer?: string;
  altitudeMasl?: number;
  varietal?: string[];
  process?: Process;
  roastLevel: RoastLevel;
  flavorFamilies: FlavorFamily[];
  tastingNotes: string[];
  sensory: {
    acidity: 1 | 2 | 3 | 4 | 5;
    body: 1 | 2 | 3 | 4 | 5;
    sweetness: 1 | 2 | 3 | 4 | 5;
    bitterness: 1 | 2 | 3 | 4 | 5;
  };
  description: string;
  image: string;
  imageAlt: string;
  featured: boolean;
  available: boolean;
};
```

### 8.2 Content governance

- Centralize product records and controlled vocabularies; avoid hard-coded duplicate product data in UI components.
- Validate required fields and numeric bounds before rendering.
- Provide descriptive image alt text and credits/licenses for photography.
- All demo pricing, availability, origin claims and brand contacts must be explicitly identified as sample data if displayed.
- Copy style: warm, confident, sensory, informative, never elitist or needlessly technical.

## 9. Visual Design System

### 9.1 Design direction

**Editorial Minimalism × Contemporary Artisan:** refined serif headlines, practical sans-serif interface copy, generous whitespace, asymmetrical but disciplined grids, natural coffee photography, subtle dividers, restrained motion.

| Token | Value | Usage |
|---|---|---|
| Espresso | `#332A24` | Primary text, dark surfaces |
| Ivory Paper | `#F3EDE2` | Main light background |
| Warm Oat | `#D7C6A8` | Secondary surfaces and borders |
| Muted Olive | `#77765B` | Limited accents |

Color contrast must be tested per actual foreground/background combination; decorative palette choices do not override accessibility. Avoid neon, excessive gradients, generic glassmorphism and gratuitous animation.

### 9.2 Components

- Header, mobile navigation, footer, button, link, badge, breadcrumb.
- CoffeeCard, CoffeeGrid, CoffeeFilterPanel, EmptyState.
- FlavorWheel, FlavorOption, ActiveFilterChips, RecommendationCard.
- SensoryProfile, CoffeeMetadata, ImageGallery.
- Shared skeleton/loading, error state and accessible dialog primitives as needed.

### 9.3 Motion principles

- Prefer subtle opacity/transform transitions, typically ~150–450ms.
- Use GSAP selectively for hero and storytelling sequences, not every click.
- No scroll hijacking; content remains available without JavaScript animation.
- Respect reduced motion; prevent layout shifts and distracting perpetual motion.

## 10. Responsive Behavior

| Viewport | Design behavior |
|---|---|
| Mobile 320–767px | Single-column editorial flow, collapsible navigation, stacked filters, readable flavor controls |
| Tablet 768–1023px | Adaptive 2-column grids where space allows, balanced imagery |
| Desktop ≥1024px | Editorial asymmetry, multi-column catalog, optional sticky discovery panel |

Use fluid typography and spacing; do not rely exclusively on these breakpoint ranges. No horizontal scrolling except deliberately labeled, keyboard-accessible components. Flavor selection must not depend on hover.

## 11. Technical Architecture

### 11.1 Proposed stack

| Area | Choice | Rationale |
|---|---|---|
| App | React + Vite + TypeScript | Component model and typed data |
| Styling | Tailwind CSS v4 | Responsive styling and tokens |
| Navigation | React Router | Client-side routes and URL query state |
| Motion | GSAP + ScrollTrigger | Targeted editorial transitions |
| Icons | Lucide React | Consistent UI iconography |
| State | React state/context initially; Zustand if needed | Avoid unnecessary complexity |
| Data | Versioned local JSON/TS dataset | MVP without backend |
| Visualization | Accessible SVG + React | Custom wheel and sensory profiles |
| Testing | Vitest + React Testing Library + Playwright | Unit, component and E2E confidence |
| Hosting | Vercel or Netlify | Static SPA deployment with route fallback |

### 11.2 Suggested project structure

```text
src/
  app/               # App shell, routing, providers
  assets/            # Local media and optimized assets
  components/        # Reusable UI components
    ui/
    layout/
  features/
    catalog/         # Filters, cards, data selectors
    discovery/       # Flavor wheel and matching logic
    coffee-detail/
    comparison/      # P1
    brewing/         # P1
  pages/             # Route-level composition
  data/              # Demo coffees and editorial content
  hooks/             # Shared hooks
  lib/               # Pure utilities
  styles/            # Global styles and tokens
  types/             # Shared TypeScript types
  tests/             # Test helpers/fixtures
public/
  images/
```

Architectural rule: keep recommendation logic in pure, testable functions, separate from visual components. No API keys in frontend. No dependency on a live backend for MVP flows.

### 11.3 State and persistence

- Catalog and Explorer filter state: URL query parameters as source of truth.
- Temporary UI state: local React state.
- Optional wishlist (P2): browser localStorage with schema versioning and safe failure handling.
- No personal profile or sensitive user data required for MVP.

## 12. Accessibility, Performance, SEO and Security

### 12.1 Accessibility (P0)

- Target WCAG 2.2 AA where applicable.
- Keyboard access for all navigation, filters, wheel options and dialogs.
- Semantic landmarks/headings; visible focus; appropriate labels and instructions.
- Sufficient contrast, usable touch targets and non-color-only status indicators.
- Inform screen-reader users when results update (polite live region or equivalent).
- Support reduced motion and zoom/reflow; no critical information on hover alone.

### 12.2 Performance targets (P0)

| Metric | Target on representative production pages |
|---|---|
| LCP | ≤2.5s at 75th percentile |
| INP | ≤200ms at 75th percentile |
| CLS | ≤0.1 at 75th percentile |
| Lighthouse accessibility | ≥90 in repeatable audits; manual review required |
| Images | Responsive sizes, modern formats, lazy-load noncritical assets |

Targets depend on device/network and must be measured, not assumed. Prioritize hero image delivery and avoid heavy animation bundles on pages that do not use them.

### 12.3 SEO (P0)

- Unique document titles and meta descriptions for indexable routes.
- Descriptive headings, canonical URLs and social preview metadata.
- `robots.txt`, sitemap for published pages, structured data only when factually accurate.
- SPA route fallback configured; evaluate prerendering/SSR if indexing requirements demand it.

### 12.4 Security and privacy

- Treat all content and query params as untrusted; validate and encode appropriately.
- Avoid embedding secrets or private data in client bundles.
- Prefer no analytics/cookies by default; if added, document collection and consent requirements.
- External links use appropriate safe attributes; dependencies are kept current.
- Contact form integration, if introduced, requires spam prevention, validation, rate limiting and privacy review.

## 13. Analytics and Success Metrics

**MVP measurement may use local testing and anonymized opt-in analytics; no tracking integration is required to launch the portfolio demo.**

| Goal | Proposed metric | Initial validation target |
|---|---|---|
| Discoverability | Users who reach Explorer from Home | At least 80% of 5 usability testers find it unaided |
| Usability | Complete a taste-to-detail journey | At least 4 of 5 testers finish without help |
| Explainability | Can articulate why coffee was recommended | At least 4 of 5 testers correctly explain the match |
| Accessibility | Keyboard-only task completion | All P0 core journeys pass |
| Reliability | Automated critical-path E2E tests | 100% pass before release |
| Performance | Core Web Vitals | Targets in §12.2 on measured environments |

Targets are provisional product hypotheses, not observed business results.

Suggested event names if analytics is later enabled: `flavor_selected`, `filters_reset`, `recommendation_opened`, `catalog_filter_changed`, `coffee_detail_viewed`, `comparison_started`, `brew_recipe_calculated`. Do not record personally identifying data.

## 14. Testing and Acceptance Plan

### 14.1 Unit tests

- Filter AND/OR semantics, scoring, deterministic sorting and ties.
- URL query parsing/serialization, unknown values and malformed input.
- Brew calculator precision and invalid values (P1).
- Catalog schema and unique slugs.

### 14.2 Component tests

- Wheel option selection with mouse and keyboard.
- Active states, reset, empty results, labels and live announcements.
- Navigation menu open/close and focus behavior.
- Sensory data rendering and missing-field handling.

### 14.3 End-to-end scenarios

1. From Home, open Explorer, select Fruity, open Ethiopia Guji detail, return with filters retained.
2. Select incompatible filters, verify honest empty state, reset successfully.
3. Open Collection with a shared filtered URL; verify state and result count.
4. Navigate entire P0 experience with keyboard only.
5. Repeat on mobile viewport; confirm no clipping or inaccessible controls.
6. Verify reduced-motion mode preserves usability.
7. Refresh deep routes directly; verify hosting fallback works.

### 14.4 Definition of Done

A P0 feature is done when requirements and acceptance criteria pass; it uses validated structured data; supports mobile/desktop, keyboard and reduced motion; has relevant tests; and introduces no critical console errors, broken routes or placeholder actions disguised as working functionality.

## 15. Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Flavor Wheel is visually impressive but confusing | High | Text controls, usability testing, clear selection feedback |
| Overengineered animation reduces performance | High | Progressive enhancement, lazy-load, reduced motion, performance budgets |
| Demo catalog implies verified commercial claims | Medium | Clearly label illustrative data; validate before commercialization |
| Filtering produces inconsistent recommendations | High | Pure deterministic engine and unit tests |
| Scope creep into full e-commerce | High | Enforce MVP non-goals and separate commerce PRD |
| Mobile wheel has tiny hit targets | High | Alternative accessible control list and touch testing |
| Client-rendered SEO underperforms | Medium | Metadata, prerender strategy if needed, crawl validation |
| Unlicensed images or fonts | High | Use appropriately licensed assets and track provenance |

## 16. Dependencies and Assumptions

- AUREL is a fictional brand; logo, product photography, content and packaging may initially be demo assets.
- At least four complete demo coffee records exist; eight to twelve are recommended for meaningful filtering tests.
- All photography and fonts are appropriately licensed.
- No login, payment, real inventory or external data service is required for P0.
- UI copy starts in English; localization can be added without rewriting core matching logic.

## 17. Open Decisions

| Decision | Default for initial implementation | Revisit when |
|---|---|---|
| Brand identity | AUREL | Brand validation or stakeholder review |
| Site language | English | Localization planning |
| Catalog size | 8–12 demo coffees | Real catalog available |
| Commerce | No checkout in MVP | Commercial phase approved |
| Recommendation model | Rule-based deterministic | User research justifies complexity |
| Content management | Local typed data | Nontechnical editors need CMS |
| Analytics | No third-party tracker by default | Privacy approach and goals approved |
| Hosting | Static deployment | SEO or backend needs change |

## 18. Implementation Backlog

| Order | Deliverable | Priority | Dependencies |
|---|---|---|---|
| 1 | Project scaffold, linting, formatting, tests | P0 | None |
| 2 | Tokens, typography, layout primitives, navigation | P0 | 1 |
| 3 | Typed catalog dataset, validation and image assets | P0 | 1 |
| 4 | Home and shared CoffeeCard components | P0 | 2, 3 |
| 5 | Collection filters, sorting and URL sync | P0 | 3, 4 |
| 6 | Coffee Detail and sensory profile | P0 | 3, 4 |
| 7 | Pure recommendation engine and tests | P0 | 3 |
| 8 | Flavor Wheel UI and results integration | P0 | 2, 7 |
| 9 | Responsive/accessibility/E2E/performance hardening | P0 | 4–8 |
| 10 | Our Craft, About, Journal and Contact | P1 | 2 |
| 11 | Comparison and Brew Studio | P1 | 3, 6 |
| 12 | Wishlist, quiz, labels, timer, CMS | P2 | P0/P1 stabilization |

## 19. MVP Release Checklist

- [ ] All P0 routes work on direct navigation and refresh.
- [ ] All product information comes from a single validated data source.
- [ ] Flavor Wheel has accessible controls and deterministic matching.
- [ ] Filter state is shareable and restorable via URL.
- [ ] No-results, loading and error states are handled.
- [ ] No fake checkout or dead-end buttons are presented.
- [ ] Keyboard, touch, zoom and reduced-motion checks pass.
- [ ] Images and typography are licensed and optimized.
- [ ] Core unit/component/E2E tests pass.
- [ ] SEO metadata and deployment fallback are configured.
- [ ] Performance targets are measured and major regressions resolved.
- [ ] Demo content and fictional brand status are clearly represented where necessary.

---

**Document ownership:** Product/design/engineering collaboration. This PRD defines product outcomes and acceptance criteria; implementation details may evolve as long as the user experience and requirements remain satisfied.
