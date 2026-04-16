# Team Section Design Spec

## Overview

Replace the placeholder team section on the About page with real team member data, photos (with initials fallback), and expandable bios. The founder gets a featured card; the rest of the crew displays in a 3-column grid.

## Data Layer — `lib/team-data.ts`

### Type

```ts
interface TeamMember {
  name: string;
  role: string;
  summary: string;   // 1 sentence, always visible
  bio: string;        // full description, shown on expand
  isFounder: boolean;
  photo: string | null; // path relative to /public, e.g. "/team/janjan-suarez.jpeg"
}
```

### Team Members (9 total)

**Founder:**

1. **Charlene Eiman Gallo** — Founder / Technical Director / Audio Technician
   - Summary: Founded Axel Multimedia Services to bring broadcast-level precision to events of every scale.
   - Bio: Polished version of provided copy emphasizing his vision that live events deserve professional broadcasting that reaches audiences beyond the venue.
   - Photo: null (no photo yet)

**Crew (8 members, in this order):**

2. **Emmanuel John Francisco** — Technical Director / Lead Camera Switcher
   - Summary: Architects the broadcast's visual and digital infrastructure for multi-camera productions.
   - Photo: `/team/Emmanuel John Francisco.png`

3. **Clifford Deocampo** — Camera Operator / Camera Switcher
   - Summary: Blends creative storytelling with precise live-stream execution across multi-camera setups.
   - Photo: null

4. **Janjan Suarez** — Camera Operator
   - Summary: Specializes in precision camera movement using gimbal and tripod systems for cinematic visuals.
   - Photo: `/team/Janjan Suarez.jpeg`

5. **Kamski Mena** — Camera Operator
   - Summary: A detail-driven storyteller who captures moments with purpose, precision, and cinematic impact.
   - Photo: null

6. **Ruben Java** — Camera Operator
   - Summary: Brings precision and intention to every frame, using gimbals for seamless camera movement.
   - Photo: null

7. **Kristine Espinosa** — Photographer / Camera Operator
   - Summary: A patient observer with a deep understanding of light, composition, and timing.
   - Photo: null

8. **Denrey Dumaguin** — Drone Pilot
   - Summary: Captures dynamic aerial perspectives grounded in safety, control, and environmental awareness.
   - Photo: null

9. **Maetrix Gonzales** — Film Editor
   - Summary: Crafts raw event moments into cohesive, cinematic narratives with intentional pacing and flow.
   - Photo: null

### Helpers

- `getFounder()` — returns the single founder member
- `getCrew()` — returns all non-founder members
- `getInitials(name: string)` — extracts first letter of first and last name

## Component — `components/about/TeamSection.tsx`

Client component (`"use client"`) for expand/collapse state.

### Founder Card

- Full-width centered card, max-w-3xl
- Horizontal layout on md+: photo/initials left, text right. Stacks vertically on mobile.
- Photo circle: ~120px, gold ring border (`border-gold/30`), or initials fallback in same circle style
- Name in `font-heading`, role below in `text-foreground/60`, summary always visible
- "Read more" button expands to full bio with smooth height transition
- Top gold accent border on card (matching equipment card pattern)

### Crew Grid

- 3 columns on lg, 2 on sm, 1 on mobile
- Each card: `bg-surface border border-white/5 rounded-sm`
- Photo circle centered at top (~80px), gold ring, or initials fallback
- Name, role, summary visible
- "Read more" expands to full bio
- Gold accent top-border (thin gradient line)

### Expand/Collapse

- Each card tracks its own expanded state via `useState`
- "Read more" / "Read less" toggle text in gold color
- Bio text fades in with a CSS transition on max-height (no Framer Motion dependency for this — keeps it simple)

### Animations

- `FadeUp` wrapper on founder card
- `FadeUp` with staggered `delay={index * 0.1}` on each crew card

## About Page Changes — `app/about/page.tsx`

- Remove the old `teamMembers` array and placeholder grid (lines 56-73, 291-324)
- Import and render `<TeamSection />` in the same position
- Section header ("THE PEOPLE" / "The Team" / `GoldDivider`) stays, rendered by the page — `TeamSection` handles everything below the divider

## Photo Convention

Photos go in `/public/team/` using the member's full name as filename (matching the `photo` field in data). When a new photo is added:
1. Drop the image file into `/public/team/`
2. Update the member's `photo` field in `lib/team-data.ts` from `null` to the path

## Next.js Config

Add `next.config.mjs` — no changes needed. Photos are local static assets served from `/public`.

## No New Routes

Everything lives on the existing `/about` page. No new pages or API routes.
