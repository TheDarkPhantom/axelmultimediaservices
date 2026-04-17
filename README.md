# Axel Multimedia Services

Marketing website for **Axel Multimedia Services** — a premium broadcasting and event coverage company based in Iloilo City, Philippines.

Live at **[axelmultimediaservices.com](https://axelmultimediaservices.com/)**.

## Stack

- **Next.js 14** (App Router, fully static / SSG — no API routes)
- **Tailwind CSS v3** + **shadcn/ui** (base-nova style)
- **Framer Motion** for animations
- **react-hook-form + zod** for the contact form
- **sonner** for toast notifications
- TypeScript everywhere, content authored in `lib/*-data.ts` files

See [CLAUDE.md](./CLAUDE.md) for detailed architecture notes.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint       # ESLint (next/core-web-vitals + next/typescript)
npx tsc --noEmit   # type-check
```

## Deployment

The site is hosted on **Vercel** and auto-deploys from `main`.

Optional environment variable (set in Vercel → Project → Settings → Environment Variables):

| Variable | Default | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://axelmultimediaservices.com` | Used for metadata, sitemap, and JSON-LD canonical URLs. |

No other env vars are required — all content is in the repo.

## Roadmap

Outstanding tasks (contact form wiring, real portfolio media, analytics, legal pages, etc.) live in [TODO.md](./TODO.md).
