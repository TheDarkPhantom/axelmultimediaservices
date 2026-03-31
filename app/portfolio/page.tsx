import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import {
  generateWebPageSchema,
  generateBreadcrumbSchema,
} from "@/lib/metadata";
import { FadeUp } from "@/components/shared/FadeUp";
import { GoldDivider } from "@/components/shared/GoldDivider";
import { PortfolioGrid } from "./PortfolioGrid";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore our portfolio of live streaming, drone coverage, video documentation, and event production projects across Iloilo City and Region 6.",
  openGraph: {
    title: "Our Work | Axel Multimedia Services",
    description:
      "Explore our portfolio of live streaming, drone coverage, video documentation, and event production projects across Iloilo City and Region 6.",
    url: `${SITE_URL}/portfolio`,
  },
};

export default function PortfolioPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Portfolio", url: `${SITE_URL}/portfolio` },
  ]);

  const webPageSchema = generateWebPageSchema(
    "Our Work",
    "Explore our portfolio of event production projects across Iloilo City and Region 6.",
    `${SITE_URL}/portfolio`
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
              Our Work
            </h1>
          </FadeUp>
          <GoldDivider className="my-6" />
          <FadeUp delay={0.1}>
            <p className="mx-auto max-w-2xl text-base text-foreground/60 md:text-lg">
              From government summits to festival stages — we&apos;ve covered it
              all.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Portfolio Filter + Grid */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <PortfolioGrid />
        </div>
      </section>
    </>
  );
}
