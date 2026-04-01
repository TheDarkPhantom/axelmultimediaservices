import { FadeUp } from "@/components/shared/FadeUp";
import { SectionLabel } from "@/components/shared/SectionLabel";

const differentiators = [
  {
    title: "End-to-End Production",
    description:
      "Pre-event rigging through final delivery. One crew, one standard, zero handoffs.",
  },
  {
    title: "Live Streaming Specialists",
    description:
      "Multi-platform broadcast with redundant internet, backup encoders, and zero signal drops.",
  },
  {
    title: "Built Around Your Budget",
    description:
      "No rigid packages. We scope every project to your venue, audience, and timeline.",
  },
  {
    title: "Region 6's Trusted Crew",
    description:
      "Government agencies, corporations, and Iloilo's biggest cultural events trust our team.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-16">
          {/* Left column */}
          <FadeUp>
            <div>
              <SectionLabel text="WHY AXEL" centered={false} />
              <h2 className="mt-4 font-heading text-3xl text-foreground md:text-4xl">
                The Region&apos;s Production Standard.
              </h2>
              <div className="mt-10 space-y-6">
                {differentiators.map((item, index) => (
                  <div
                    key={item.title}
                    className="flex gap-5 border-l-2 border-gold/40 pl-5 transition-colors hover:border-gold"
                  >
                    <span className="font-heading text-2xl font-light text-gold/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-medium text-foreground">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground/50">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Right column — quote panel */}
          <FadeUp delay={0.2}>
            <div className="relative overflow-hidden rounded-sm border border-white/5 bg-gradient-to-br from-surface-2 to-surface p-8 md:p-10">
              {/* Decorative X watermark */}
              <div className="absolute -right-8 -top-8 font-heading text-[160px] font-bold leading-none text-white/[0.02]">
                X
              </div>
              {/* Diagonal gold accent */}
              <div className="absolute -left-px bottom-0 top-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

              <span className="font-heading text-7xl leading-none text-gold/40">
                &ldquo;
              </span>
              <blockquote className="mt-1 font-heading text-xl italic leading-relaxed text-foreground/90 md:text-2xl">
                Every event has a story worth broadcasting. We make sure the
                world sees it.
              </blockquote>
              <div className="mt-8 flex items-center gap-3">
                <div className="h-px w-10 bg-gold/50" />
                <span className="text-sm tracking-wide text-silver">
                  Axel Multimedia Services
                </span>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
