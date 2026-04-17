# Axel Multimedia Services — TODO

Single source of truth for outstanding work. Replaces the old `nextsteps.md` and all inline `// TODO:` comments scattered in the codebase.

Site is **live** at https://axelmultimediaservices.com/ (hosted on Vercel, auto-deploys from `main`).

---

## Tier 1 — Critical (blocks real usage)

- [ ] **Wire up the contact form to actually send email.**
  Source: [components/contact/ContactForm.tsx:34](components/contact/ContactForm.tsx#L34). Form validates and shows a toast but nothing is sent. Recommended: Next.js Route Handler + Resend (domain-verified sender), or a Server Action. This is the primary lead-generation path — currently broken.
- [ ] **Replace placeholder portfolio images.**
  Source: [lib/clients-data.ts:41](lib/clients-data.ts#L41). All 12 items use `placehold.co` URLs. Collect real event photos from the client, drop them in `/public/portfolio/`, and update the `image` fields. Once done, remove the `placehold.co` entry from [next.config.mjs](next.config.mjs).
- [ ] **Create the missing OG image.**
  [app/layout.tsx](app/layout.tsx) and `DEFAULT_OG_IMAGE` in [lib/constants.ts:52](lib/constants.ts#L52) point at `/og-image.jpg`, but the file doesn't exist in `/public/`. Social previews on Facebook, LinkedIn, iMessage, etc. are broken until this is added. 1200×630 JPG or PNG.
- [ ] **Fill in missing business info in [lib/constants.ts](lib/constants.ts).**
  - `social.youtube` (line 11) — YouTube channel URL
  - `telephone` / `telephoneDisplay` (lines 19–20) — phone number
  - `address.streetAddress` (line 25) — street address
  - `foundingDate` (line 23) — confirm actual year (currently 2017)
  - `TRUST_STATS` "Years in Operation" (line 42) — reconcile with confirmed founding date
- [ ] **Finish the About page.**
  - [app/about/page.tsx:111](app/about/page.tsx#L111) — founding story is still placeholder copy
  - [app/about/page.tsx:245](app/about/page.tsx#L245) — equipment specs are placeholder, pending client approval

---

## Tier 2 — High priority (should land soon after launch)

- [ ] **Add Vercel Analytics + Speed Insights.**
  `npm i @vercel/analytics @vercel/speed-insights`, mount `<Analytics />` and `<SpeedInsights />` in [app/layout.tsx](app/layout.tsx). Zero-config on Vercel and gives real Web Vitals data.
- [ ] **Add Google Analytics 4 + Search Console verification.**
  GA4 for conversion tracking, Search Console for indexing health. GSC verification can be done via DNS (preferred) or a meta tag in `metadata.verification`.
- [ ] **Set `NEXT_PUBLIC_SITE_URL` in the Vercel project.**
  Code falls back to `https://axelmultimediaservices.com`, but explicitly setting it for Production / Preview / Development avoids surprises on preview deployments (where social cards would otherwise point at prod).
- [ ] **Add a `/privacy` page (and `/terms` if desired).**
  Contact form collects name / email / phone — a privacy policy is advisable and required by some platforms (Google Ads, Facebook Pixel, etc.) if those are added later.
- [ ] **Custom `app/not-found.tsx` and `app/error.tsx`.**
  Right now users hit Next.js default error pages. On-brand 404 / 500 pages are a small lift with a big polish payoff.
- [ ] **Portfolio lightbox / video modal.**
  Source: [app/portfolio/PortfolioGrid.tsx:12](app/portfolio/PortfolioGrid.tsx#L12). Deferred to v2 in the original code comment. For a multimedia company, being able to actually *watch* work samples is the core value prop. Embedded YouTube/Vimeo or HTML5 video in a Radix Dialog works.
- [ ] **Spam protection on the contact form.**
  Once the form is wired, add **[Vercel BotID](https://vercel.com/docs/botid)** (platform-native, invisible to real users) or hCaptcha before the Resend call.

---

## Tier 3 — Medium priority (enhancements)

- [ ] **Client testimonials with Review schema.**
  Marquee shows logos but no quotes. 3–5 named testimonials dramatically boost credibility and unlock `Review` structured data.
- [ ] **FAQ page with FAQPage JSON-LD.**
  Pricing, coverage area, equipment, booking process. FAQ schema earns rich snippets in search.
- [ ] **Blog / case-studies section.**
  Long-tail SEO for Visayas event production queries; behind-the-scenes of specific events; can seed from existing portfolio data.
- [ ] **Dynamic OG images via `@vercel/og`.**
  Per-service and per-portfolio-item cards with the title rendered on brand-colored background. One static OG (Tier 1) first; dynamic is the polish layer.
- [ ] **Security headers.**
  CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy. Configure via the `headers()` export in [next.config.mjs](next.config.mjs), or introduce a [vercel.ts](https://vercel.com/docs/project-configuration/vercel-ts) config if more platform-level control is needed.
- [ ] **Performance tuning.**
  - Add a poster image for the hero video (fixes LCP + blank flash)
  - `optimizePackageImports` in [next.config.mjs](next.config.mjs) for `framer-motion` and `lucide-react`
  - Audit below-fold sections for lazy loading / Suspense boundaries

---

## Tier 4 — Future ideas

- Online booking / scheduling (Calendly embed or custom flow)
- Multi-language support (English + Hiligaynon/Filipino for the local market)
- Service packages / transparent pricing page
- Newsletter signup (Resend audiences or Mailchimp)
- Floating WhatsApp button (very common on PH business sites)
- Google Maps embed on the contact page
- Client portal for footage download (could use Vercel Blob private storage)
- Formal accessibility audit (WCAG 2.2 AA)

---

## Vercel-specific checklist

Housekeeping on the hosting platform itself:

- [ ] Confirm the custom domain `axelmultimediaservices.com` (+ `www.` redirect) is configured and the SSL certificate is healthy.
- [ ] Set `NEXT_PUBLIC_SITE_URL` in Production / Preview / Development env scopes.
- [ ] Enable **Vercel Analytics** and **Speed Insights** in the project dashboard (also requires the npm packages from Tier 2).
- [ ] Consider enabling **Rolling Releases** for safer prod rollouts once traffic picks up.
- [ ] Consider installing the **Resend** integration from the Vercel Marketplace when wiring the contact form — it auto-provisions `RESEND_API_KEY`.
- [ ] If custom headers / redirects / crons are ever needed, introduce [vercel.ts](https://vercel.com/docs/project-configuration/vercel-ts) (the current recommended config format). Not needed today.

---

## Recently shipped

For context on what's already done (recent commits on `main`):

- Live domain cutover to `axelmultimediaservices.com`
- Team section with real member photos
- Gear rentals page + sitemap + metadata
- Brand name text beside Navbar logo
- Preloader removed, team photos enlarged
