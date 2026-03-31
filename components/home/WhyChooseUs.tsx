import { FadeUp } from "@/components/shared/FadeUp";

const differentiators = [
  {
    title: "End-to-End Production",
    description:
      "From pre-event setup to final delivery, we own every detail.",
  },
  {
    title: "Live Streaming Specialists",
    description:
      "Multi-platform broadcast with redundant connections and zero signal drops.",
  },
  {
    title: "Built Around Your Budget",
    description:
      "No rigid packages. We scope every project around your specific requirements.",
  },
  {
    title: "Region 6's Trusted Crew",
    description:
      "Proven with government agencies, corporations, and Iloilo's biggest cultural events.",
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
              <h2 className="font-heading text-3xl text-foreground md:text-4xl">
                Premium Production. Local Expertise.
              </h2>
              <div className="mt-8 space-y-6">
                {differentiators.map((item) => (
                  <div key={item.title} className="border-l-2 border-gold pl-6">
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="mt-1 text-sm text-foreground/60">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Right column */}
          <FadeUp delay={0.2}>
            <div className="rounded-sm bg-surface-2 p-8 md:p-10">
              <span className="font-heading text-6xl leading-none text-gold">
                &ldquo;
              </span>
              <blockquote className="mt-2 font-heading text-xl italic leading-relaxed text-foreground/90 md:text-2xl">
                Every event has a story worth broadcasting. We make sure the
                world sees it.
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-px w-8 bg-gold" />
                <span className="text-sm text-foreground/50">
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
