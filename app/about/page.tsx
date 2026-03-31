import type { Metadata } from "next";
import Image from "next/image";
import { Camera, Plane, HardDrive } from "lucide-react";
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
    name: "Team Member",
    role: "Production Director",
    placeholder: "/placeholder-team.jpg",
  },
  {
    name: "Team Member",
    role: "Lead Camera Operator",
    placeholder: "/placeholder-team.jpg",
  },
  {
    name: "Team Member",
    role: "Streaming Engineer",
    placeholder: "/placeholder-team.jpg",
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
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeUp>
            <blockquote className="relative">
              <span className="absolute -left-2 -top-4 font-heading text-6xl text-gold/40 md:-left-6 md:-top-6 md:text-8xl">
                &ldquo;
              </span>
              <p className="font-heading text-2xl italic text-foreground md:text-4xl">
                We believe every event deserves a broadcast-quality story.
              </p>
              <span className="absolute -bottom-8 -right-2 font-heading text-6xl text-gold/40 md:-bottom-10 md:-right-6 md:text-8xl">
                &rdquo;
              </span>
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
              return (
                <FadeUp key={block.title} delay={index * 0.1}>
                  <div className="rounded-sm border border-white/5 bg-surface p-8">
                    <Icon className="text-gold" size={28} />
                    <h3 className="mt-4 text-lg font-medium text-foreground">
                      {block.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/60">
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
                  <div className="mx-auto h-32 w-32 overflow-hidden rounded-full bg-surface-2">
                    <Image
                      src={member.placeholder}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-medium text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-foreground/50">
                    {member.role}
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
