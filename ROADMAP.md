# TRAVELOZY — EXECUTION ROADMAP

## Overall Status

- Current Phase: Complete — follow-up business content and browser QA noted
- Overall Progress: 97%
- Last Updated: 2026-09-09
- Readiness: READY WITH NOTES
- Source of truth: `Travelozy_README.md`, `Travelozy_BLUEPRINT.md`, `Travelozy_ARCHITECTURE.md`

## Status Rules

- `[x]` means the implementation and listed executable verification passed.
- `[~]` means the implementation exists but a stated verification or real business input is pending.
- `[ ]` means not implemented or not verified.
- Local checks are not browser, device, performance-metric, or production proof.

---

## Phase 0 — Repository Audit & Project Foundation

### Goal

Establish a strict, static-first foundation while preserving the project documentation and existing Git changes.

### Dependencies

- None.

### Tasks

- [x] Read and reconcile all three source documents.
- [x] Audit repository, Git state, dependency state, legacy code, and supplied assets.
- [x] Scaffold the environment-supported Next-compatible App Router application.
- [x] Establish centralized design tokens, Manrope/Inter typography, global styles, environment contract, and responsive baseline.
- [x] Generate, inspect, resize, compress, and integrate editorial image assets.

### Deliverables

- `package.json`, `package-lock.json`, `tsconfig.json`, `vite.config.ts`, `next.config.ts`
- `.env.example`, `.openai/hosting.json`
- `app/globals.css`
- Five semantic AVIF/WebP assets in `public/images/editorial/`

### Verification / Evidence

- Documentation read-through: PASS.
- Repository audit: PASS — initial repository contained documentation only; no prior app, dependencies, or image assets.
- Git preservation: PASS — pre-existing document rename/casing changes remain untouched.
- TypeScript strict check: PASS via `npm run typecheck`.
- Image output: PASS — 41–109 KB each, with desktop/mobile hero crops and semantic filenames.
- Dependency production audit: PASS — `npm audit --omit=dev` reports 0 vulnerabilities after patch upgrades.

### Notes

- The provided execution prompt referred to supplied photos, but no image files were present. Three generated editorial scenes are used as non-factual visual material and never presented as proof of owned fleet.
- The Sites environment provides Vinext, a Next-compatible App Router implementation. React Server Components, metadata, TypeScript, Tailwind, static-first rendering, and the prescribed content/component boundaries remain intact.

---

## Phase 1 — Core Layout & Navigation

### Goal

Create the responsive shell, navigation, reusable primitives, footer, and mobile conversion controls.

### Dependencies

- Phase 0.

### Tasks

- [x] Implement container, button, section heading, responsive copy, marquee, and disclosure primitives.
- [x] Implement skip link, desktop navigation, and accessible mobile Sheet navigation.
- [x] Implement footer and safe-area-aware mobile sticky CTA.

### Deliverables

- `components/ui/SectionHeading.tsx`, `components/ui/ResponsiveCopy.tsx`
- `components/layout/Header.tsx`, `Footer.tsx`, `MobileStickyCTA.tsx`
- `components/navigation/MobileMenu.tsx`

### Verification / Evidence

- Semantic landmark and anchor audit: PASS — header/nav/main/footer and all navigation target IDs are present.
- Keyboard baseline: PASS structurally — native anchors/buttons, skip link, focus-visible treatment, Sheet primitive.
- Mobile safe area: PASS structurally — fixed CTA uses `env(safe-area-inset-bottom)` and footer reserves bottom space.
- Lint/type/build: PASS.

---

## Phase 2 — Hero & Conversion Entry

### Goal

Communicate the brand within the first viewport and enable a structured WhatsApp inquiry.

### Dependencies

- Phase 0 and Phase 1.

### Tasks

- [x] Implement art-directed hero with desktop/mobile image sources and copy variants.
- [x] Implement four-step booking wizard with required-field validation.
- [x] Implement deterministic booking-message and WhatsApp URL generation.
- [x] Implement reduced-motion-safe trust strip.

### Deliverables

- `components/landing/HeroSection.tsx`, `TrustStrip.tsx`
- `components/booking/BookingWizard.tsx`
- `lib/integrations/whatsapp.ts`
- `tests/whatsapp.test.ts`

### Verification / Evidence

- Message builder test: PASS — all service/date/pickup/destination/vehicle/passenger/contact fields asserted.
- URL encoding test: PASS — newline and ampersand encoding asserted.
- Form validation: PASS structurally — step-specific required values and phone pattern guard inquiry handoff.
- Configuration fallback: PASS — WhatsApp base link works without inventing a business number.
- Unit tests: 2 PASS, 0 FAIL.

---

## Phase 3 — Journey & Service Discovery

### Goal

Let visitors choose by travel need rather than vehicle brand.

### Dependencies

- Phase 1.

### Tasks

- [x] Implement typed content for Event, Vacation, Transfer, Daily, Business, Luxury, and Group.
- [x] Implement distinct desktop/mobile copy variants.
- [x] Implement mobile snap-scroll and desktop grid behavior with booking CTAs.

### Deliverables

- `content/services.ts`, `types/content.ts`
- `components/landing/JourneySection.tsx`

### Verification / Evidence

- Seven business pillars present: PASS.
- Structured data separation: PASS — no service catalog embedded in page composition.
- Responsive disclosure: PASS structurally — mobile copy and horizontal layout switch below 768 px.
- Detail-route readiness: PASS — stable service slugs and types exist; no empty/dummy routes were published.

---

## Phase 4 — Fleet Experience

### Goal

Provide an honest fleet-class discovery experience without fabricated inventory or pricing.

### Dependencies

- Phase 2 and Phase 3.

### Tasks

- [x] Implement typed fleet-class content and quote-only pricing mode.
- [x] Implement category filters, empty state, desktop grid, and mobile snap carousel.
- [x] Connect every fleet class to the booking flow.

### Deliverables

- `content/fleet.ts`
- `components/landing/FeaturedFleet.tsx`

### Verification / Evidence

- Business-data integrity: PASS — vehicles are labeled as example classes, not owned units.
- Price integrity: PASS — all entries use `Price on confirmation`; no amount is invented.
- Filter semantics: PASS — native buttons with `aria-pressed` inside a labeled fieldset.
- Lint/type/build: PASS.

---

## Phase 5 — Packages & TRAVELOZY Signature

### Goal

Sell need-based journey packages and establish the restrained luxury tier.

### Dependencies

- Phases 3–4 and editorial assets.

### Tasks

- [x] Implement six typed journey packages.
- [x] Implement responsive Popular Journeys cards.
- [x] Implement TRAVELOZY Signature with chauffeur-first positioning and editorial disclosure.

### Real Fleet Inventory Update

- [x] Normalize 18 verified fleet names and semantic slugs.
- [x] Replace illustrative vehicle classes with real fleet entries and safe quote-only pricing.
- [x] Map Premium, Luxury, Family, SUV, and Group categories; retain distinct Hiace Premio entries.
- [x] Set eight balanced featured vehicles and add the complete `/fleet` catalogue with filters.
- [x] Connect fleet-card selection to the booking inquiry vehicle field.
- [x] Update destination recommendation mappings to real fleet names.
- [x] Keep generic editorial placeholders where no verified vehicle photo is mapped.
- [ ] Complete manual mobile and desktop visual QA.

### Deliverables

- `content/packages.ts`
- `components/landing/PopularPackages.tsx`, `SignatureSection.tsx`

### Verification / Evidence

- Package coverage: PASS — Airport, Bandung, Wedding, Executive, Family, Group.
- Pricing disclosure: PASS — confirmation mode only.
- Black-car visibility: PASS structurally — rim-lit source assets and navy/cream separation; visual browser confirmation pending.
- Gold-use audit: PASS structurally — gold is limited to accent, state, and primary CTA roles.

---

## Phase 6 — Vacation & Destination Experience

### Goal

Present destination-led travel entry points.

### Dependencies

- Phase 3 and editorial assets.

### Tasks

- [x] Implement typed destination content for Bandung, Puncak, Bogor, Anyer, and Jakarta.
- [x] Implement responsive destination cards with desktop/mobile copy variants.
- [x] Connect destination exploration to the booking flow.

### Deliverables

- `content/destinations.ts`
- `components/landing/VacationSection.tsx`

### Verification / Evidence

- Five required destinations: PASS.
- Image dimensions/loading: PASS — explicit 1200×750 dimensions and lazy loading.
- Detail-route readiness: PASS — stable destination slugs and typed recommendation references exist; no dummy routes were published.

---

## Phase 7 — Supporting Conversion Sections

### Goal

Complete trust, process, airport, event, corporate, and partnership paths.

### Dependencies

- Phases 2–6.

### Tasks

- [x] Implement Why TRAVELOZY and How It Works.
- [x] Implement Airport Transfer and Wedding & Event.
- [x] Implement Corporate and Partnership inquiry sections.

### Deliverables

- `components/landing/SupportingSections.tsx`

### Verification / Evidence

- Required section coverage: PASS.
- CTA consistency: PASS — conversion routes use Book Your Ride, inquiry, or partner wording and resolve to the booking form.
- Claims audit: PASS — copy describes the proposed service model; it does not claim certifications, clients, or real-time availability.

---

## Phase 8 — Social Proof, FAQ & Final Conversion

### Goal

Answer objections without fabricating customer proof.

### Dependencies

- Phase 1 primitives.

### Tasks

- [x] Implement an explicit verified-testimonial placeholder state.
- [x] Implement FAQ from structured content with the accessible Accordion primitive.
- [x] Implement final CTA and WhatsApp privacy/confirmation notice.

### Deliverables

- `content/faq.ts`
- `components/landing/Testimonials.tsx`, `FAQSection.tsx`, `FinalCTA.tsx`

### Verification / Evidence

- Testimonial integrity: PASS — no fake name, rating, quote, or review schema.
- FAQ coverage: PASS — self-drive, costs, intercity, airport, wedding, monthly rental.
- Progressive disclosure: PASS structurally — FAQ is collapsed by default and keyboard-operable via the catalog primitive.

---

## Phase 9 — Responsive & Mobile UX Hardening

### Goal

Harden layout behavior at 360, 390, 430, 768, 1024, and 1440 widths.

### Dependencies

- Complete landing page.

### Tasks

- [x] Implement mobile-first fluid typography, spacing, grids, image crops, and horizontal snap regions.
- [x] Implement desktop/mobile copy switching at the documented 768 px breakpoint.
- [x] Add overflow containment, reserved image dimensions, sticky safe-area spacing, and 200%-text-friendly units.
- [~] Perform visual browser/device QA across the full viewport matrix.

### Deliverables

- Responsive rules in `app/globals.css`
- Art-directed mobile and desktop hero assets

### Verification / Evidence

- CSS structural viewport audit: PASS — mobile baseline, ≥768 px, and ≥1024 px layouts are defined; no fixed page width.
- Horizontal-overflow prevention: PASS structurally — body containment and intentional local scrollers use snap/hidden scrollbars.
- Browser/device visual QA: PENDING — the in-app preview surface failed to initialize (`failed to write kernel assets`). No screenshot/device PASS is claimed.

---

## Phase 10 — SEO, Performance & Accessibility

### Goal

Complete metadata, crawl controls, semantic structure, asset loading, reduced motion, and accessibility baseline.

### Dependencies

- Stable content and route.

### Tasks

- [x] Implement title template, description, canonical URL, Open Graph, and X metadata.
- [x] Implement `robots.txt`, `sitemap.xml`, and custom 404 output.
- [x] Optimize images to AVIF/WebP, art-direct hero, lazy-load supporting images, and reserve dimensions.
- [x] Implement reduced motion, headings/landmarks, labels, alt text, focus states, and touch targets.
- [x] Update runtime packages until the production dependency audit is clean.

### Deliverables

- `app/layout.tsx`, `app/not-found.tsx`, `app/robots.ts`, `app/sitemap.ts`
- `public/robots.txt`, `public/sitemap.xml`
- `next.config.ts`

### Verification / Evidence

- Static metadata HTML inspection: PASS — title, viewport, canonical, and Open Graph fields emitted.
- Static crawl files: PASS after final build output inspection.
- Production dependency audit: PASS — 0 production vulnerabilities.
- Reduced-motion handling: PASS structurally — global transitions/animations reduced and marquee stopped.
- Lighthouse/LCP/CLS/INP measurement: PENDING — no browser performance run; budget compliance is not claimed.

---

## Phase 11 — Regression, Final QA & Production Readiness

### Goal

Run executable gates, preserve evidence, and publish the exact validated source privately.

### Dependencies

- Phases 0–10.

### Tasks

- [x] Run lint, strict TypeScript checking, unit tests, and static production build.
- [x] Audit generated HTML, required anchor targets, crawl files, deployment assets, and Git whitespace.
- [x] Register an owner-private Sites project and configure the canonical origin.
- [x] Commit and push the exact validated source to the Site source repository.
- [x] Package, save, deploy, and verify the private production version.

### Deliverables

- `dist/client/index.html`, `dist/client/404.html`, static assets and crawl files
- Final `ROADMAP.md`
- Private Sites deployment: `https://travelozzy.scorns-pace-6d.chatgpt.site`

### Verification / Evidence

- `npm run lint`: PASS.
- `npm run typecheck`: PASS.
- `npm test`: PASS — 2 passed, 0 failed.
- Production build: PASS using Node 22.20.0 — 2 routes prerendered, 0 skipped.
- Node 24 build: PARTIAL — output completed but the CLI exited on a Windows libuv assertion; the supported Node 22 run passed cleanly.
- Static output inspection: PASS — `index.html`, `404.html`, `robots.txt`, `sitemap.xml`, responsive hero assets, canonical metadata, and required anchors are present.
- `git diff --check`: PASS.
- Browser E2E/component interaction: PENDING because the preview UI surface could not initialize.
- Commit/source push: PASS — commit `65513fbc32a02252e48aa568b8d3c16009059e64` pushed to the Site source branch.
- Archive validation: PASS — normalized static archive contains hosting metadata, `index.html`, 404, crawl files, and optimized imagery.
- Private production deployment: PASS — Sites deployment reached `succeeded` at `https://travelozzy.scorns-pace-6d.chatgpt.site`.
- VPS static release: PASS — release `travelozy-202609090230` is active behind Nginx on `51.222.30.28`; Cloudflare edge and origin checks for `/` and `/fleet` returned HTTP 200.
- VPS Nginx routing: PASS — static HTML routes resolve through the `travelozy.my.id` server block.
- Cloudflare DNS and public TLS: PASS — authoritative nameservers and proxied DNS are active; Cloudflare edge returns HTTP 301 and HTTPS 200 for the production hostname. Let's Encrypt covers the apex and `www` through 2026-12-07 with `certbot.timer` enabled.
- Production SEO origin: PASS — canonical metadata, robots, sitemap, and environment example use `https://travelozy.my.id`.
- Release workflow: PASS — `deploy/publish.ps1` records the gated `dev` push → fast-forward-only `main` promotion → VPS deployment flow; `deploy/README.md` is the operator runbook.

---

## Current Unresolved Items

- Real WhatsApp number, address, verified testimonials, and social profiles were not supplied. `.env.example` exposes the required replacement points.
- Generated imagery is editorial placeholder material, not factual fleet photography. Replace it with verified business assets before representing actual inventory.
- Cloudflare dashboard verification of SSL/TLS mode **Full (strict)** remains a manual account-side check; origin HTTPS is ready for it.
- Browser/device visual QA and Lighthouse metrics remain pending and are not reported as passed.
- No service/fleet/destination detail pages were created: the initial MVP remains one complete conversion page, while structured slugs and data keep future expansion ready without publishing thin content.

## Next Step

Confirm Cloudflare SSL/TLS mode is **Full (strict)**. Replace editorial fleet imagery with verified business assets and complete the pending browser/device/Lighthouse QA before broader public launch.
