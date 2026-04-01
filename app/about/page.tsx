import type { Metadata } from "next";
import {
  Camera,
  Plane,
  HardDrive,
  MessageCircle,
  ClipboardList,
  Settings,
  PlayCircle,
  Package,
} from "lucide-react";
import { SITE_URL } from "@/lib/constants";
import {
  generateWebPageSchema,
  generateBreadcrumbSchema,
} from "@/lib/metadata";
import { FadeUp } from "@/components/shared/FadeUp";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { GoldDivider } from "@/components/shared/GoldDivider";
import { ClientsMarquee } from "@/components/home/ClientsMarquee";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Axel Multimedia Services — Iloilo City's premier event production company. Professional live streaming, drone coverage, and video documentation since 2017.",
  openGraph: {
    title: "About Us | Axel Multimedia Services",
    description:
      "Learn about Axel Multimedia Services — Iloilo City's premier event production company.",
    url: `${SITE_URL}/about`,
  },
};

const equipmentBlocks = [
  {
    icon: Camera,
    title: "Multi-Camera Live Production",
    description:
      "Our production workflow integrates multiple broadcast-grade camera sources through professional video switching, enabling real-time camera cuts, picture-in-picture layouts, and seamless transitions. Every live output includes real-time graphics overlays, lower thirds, and broadcast-standard encoding for a polished, television-quality result.",
  },
  {
    icon: Plane,
    title: "Drone Aerial Systems",
    description:
      "Our professional-grade drone fleet captures stunning 4K aerial footage that integrates directly into live production feeds. Licensed pilots coordinate flight plans with event organizers and local authorities, delivering sweeping venue panoramas, dynamic flyovers, and cinematic reveal shots — live or recorded.",
  },
  {
    icon: HardDrive,
    title: "ISO Recording Infrastructure",
    description:
      "Every camera and audio source is recorded independently on isolated channels with timecode synchronization, giving you complete post-production flexibility. Redundant storage ensures that no footage is ever lost — even if a single drive fails, backup copies preserve every frame of your event.",
  },
];

// TODO: Add team member names and photos
const teamMembers = [
  {
    initials: "PD",
    role: "Production Director",
    description: "Coordinates every shoot from setup to delivery.",
  },
  {
    initials: "CO",
    role: "Lead Camera Operator",
    description: "Multi-camera switching and live broadcast operation.",
  },
  {
    initials: "SE",
    role: "Streaming Engineer",
    description: "Network redundancy, encoding, and platform management.",
  },
];

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "About", url: `${SITE_URL}/about` },
  ]);

  const webPageSchema = generateWebPageSchema(
    "About Us",
    "Learn about Axel Multimedia Services — Iloilo City's premier event production company.",
    `${SITE_URL}/about`
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, webPageSchema]),
        }}
      />

      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeUp>
            <h1 className="font-heading text-4xl font-light text-foreground md:text-6xl">
              About Axel Multimedia Services
            </h1>
          </FadeUp>
          <GoldDivider className="my-6" />
        </div>
      </section>

      {/* Mission Pull Quote */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <FadeUp>
            <blockquote className="relative py-4">
              {/* Decorative lines */}
              <div className="mx-auto mb-8 h-px w-16 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
              <span className="absolute left-0 top-0 font-heading text-7xl text-gold/25 md:text-9xl">
                &ldquo;
              </span>
              <p className="relative font-heading text-2xl italic leading-relaxed text-foreground md:text-4xl md:leading-relaxed">
                We believe every event deserves a broadcast-quality story.
              </p>
              <div className="mx-auto mt-8 h-px w-16 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            </blockquote>
          </FadeUp>
        </div>
      </section>

      {/* Story Section */}
      {/* TODO: Replace with actual founding story from client */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
            <FadeUp>
              <SectionLabel text="OUR STORY" centered={false} />
              <h2 className="mt-4 font-heading text-3xl text-foreground md:text-5xl">
                Built in Iloilo. Proven Across Region&nbsp;6.
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-5 text-base leading-relaxed text-foreground/70">
                <p>
                  Axel Multimedia Services was born from a simple observation:
                  the events happening across Western Visayas deserved the same
                  production quality as anything you&apos;d see on national
                  broadcast television. We started in Iloilo City with a small
                  team, professional-grade equipment, and an uncompromising
                  standard for every output that carried our name.
                </p>
                <p>
                  Over the years, we&apos;ve built our reputation one event at a
                  time — from the Dinagyang Festival&apos;s grand parade to
                  quiet government proceedings that demanded absolute reliability.
                  Our clients trust us because we treat a municipal town fiesta
                  livestream with the same technical rigor as a multi-day
                  regional summit. The scope changes; the standard doesn&apos;t.
                </p>
                <p>
                  Today, Axel Multimedia Services is the production partner of
                  choice for government agencies, educational institutions,
                  corporate brands, and cultural organizations across Iloilo,
                  Guimaras, and the wider Western Visayas region. Every project
                  has strengthened our operational playbook and expanded what
                  we&apos;re able to deliver — from single-camera documentation
                  to full multi-platform live broadcasts with aerial integration.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* How We Work — Process Timeline */}
      <section className="border-t border-white/5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <FadeUp>
              <SectionLabel text="HOW WE WORK" />
              <h2 className="mt-4 font-heading text-3xl text-foreground md:text-5xl">
                From First Call to Final Delivery
              </h2>
            </FadeUp>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-5">
            {[
              {
                icon: MessageCircle,
                num: "01",
                title: "Discovery Call",
                description:
                  "Tell us about your event — date, venue, audience, goals. We listen first, then recommend.",
              },
              {
                icon: ClipboardList,
                num: "02",
                title: "Planning & Scope",
                description:
                  "We define the production plan: camera count, streaming platforms, crew size, and deliverables.",
              },
              {
                icon: Settings,
                num: "03",
                title: "Pre-Production",
                description:
                  "Venue walkthrough, camera positions, network testing, and a full technical rehearsal.",
              },
              {
                icon: PlayCircle,
                num: "04",
                title: "Event Day",
                description:
                  "Our crew arrives early, sets up, and runs the production while you focus on your event.",
              },
              {
                icon: Package,
                num: "05",
                title: "Delivery",
                description:
                  "Organized footage, highlight reels, and stream analytics — delivered in your preferred format.",
              },
            ].map((step, index) => {
              const StepIcon = step.icon;
              return (
                <FadeUp key={step.num} delay={index * 0.1}>
                  <div className="relative text-center md:text-left">
                    {/* Connector line (hidden on mobile, on last item) */}
                    {index < 4 && (
                      <div className="absolute left-1/2 top-12 hidden h-px w-full bg-gradient-to-r from-gold/20 to-gold/5 md:block" />
                    )}
                    {/* Number + Icon */}
                    <div className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/20 bg-surface md:mx-0">
                      <StepIcon className="text-gold" size={22} />
                      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-semibold text-black">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-sm font-medium text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-foreground/45">
                      {step.description}
                    </p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="border-t border-white/5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <FadeUp>
              <SectionLabel text="OUR CAPABILITIES" />
              <h2 className="mt-4 font-heading text-3xl text-foreground md:text-5xl">
                Professional-Grade Equipment
              </h2>
              <GoldDivider className="my-6" />
            </FadeUp>
          </div>
          {/* TODO: Add specific equipment specs if client approves */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {equipmentBlocks.map((block, index) => {
              const Icon = block.icon;
              const num = String(index + 1).padStart(2, "0");
              return (
                <FadeUp key={block.title} delay={index * 0.1}>
                  <div className="relative overflow-hidden rounded-sm border border-white/5 bg-surface p-8">
                    <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-gold/40 via-gold/20 to-transparent" />
                    <span className="absolute right-5 top-4 font-heading text-4xl font-light text-white/[0.08]">
                      {num}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/5">
                      <Icon className={index % 2 === 0 ? "text-gold" : "text-silver"} size={22} />
                    </div>
                    <h3 className="mt-5 text-base font-medium text-foreground">
                      {block.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/50">
                      {block.description}
                    </p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="border-t border-white/5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <FadeUp>
              <SectionLabel text="THE PEOPLE" />
              <h2 className="mt-4 font-heading text-3xl text-foreground md:text-5xl">
                The Team
              </h2>
              <GoldDivider className="my-6" />
            </FadeUp>
          </div>
          {/* TODO: Add team member names and photos */}
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <FadeUp key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-gold/20 bg-gradient-to-br from-surface-2 to-surface">
                    <span className="font-heading text-2xl font-light text-gold/60">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-medium text-foreground">
                    {member.role}
                  </h3>
                  <p className="mt-1 text-sm text-foreground/40">
                    {member.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <ClientsMarquee />
      <CTABanner />
    </>
  );
}
