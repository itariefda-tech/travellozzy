# TRAVELOZZY — ARCHITECTURE

## 1. Document Purpose

Dokumen ini mendefinisikan arsitektur teknis website **TRAVELOZZY**.

Dokumen ini menjadi acuan untuk:

- technology stack;
- struktur aplikasi;
- struktur folder;
- component architecture;
- content architecture;
- responsive-content behavior;
- data model awal;
- booking/inquiry flow;
- SEO architecture;
- performance;
- accessibility;
- analytics;
- security;
- deployment;
- future scalability.

Dokumen ini **tidak menduplikasi** detail visual dan narasi brand.

Referensi desain utama:

> `TRAVELOZZY_BLUEPRINT.md`

Referensi ringkasan project:

> `TRAVELOZZY_README.md`

Progress implementasi akan dikelola di:

> `ROADMAP.md`

---

# 2. Architecture Goals

Arsitektur TRAVELOZZY harus memenuhi tujuan berikut:

1. **Fast**
   - landing page cepat;
   - mobile-first;
   - image optimized;
   - minimal JavaScript.

2. **SEO-Friendly**
   - service pages;
   - fleet pages;
   - destination pages;
   - metadata terstruktur.

3. **Conversion-Focused**
   - booking mudah;
   - WhatsApp selalu tersedia;
   - CTA jelas;
   - mobile flow singkat.

4. **Maintainable**
   - content tidak hardcoded berantakan;
   - section reusable;
   - design token terpusat.

5. **Scalable**
   - awal dapat berjalan sebagai marketing website;
   - kemudian dapat berkembang menjadi booking engine penuh.

6. **Responsive by Design**
   - bukan sekadar mengecilkan desktop;
   - desktop dan mobile dapat memiliki content variant berbeda.

---

# 3. Recommended Technology Stack

## Frontend Framework

**Next.js 16+**

Menggunakan:

- App Router;
- React Server Components;
- TypeScript;
- static-first rendering.

Alasan:

- SEO sangat baik;
- image optimization;
- routing kuat;
- mudah berkembang;
- cocok untuk landing page + dynamic pages;
- dapat berkembang ke booking engine tanpa migrasi framework.

---

# 4. Styling

## Recommended

**Tailwind CSS**

Digunakan untuk:

- responsive layout;
- spacing;
- typography;
- color token;
- component variants.

Tambahan CSS tetap diperbolehkan untuk:

- animation khusus;
- marquee;
- gradient;
- sophisticated interaction.

---

# 5. Animation

Gunakan secara minimal.

Pilihan:

- CSS transition;
- native browser animation;
- Motion / Framer Motion hanya jika benar-benar diperlukan.

Prinsip:

> jangan menambah library besar hanya untuk efek kecil.

Animation harus mengikuti aturan di `BLUEPRINT.md`.

---

# 6. Icons

Rekomendasi:

- Lucide Icons;
- atau icon set SVG internal.

Hindari:

- banyak library icon sekaligus;
- icon style campur.

---

# 7. Image Strategy

Format utama:

- AVIF;
- WebP.

Gunakan:

- `next/image`;
- responsive `sizes`;
- lazy loading;
- preload hanya hero image utama.

Hero mobile dan desktop dapat memakai image source berbeda.

Contoh:

```text
hero-desktop.avif
hero-mobile.avif
```

Tujuannya:

- mobile tidak mengunduh asset desktop terlalu besar;
- framing gambar tetap optimal.

---

# 8. Rendering Strategy

Gunakan pendekatan:

> **Static First**

## Static / Pre-rendered

Untuk:

- Home;
- Services;
- Fleet listing;
- Vacation pages;
- Corporate;
- About;
- FAQ;
- Partner.

## Dynamic

Diperlukan hanya ketika nanti terdapat:

- fleet availability;
- booking;
- pricing engine;
- customer account;
- payment;
- admin dashboard.

MVP tidak perlu server-heavy architecture.

---

# 9. High-Level Architecture

```text
Browser
   │
   ▼
Next.js Application
   │
   ├── Marketing Pages
   ├── Service Pages
   ├── Fleet Pages
   ├── Destination Pages
   ├── Booking UI
   │
   ├── Content Layer
   │     ├── Services
   │     ├── Fleet
   │     ├── Packages
   │     ├── Destinations
   │     └── FAQ
   │
   ├── SEO Layer
   │
   └── Integration Layer
         ├── WhatsApp
         ├── Analytics
         └── Future Booking API
```

---

# 10. Application Structure

Rekomendasi struktur:

```text
travelozzy/
│
├── app/
│   ├── page.tsx
│   │
│   ├── fleet/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── services/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── vacation/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── corporate/
│   │   └── page.tsx
│   │
│   ├── partner/
│   │   └── page.tsx
│   │
│   ├── booking/
│   │   └── page.tsx
│   │
│   ├── about/
│   │   └── page.tsx
│   │
│   ├── contact/
│   │   └── page.tsx
│   │
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── landing/
│   ├── booking/
│   ├── fleet/
│   ├── services/
│   ├── vacation/
│   ├── corporate/
│   └── ui/
│
├── content/
│   ├── services.ts
│   ├── fleet.ts
│   ├── packages.ts
│   ├── destinations.ts
│   ├── testimonials.ts
│   └── faq.ts
│
├── lib/
│   ├── booking/
│   ├── seo/
│   ├── analytics/
│   ├── utils/
│   └── constants/
│
├── public/
│   ├── images/
│   ├── fleet/
│   ├── destinations/
│   ├── events/
│   └── brand/
│
├── types/
│
├── tests/
│
├── TRAVELOZZY_README.md
├── TRAVELOZZY_ARCHITECTURE.md
├── TRAVELOZZY_BLUEPRINT.md
└── ROADMAP.md
```

---

# 11. Component Architecture

Landing page harus dibangun dari section reusable.

Contoh:

```text
<HomePage>
  <Header />
  <HeroSection />
  <QuickBooking />
  <TrustStrip />
  <JourneySection />
  <FeaturedFleet />
  <PopularPackages />
  <SignatureSection />
  <VacationSection />
  <WhyTravelozzy />
  <HowItWorks />
  <AirportTransfer />
  <WeddingEvent />
  <CorporateSection />
  <PartnerSection />
  <Testimonials />
  <FAQ />
  <FinalCTA />
  <Footer />
  <MobileStickyCTA />
</HomePage>
```

Setiap section:

- isolated;
- reusable;
- responsive;
- tidak mengetahui detail internal section lain.

---

# 12. UI Component Layer

Primitive component dipisahkan dari business section.

Contoh:

```text
components/ui/
├── button.tsx
├── card.tsx
├── badge.tsx
├── container.tsx
├── section-heading.tsx
├── accordion.tsx
├── modal.tsx
├── bottom-sheet.tsx
├── carousel.tsx
├── marquee.tsx
└── responsive-copy.tsx
```

Tujuan:

- visual consistency;
- mudah refactor;
- tidak mengulang styling.

---

# 13. Design Tokens

Design token harus menjadi single source of truth.

Detail warna resmi mengikuti:

> `TRAVELOZZY_BLUEPRINT.md`

Core palette:

```text
Black             #0A0C10
Midnight Navy     #111D2E
Soft Gold         #C8A96B
Warm Cream        #F3EEE4
White             #F8F9FA
Light Steel Gray  #C4CBD4
```

Contoh token:

```text
--color-brand-black
--color-brand-navy
--color-brand-gold
--color-brand-cream
--color-brand-white
--color-brand-gray
```

Jangan menyebarkan hardcoded HEX ke banyak component.

---

# 14. Responsive Content Architecture

Ini adalah aturan arsitektur penting TRAVELOZZY.

Desktop dan mobile dapat mempunyai copy berbeda.

Jangan menggunakan satu paragraph panjang lalu hanya mengecilkan font.

Gunakan pola:

```ts
type ResponsiveCopy = {
  desktop: string;
  mobile: string;
};
```

Contoh:

```ts
{
  desktop:
    "Dari perjalanan harian hingga momen istimewa, TRAVELOZZY menyediakan kendaraan reguler, premium, luxury dan group transportation untuk setiap perjalanan Anda.",
  mobile:
    "Rental reguler hingga luxury untuk setiap perjalanan."
}
```

---

# 15. ResponsiveCopy Component

Konsep:

```text
<ResponsiveCopy
  desktop="Long descriptive copy..."
  mobile="Short concise copy..."
/>
```

Atau bila informasi panjang masih diperlukan:

```text
Short copy
↓
[ Info Lengkap ]
↓
Bottom Sheet / Modal
```

Rule utama:

> **Desktop menjelaskan. Mobile mengarahkan.**

---

# 16. Mobile Content Disclosure

Gunakan progressive disclosure.

Urutan:

```text
Headline
↓
Short Summary
↓
Primary CTA
↓
Optional Detail
```

Detail dapat dibuka melalui:

- modal;
- bottom sheet;
- accordion;
- dedicated page.

---

# 17. Marquee Architecture

Marquee hanya untuk string pendek.

Data source:

```ts
const trustItems = [
  "Professional Driver",
  "Clean Fleet",
  "Transparent Pricing",
  "Flexible Rental",
];
```

Marquee harus:

- pause bila `prefers-reduced-motion`;
- tidak mengandung informasi wajib;
- tidak menjadi satu-satunya cara informasi ditampilkan.

---

# 18. Carousel Architecture

Digunakan untuk:

- fleet;
- package;
- destination;
- testimonial;
- mobile service cards.

Mobile:

- native horizontal scrolling;
- CSS scroll snap lebih disukai.

Hindari carousel library besar bila native scroll cukup.

---

# 19. Content Data Layer

Content tidak boleh tersebar sebagai hardcoded JSX.

Gunakan file data terstruktur.

Contoh:

```ts
type Service = {
  slug: string;
  name: string;
  shortName: string;
  desktopDescription: string;
  mobileDescription: string;
  icon: string;
  image: string;
  ctaLabel: string;
};
```

---

# 20. Service Data

Contoh entity:

```text
Event
Vacation
Transfer
Daily
Business
Luxury
Group
```

Setiap service mempunyai:

- slug;
- title;
- mobile title;
- desktop description;
- mobile description;
- hero image;
- highlights;
- recommended fleet;
- related packages;
- CTA.

---

# 21. Fleet Data Model

Initial model:

```ts
type Vehicle = {
  id: string;
  slug: string;
  brand: string;
  model: string;
  category:
    | "economy"
    | "regular"
    | "family"
    | "suv"
    | "premium"
    | "luxury"
    | "group";
  seats: number;
  transmission?: "automatic" | "manual";
  chauffeurAvailable: boolean;
  selfDriveAvailable?: boolean;
  startingPrice?: number;
  priceUnit?: "hour" | "day" | "trip";
  image: string;
  gallery?: string[];
  features?: string[];
  recommendedFor?: string[];
  isFeatured?: boolean;
};
```

Harga bersifat optional agar website tetap bisa berjalan bila harga belum dipublikasikan.

---

# 22. Package Data Model

```ts
type Package = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  desktopDescription: string;
  mobileDescription: string;
  category: string;
  startingPrice?: number;
  includes?: string[];
  recommendedVehicles?: string[];
  image: string;
};
```

Contoh:

- Wedding Signature;
- Bandung Escape;
- Airport Transfer;
- Executive Day;
- Family Day Out;
- Group Journey.

---

# 23. Destination Data Model

```ts
type Destination = {
  slug: string;
  name: string;
  region: string;
  shortDescription: string;
  desktopDescription: string;
  mobileDescription: string;
  highlights: string[];
  image: string;
  recommendedVehicles: string[];
};
```

Contoh:

- Bandung;
- Puncak;
- Bogor;
- Anyer;
- Jakarta.

---

# 24. Booking Architecture — MVP

MVP tidak harus mempunyai complex reservation engine.

Initial flow:

```text
Select Service
↓
Select Date
↓
Select Vehicle / Vehicle Class
↓
Enter Pickup / Destination
↓
Enter Contact
↓
Generate Inquiry
↓
WhatsApp / Contact Channel
```

---

# 25. Booking Wizard

Mobile:

```text
Step 1 — Service
Step 2 — Date
Step 3 — Vehicle
Step 4 — Contact
```

Desktop dapat menggunakan:

- horizontal form;
- atau wizard yang sama.

Data booking sementara disimpan di:

- React state;
- URL query;
- session storage jika dibutuhkan.

MVP tidak perlu database hanya untuk inquiry.

---

# 26. WhatsApp Booking Integration

Initial conversion dapat menggunakan WhatsApp deep link.

Format message dibangun otomatis.

Contoh:

```text
Halo TRAVELOZZY,

Saya ingin booking:

Service: Airport Transfer
Date: 10 September 2026
Pickup: Jakarta Barat
Destination: Soekarno-Hatta
Vehicle: Innova Zenix
Passengers: 5

Nama:
```

Manfaat:

- customer tidak perlu mengetik ulang;
- admin menerima inquiry terstruktur.

Nomor WhatsApp harus berasal dari environment/config, bukan hardcoded di banyak file.

---

# 27. Future Booking Engine

Future architecture dapat berkembang menjadi:

```text
Frontend
↓
Booking API
↓
Availability Engine
↓
Pricing Engine
↓
Reservation
↓
Payment
↓
Notification
```

Potential entities:

- Vehicle;
- Fleet Unit;
- Availability;
- Customer;
- Booking;
- Payment;
- Driver;
- Assignment;
- Promotion.

Tidak perlu dibangun pada MVP.

---

# 28. State Management

MVP:

- React local state;
- URL state;
- Context bila dibutuhkan.

Hindari Redux/Zustand jika belum ada kebutuhan nyata.

Gunakan external state management hanya bila:

- booking flow kompleks;
- multi-page persistent state;
- account/customer dashboard.

---

# 29. Forms

Form harus:

- mobile-friendly;
- validation jelas;
- minimal required fields;
- tidak meminta data berlebihan.

Initial fields:

- service;
- date;
- pickup;
- destination;
- vehicle preference;
- passenger;
- name;
- WhatsApp number.

Optional:

- notes.

---

# 30. Validation

Gunakan schema validation.

Rekomendasi:

**Zod**

Validasi untuk:

- form booking;
- environment;
- future API payload.

---

# 31. SEO Architecture

SEO merupakan bagian inti.

Setiap page harus mempunyai:

- title;
- description;
- canonical;
- Open Graph;
- structured metadata bila relevan.

Dynamic routes:

```text
/fleet/[slug]
/services/[slug]
/vacation/[slug]
```

---

# 32. SEO Content Strategy

Landing page:

> broad brand intent.

Service pages:

> transactional intent.

Contoh:

```text
Rental Mobil Wedding Jakarta
Airport Transfer Jakarta
Rental Mobil Harian Jakarta
Sewa Alphard Jakarta
Rental Mobil ke Bandung
```

Destination pages:

> destination + transport intent.

---

# 33. Structured Data

Potential schema:

- LocalBusiness;
- Organization;
- Product / Offer bila pricing valid;
- FAQPage;
- BreadcrumbList.

Jangan memasukkan review schema palsu.

---

# 34. URL Rules

Gunakan:

- lowercase;
- readable slug;
- hyphen;
- no unnecessary query string.

Contoh:

```text
/services/airport-transfer
/services/wedding-car
/fleet/toyota-alphard
/vacation/bandung
```

---

# 35. Navigation Architecture

Desktop:

```text
Home
Services
Fleet
Vacation
Event
Corporate
About
```

Mobile:

- condensed menu;
- sticky CTA.

Mega menu desktop hanya jika memang membantu.

Jangan membuat navigation terlalu kompleks.

---

# 36. CTA Architecture

Primary:

> **Book Your Ride**

Secondary:

> **WhatsApp**

Supporting:

- Explore Fleet;
- View Details;
- Info Lengkap;
- Corporate Inquiry;
- Become a Partner.

CTA label harus konsisten.

---

# 37. Performance Budget

Target awal:

## Mobile

- LCP < 2.5s;
- CLS < 0.1;
- INP < 200ms.

Target bundle:

- minimal client-side JavaScript;
- no unnecessary UI libraries.

Hero:

- optimized;
- responsive;
- tidak menggunakan oversized autoplay video sebagai default.

---

# 38. Client Component Rule

Default:

> Server Component.

Gunakan `"use client"` hanya untuk:

- carousel interaction;
- booking wizard;
- accordion;
- modal;
- mobile menu;
- sticky interaction;
- analytics event wrapper.

Jangan menjadikan seluruh landing page client component.

---

# 39. Font Architecture

Font harus:

- local/self-hosted bila memungkinkan;
- subset;
- preload secukupnya.

Rekomendasi sesuai blueprint:

- Manrope + Inter;
- atau Plus Jakarta Sans + Inter.

Hindari terlalu banyak weight.

---

# 40. Accessibility Architecture

Target:

> WCAG AA semaksimal mungkin.

Harus ada:

- semantic HTML;
- heading hierarchy;
- keyboard access;
- focus state;
- labels;
- alt text;
- adequate contrast;
- reduced motion;
- button semantics;
- touch target minimum.

---

# 41. Reduced Motion

Jika user memakai:

```text
prefers-reduced-motion: reduce
```

maka:

- marquee berhenti;
- animation diminimalkan;
- transition dipersingkat/dimatikan.

---

# 42. Analytics

Initial recommendation:

- Google Analytics / GA4;
- optional Google Tag Manager.

Track event:

```text
booking_start
booking_submit
whatsapp_click
fleet_view
fleet_book
service_view
package_view
corporate_inquiry
partner_inquiry
```

Analytics tidak boleh merusak performance.

---

# 43. Conversion Tracking

CTA utama harus mempunyai event tracking.

Contoh:

```text
Hero Book Now
Sticky Mobile WhatsApp
Fleet Book
Airport Transfer CTA
Wedding CTA
Corporate Inquiry
```

Tujuan:

- mengetahui section mana paling menghasilkan inquiry;
- bukan sekadar menghitung page view.

---

# 44. Security

Untuk marketing MVP:

- no secrets in frontend;
- environment variables;
- input validation;
- sanitize user input;
- CSP bila memungkinkan;
- HTTPS wajib;
- secure headers.

Jika ada API:

- rate limiting;
- validation;
- bot protection;
- logging.

---

# 45. Environment Variables

Contoh:

```text
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_GA_ID=
```

Future:

```text
DATABASE_URL=
PAYMENT_API_KEY=
BOOKING_API_SECRET=
```

Secret key tidak boleh memakai `NEXT_PUBLIC_`.

---

# 46. Error Handling

Harus tersedia:

- custom 404;
- graceful form error;
- booking validation error;
- fallback image;
- network error state jika nanti memakai API.

Jangan menampilkan raw stack trace ke customer.

---

# 47. Empty States

Contoh:

Jika fleet filter kosong:

> Kendaraan untuk kategori ini sedang belum tersedia. Hubungi TRAVELOZZY untuk rekomendasi kendaraan lain.

CTA:

> WhatsApp

---

# 48. Testing Architecture

Minimum:

## Unit

Untuk:

- formatter;
- booking message builder;
- filter;
- validation.

## Component

Untuk:

- booking wizard;
- mobile CTA;
- responsive copy;
- fleet filter.

## E2E

Untuk flow:

```text
Home
↓
Select Service
↓
Choose Vehicle
↓
Booking
↓
WhatsApp CTA
```

Recommended:

- Vitest;
- Testing Library;
- Playwright.

---

# 49. Responsive Testing Matrix

Minimal viewport:

```text
360px
390px
430px
768px
1024px
1440px
```

Wajib audit:

- sticky CTA;
- hero;
- booking form;
- fleet carousel;
- long text;
- modal;
- footer.

---

# 50. Browser Support

Target modern browser:

- Chrome;
- Edge;
- Safari;
- Firefox;
- mobile Chrome;
- mobile Safari.

Tidak perlu legacy IE.

---

# 51. Deployment Architecture

Recommended:

## Option A — Vercel

Cocok untuk:

- Next.js;
- simple deployment;
- automatic image optimization;
- preview deployment.

## Option B — VPS + Docker

Cocok bila ingin:

- infrastructure control;
- digabung dengan existing server;
- Nginx reverse proxy;
- Cloudflare.

Example:

```text
Internet
↓
Cloudflare
↓
Nginx
↓
Docker
↓
Next.js
```

---

# 52. Docker Architecture

Production container:

```text
Node LTS
↓
Next.js Build
↓
Standalone Output
↓
Port 3000
```

Nginx:

```text
travelozzy.domain
↓
127.0.0.1:<port>
```

Gunakan:

- multi-stage build;
- non-root runtime user;
- health check.

---

# 53. CDN / Edge

Static asset dapat dilayani melalui:

- Cloudflare;
- Vercel Edge/CDN.

Cache:

- images;
- fonts;
- static assets.

HTML dynamic jangan dicache secara agresif jika booking engine nanti menjadi personalized.

---

# 54. CMS Strategy

MVP:

> code-driven structured content.

Artinya:

```text
content/services.ts
content/fleet.ts
content/packages.ts
```

Tidak perlu CMS pada awal.

Future CMS baru dipertimbangkan jika:

- staff non-technical sering update fleet;
- pricing sering berubah;
- destinations bertambah cepat;
- blog/SEO content dikelola marketing.

---

# 55. Admin Strategy

Admin dashboard **tidak termasuk MVP landing page**.

Future admin dapat mengelola:

- fleet;
- pricing;
- package;
- destination;
- booking;
- availability;
- customer.

Jangan memasukkan admin complexity ke landing page phase awal.

---

# 56. Logging

MVP:

- deployment log;
- build log;
- error log.

Future:

- booking activity;
- payment;
- admin audit.

PII tidak boleh dicetak berlebihan ke log.

---

# 57. Privacy

Jika mengumpulkan:

- name;
- phone;
- travel detail;

website perlu:

- privacy notice;
- consent sesuai kebutuhan;
- data minimization.

MVP berbasis WhatsApp tetap harus menjelaskan bahwa inquiry akan diteruskan melalui WhatsApp.

---

# 58. Service Integration Boundary

Integrasi eksternal harus berada di layer:

```text
lib/integrations/
```

Contoh future:

```text
whatsapp.ts
maps.ts
payment.ts
analytics.ts
```

Component UI tidak boleh langsung dipenuhi logic vendor.

---

# 59. Maps

Jika kelak diperlukan:

- airport pickup;
- location input;
- route estimate;

map provider dapat ditambahkan kemudian.

MVP cukup menggunakan:

- text location;
- predefined destination;
- WhatsApp confirmation.

Jangan menambah maps SDK jika belum dibutuhkan karena menambah bundle.

---

# 60. Pricing Strategy

Pricing dapat memiliki tiga mode:

1. **Public Exact Price**
2. **Starting From**
3. **Ask for Quote**

Data model harus mendukung ketiganya.

Contoh:

```ts
type PriceMode = "exact" | "starting_from" | "quote";
```

Luxury / corporate dapat memakai:

> Ask for Quote

Daily rental dapat memakai:

> Starting From

---

# 61. Availability Strategy

MVP:

> availability confirmed manually.

Future:

```text
Vehicle Class
↓
Fleet Units
↓
Availability Calendar
↓
Reservation Lock
```

Jangan menjanjikan realtime availability bila backend belum memilikinya.

---

# 62. Content Source of Truth

Urutan referensi:

## Brand / UX / Visual

`TRAVELOZZY_BLUEPRINT.md`

## Technical

`TRAVELOZZY_ARCHITECTURE.md`

## Project Summary

`TRAVELOZZY_README.md`

## Work Progress

`ROADMAP.md`

Jika terdapat konflik teknis:

> `ARCHITECTURE.md` menjadi sumber utama.

Jika terdapat konflik design:

> `BLUEPRINT.md` menjadi sumber utama.

---

# 63. Coding Principles

Gunakan:

- TypeScript strict;
- small components;
- clear naming;
- reusable data;
- no duplicated business data;
- semantic HTML;
- predictable file structure.

Avoid:

- giant `page.tsx`;
- inline massive content;
- unnecessary global state;
- unnecessary dependency;
- visual magic numbers tersebar.

---

# 64. Component Responsibility Rule

Satu component mempunyai satu tanggung jawab utama.

Bad:

```text
HeroBookingFleetCorporateMegaComponent
```

Good:

```text
HeroSection
QuickBooking
FeaturedFleet
CorporateSection
```

---

# 65. Mobile Sticky CTA Technical Rule

Sticky CTA:

```text
position: fixed
bottom: env(safe-area-inset-bottom)
```

Harus memperhitungkan:

- iPhone safe area;
- browser bottom bar;
- footer spacing.

Konten terakhir harus memiliki bottom padding agar tidak tertutup sticky CTA.

---

# 66. Progressive Enhancement

Website tetap harus mempunyai core content walaupun:

- JavaScript terlambat;
- animation gagal;
- carousel library gagal.

Critical:

- phone;
- services;
- fleet;
- CTA;

harus tetap terlihat.

---

# 67. Graceful Degradation

Jika interactive recommendation belum tersedia:

> tampilkan default Featured Fleet.

Jika API booking gagal:

> fallback ke WhatsApp.

Jika image gagal:

> fallback placeholder.

Conversion tidak boleh mati hanya karena satu integration gagal.

---

# 68. Initial Architecture Decision

Untuk MVP, architecture final recommendation:

```text
Next.js 16
TypeScript
Tailwind CSS
Static-first rendering
Structured local content
Server Components by default
Minimal client-side JavaScript
WhatsApp-based inquiry
SEO-first routing
Responsive content variants
Docker/Vercel deployable
```

---

# 69. Future Evolution

MVP:

```text
Marketing + Inquiry
```

Phase berikutnya:

```text
Marketing + Booking
```

Kemudian:

```text
Booking + Availability + Payment
```

Lalu:

```text
Customer Account + Corporate + Partner
```

Arsitektur awal harus memungkinkan evolusi tersebut tanpa perlu rewrite total.

---

# 70. Architecture Status

- [x] Framework direction
- [x] Rendering strategy
- [x] Folder structure
- [x] Component architecture
- [x] Content layer
- [x] Responsive content architecture
- [x] Fleet model
- [x] Package model
- [x] Destination model
- [x] Booking MVP flow
- [x] WhatsApp conversion flow
- [x] SEO architecture
- [x] Performance direction
- [x] Accessibility direction
- [x] Security baseline
- [x] Analytics direction
- [x] Deployment direction
- [ ] ROADMAP.md
- [ ] Technical implementation
