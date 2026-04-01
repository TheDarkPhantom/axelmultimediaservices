# Axel Multimedia Services — Improvement Roadmap

## Current State

The website is ~85% complete with polished design, strong SEO foundations, and well-organized code. The main gaps fall into three categories: **missing functionality**, **placeholder content**, and **production readiness**.

---

## Tier 1: Critical (Must-Have Before Launch)

### 1. Wire up the contact form
- `components/contact/ContactForm.tsx:34` has a TODO — form validates but **doesn't send emails**
- Options: Next.js API route + Resend, or Formspree/EmailJS for zero-backend
- This is the primary lead-generation mechanism — blocking issue

### 2. Replace all placeholder portfolio images
- All 12 portfolio items in `lib/clients-data.ts` use `placehold.co` URLs
- Need real event photos from the client (or at minimum, representative stock)
- Remove `placehold.co` from `next.config.mjs` remotePatterns once replaced

### 3. Complete missing business info in `lib/constants.ts`
- Phone number (empty)
- Street address (empty)
- YouTube channel URL (empty)
- Confirm founding date (marked TODO)

### 4. Complete the About page
- `app/about/page.tsx` has placeholder team members (initials only, no photos)
- Equipment section has placeholder specs
- Founding story marked as placeholder

---

## Tier 2: High Priority (Pre-Launch or Shortly After)

### 5. Add analytics
- No analytics of any kind is installed — no GA4, no Vercel Analytics, nothing
- At minimum: Google Analytics 4 + Google Search Console verification
- Vercel Analytics / Speed Insights would be easy to add for Web Vitals

### 6. Add legal pages
- No `/privacy` or `/terms` page — may be required depending on data collection
- Contact form collects personal data (name, email, phone) so a privacy policy is advisable

### 7. Add error tracking
- No Sentry, no error boundary beyond Next.js defaults
- A custom `app/not-found.tsx` and `app/error.tsx` would improve UX

### 8. Portfolio lightbox / video modal
- TODO at portfolio level: "Add lightbox or video modal — deferred to v2"
- For a multimedia company, being able to **watch** work samples is essential
- Could use a simple modal with embedded YouTube/Vimeo or HTML5 video

---

## Tier 3: Medium Priority (Post-Launch Enhancements)

### 9. Blog / case studies section
- Would significantly help SEO (long-tail keywords for event production in Visayas)
- Case studies showing before/after or behind-the-scenes of events
- Could reuse existing portfolio data as seed content

### 10. Testimonials / social proof
- Client logos scroll in the marquee, but there are no quotes or testimonials
- Adding 3-5 client testimonials with names/titles would boost credibility
- Could add a Review schema for structured data

### 11. FAQ page with schema
- Common questions about pricing, coverage area, equipment, booking process
- FAQ schema markup improves search appearance with rich snippets

### 12. Dynamic OG images
- Currently uses a static OG image
- Could generate per-service and per-portfolio-item OG images using `@vercel/og` / Satori

### 13. Performance tuning
- Add a poster image for the hero video (improves LCP, prevents blank flash)
- Add `loading="lazy"` / Suspense boundaries for below-fold sections
- Consider `optimizePackageImports` in next.config for framer-motion and lucide-react

### 14. Security headers
- No custom headers configured (CSP, X-Frame-Options, etc.)
- Can be added via `next.config.mjs` headers config

---

## Tier 4: Future Ideas

- **Online booking / scheduling** — Calendly embed or custom booking flow
- **Multi-language support** — English + Filipino/Hiligaynon for local market
- **Service packages / pricing page** — Transparent pricing tiers
- **Newsletter signup** — Email list building with Resend or Mailchimp
- **WhatsApp integration** — Floating chat button (very common in PH market)
- **Google Maps embed** — On contact page showing Iloilo City location
- **Client portal** — Private area for clients to download event footage
- **Accessibility audit** — WCAG compliance check (basics are there but not audited)

---

## What's Already Strong

- Dark cinematic design with consistent gold/silver palette
- Comprehensive SEO (metadata, JSON-LD, sitemap, robots)
- Smooth Framer Motion animations throughout
- Well-typed TypeScript with clean data architecture
- Mobile-responsive with proper Sheet menu
- Good component organization (shared, home, layout, ui)
