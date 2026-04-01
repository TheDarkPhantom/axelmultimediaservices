import type { Metadata } from "next";
import { getAllServices } from "@/lib/services-data";
import { ServiceCard } from "@/components/services/ServiceCard";
import { FadeUp } from "@/components/shared/FadeUp";
import { GoldDivider } from "@/components/shared/GoldDivider";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { SITE_URL } from "@/lib/constants";
import { generateWebPageSchema, generateBreadcrumbSchema } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Professional live streaming, drone coverage, video documentation, same-day edits, social media reels, and ISO multi-camera recording for events in Iloilo City and Region 6.",
  openGraph: {
    title: "Our Services | Axel Multimedia Services",
    description:
      "Professional live streaming, drone coverage, video documentation, same-day edits, social media reels, and ISO multi-camera recording for events in Iloilo City and Region 6.",
    url: `${SITE_URL}/services`,
  },
};

export default function ServicesPage() {
  const services = getAllServices();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Services", url: `${SITE_URL}/services` },
  ]);

  const webPageSchema = generateWebPageSchema(
    "Our Services",
    "Professional event production services in Iloilo City and Region 6, Philippines.",
    `${SITE_URL}/services`
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
            <SectionLabel text="SERVICES" />
            <h1 className="mt-4 font-heading text-4xl text-foreground md:text-6xl">
              What We Bring to Your Event
            </h1>
          </FadeUp>
          <GoldDivider className="my-6" />
          <FadeUp delay={0.1}>
            <p className="mx-auto max-w-2xl text-base text-foreground/50 md:text-lg">
              No off-the-shelf packages. Every production is scoped around your
              event — venue, audience, timeline, and budget.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                expanded
                index={index}
                delay={index * 0.08}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
