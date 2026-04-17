import Link from "next/link";
import { getFeaturedBTSVideos, BTS_VIDEOS } from "@/lib/bts-data";
import { FadeUp } from "@/components/shared/FadeUp";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { GoldDivider } from "@/components/shared/GoldDivider";
import { YouTubeEmbed } from "@/components/shared/YouTubeEmbed";

export function BehindTheScenesTeasers() {
  const featured = getFeaturedBTSVideos();
  const totalCount = BTS_VIDEOS.length;

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <FadeUp>
            <SectionLabel text="BEHIND THE SCENES" />
            <h2 className="mt-4 font-heading text-3xl text-foreground md:text-5xl">
              A Look Inside the Craft
            </h2>
          </FadeUp>
          <GoldDivider className="my-6" />
          <FadeUp delay={0.1}>
            <p className="mx-auto max-w-2xl text-base text-foreground/50 md:text-lg">
              Rigs being set, cameras rolling, edit bays at 2 a.m. The work
              behind the work.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((video, index) => (
            <FadeUp key={`${video.id}-${index}`} delay={index * 0.1}>
              <YouTubeEmbed videoId={video.id} title={video.title} />
              <h3 className="mt-4 font-medium text-foreground">
                {video.title}
              </h3>
              {video.description && (
                <p className="mt-1 text-sm text-foreground/50">
                  {video.description}
                </p>
              )}
            </FadeUp>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/behind-the-scenes"
            className="inline-block rounded-sm border border-gold/60 px-8 py-3 text-sm font-medium text-gold transition-all hover:bg-gold/10 hover:border-gold"
          >
            View All {totalCount} Behind-the-Scenes &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
