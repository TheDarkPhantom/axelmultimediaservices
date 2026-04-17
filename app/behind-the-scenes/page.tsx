import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import {
  BTS_PLAYLIST_URL,
  BTS_VIDEOS,
  getAllBTSVideos,
} from "@/lib/bts-data";
import {
  generateWebPageSchema,
  generateBreadcrumbSchema,
} from "@/lib/metadata";
import { FadeUp } from "@/components/shared/FadeUp";
import { GoldDivider } from "@/components/shared/GoldDivider";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { YouTubeEmbed } from "@/components/shared/YouTubeEmbed";
import { CTABanner } from "@/components/home/CTABanner";

const PAGE_DESCRIPTION =
  "Behind-the-scenes footage from Axel Multimedia Services — rigging, live switching, drone ops, color grading, and same-day edits from events across Iloilo and Western Visayas.";

export const metadata: Metadata = {
  title: "Behind the Scenes",
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: "Behind the Scenes | Axel Multimedia Services",
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/behind-the-scenes`,
  },
};

export default function BehindTheScenesPage() {
  const videos = getAllBTSVideos();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Behind the Scenes", url: `${SITE_URL}/behind-the-scenes` },
  ]);

  const webPageSchema = generateWebPageSchema(
    "Behind the Scenes",
    PAGE_DESCRIPTION,
    `${SITE_URL}/behind-the-scenes`
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
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-surface/40 to-transparent" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <FadeUp>
            <SectionLabel text="BEHIND THE SCENES" />
            <h1 className="mt-4 font-heading text-4xl text-foreground md:text-6xl">
              The Work Behind the Work
            </h1>
          </FadeUp>
          <GoldDivider className="my-6" />
          <FadeUp delay={0.1}>
            <p className="mx-auto max-w-2xl text-base text-foreground/50 md:text-lg">
              Every broadcast, wedding, and corporate shoot we cover has a
              crew, a rig, and a rhythm you don&apos;t see on the final cut.
              Here&apos;s {BTS_VIDEOS.length} short looks at what goes into
              making it happen.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, index) => (
              <FadeUp
                key={`${video.id}-${index}`}
                delay={Math.min(index * 0.05, 0.3)}
              >
                <YouTubeEmbed videoId={video.id} title={video.title} />
                <h2 className="mt-4 font-medium text-foreground">
                  {video.title}
                </h2>
                {video.description && (
                  <p className="mt-1 text-sm text-foreground/50">
                    {video.description}
                  </p>
                )}
              </FadeUp>
            ))}
          </div>

          {/* Playlist CTA */}
          <div className="mt-16 rounded-sm border border-gold/20 bg-surface/40 px-6 py-10 text-center md:py-12">
            <FadeUp>
              <SectionLabel text="WATCH THE FULL PLAYLIST" />
              <h2 className="mt-4 font-heading text-2xl text-foreground md:text-3xl">
                Keep going on YouTube
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-foreground/50 md:text-base">
                New behind-the-scenes clips drop on our channel. Subscribe to
                see the next one before it lands here.
              </p>
              <a
                href={BTS_PLAYLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-sm bg-gold px-10 py-3.5 text-sm font-semibold uppercase tracking-wider text-black transition-all hover:bg-gold-light hover:shadow-[0_4px_20px_rgba(201,168,76,0.3)]"
              >
                Open Playlist on YouTube
              </a>
            </FadeUp>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
