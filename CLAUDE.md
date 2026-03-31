# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build — generates all static pages
npm run lint     # ESLint with next/core-web-vitals + next/typescript
npx tsc --noEmit # Type-check without emitting
```

## Architecture

Next.js 14 App Router website for Axel Multimedia Services — a premium broadcasting company in Iloilo City, Philippines. All pages are statically generated at build time (SSG). No API routes or server-side data fetching.

### Stack

- **Next.js 14** with App Router (NOT 16 — synchronous params, no `'use cache'`)
- **Tailwind CSS v3** with `tailwind.config.ts` (NOT v4)
- **shadcn/ui** (base-nova style, configured in `components.json`)
- **Framer Motion** for all animations
- **react-hook-form + zod** for the contact form
- **sonner** for toast notifications
- **lucide-react** for icons (no brand icons — Facebook/YouTube are custom SVGs in Footer)

### Data Flow

All content lives in TypeScript files — no CMS, no database:
- `lib/constants.ts` — site config, business info, nav links, trust stats
- `lib/services-data.ts` — 6 services with full copy, `getServiceBySlug()`, `getServiceSlugs()`, `getAllServices()`
- `lib/clients-data.ts` — client names, 12 portfolio items with categories, filter helpers
- `lib/metadata.ts` — JSON-LD schema generators (LocalBusiness, Organization, Service, Breadcrumb, etc.)

### Design System

Dark cinematic theme — pure black background with gold (#C9A84C) and silver (#B0B8C1) accents.

- **Fonts**: `font-heading` = Cormorant Garamond (editorial headings), `font-sans` = DM Sans (body)
- **Custom Tailwind colors**: `gold` (DEFAULT/light/dark), `silver`, `surface` (DEFAULT = #111111, 2 = #1a1a1a)
- **shadcn tokens**: `background`, `foreground`, `card`, `muted`, `primary`, `border` — all mapped to dark theme HSL values in `app/globals.css`
- **Radius**: 0.25rem (sharp corners for premium feel)
- **CSS custom property**: `.marquee-mask` for client marquee fade edges

### Component Conventions

- `components/shared/` — reusable primitives: `FadeUp` (Framer Motion scroll-reveal), `SectionLabel` (gold uppercase eyebrow text), `GoldDivider`
- `components/home/` — homepage sections, some reused on other pages (`ClientsMarquee`, `CTABanner`)
- `components/layout/` — Navbar (scroll-aware, mobile Sheet), Footer, Preloader (sessionStorage one-time video)
- `components/ui/` — shadcn-managed, do not manually edit these
- `"use client"` only where needed (Framer Motion hooks, form state, browser APIs). All other components are Server Components.

### Dynamic Routes

`app/services/[slug]/page.tsx` uses Next.js 14 synchronous params pattern:
```ts
export function generateStaticParams() { ... }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { ... }
export default function Page({ params }: { params: { slug: string } }) { ... }
```
Do NOT use `async`, `await`, or `Promise<>` for params.

### SEO

Every page exports metadata. Homepage injects JSON-LD via `<script type="application/ld+json" dangerouslySetInnerHTML>`. Title template: `"%s | Axel Multimedia Services"`. Sitemap and robots generated from `app/sitemap.ts` and `app/robots.ts`.

### Assets

- `/public/videos/hero.mp4` — hero background video
- `/public/logo.png` — transparent logo used in Navbar, Footer, Preloader, and metadata
- `/public/AMMS Logo.png` and `/public/AMMS Logo Transparent.png` — original logo files from client
- Portfolio images currently use `placehold.co` URLs — `next.config.mjs` has this domain allowlisted.
