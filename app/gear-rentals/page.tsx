import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { getAllGearItems } from "@/lib/gear-rentals-data";
import {
  generateWebPageSchema,
  generateBreadcrumbSchema,
  generateOfferCatalogSchema,
} from "@/lib/metadata";
import { FadeUp } from "@/components/shared/FadeUp";
import { GoldDivider } from "@/components/shared/GoldDivider";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { GearInventory } from "@/components/gear-rentals/GearInventory";
import { GearRentalCTA } from "@/components/gear-rentals/GearRentalCTA";

export const metadata: Metadata = {
  title: "Gear Rentals",
  description:
    "Professional broadcasting and videography equipment available for rent in Iloilo City. Switchers, cameras, drones, lenses, gimbals, and more.",
  openGraph: {
    title: "Gear Rentals | Axel Multimedia Services",
    description:
      "Professional broadcasting and videography equipment available for rent in Iloilo City. Switchers, cameras, drones, lenses, gimbals, and more.",
    url: `${SITE_URL}/gear-rentals`,
  },
};

export default function GearRentalsPage() {
  const gearItems = getAllGearItems();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Gear Rentals", url: `${SITE_URL}/gear-rentals` },
  ]);

  const webPageSchema = generateWebPageSchema(
    "Gear Rentals",
    "Professional broadcasting and videography equipment available for rent in Iloilo City.",
    `${SITE_URL}/gear-rentals`
  );

  const offerCatalogSchema = generateOfferCatalogSchema(gearItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema,
            webPageSchema,
            offerCatalogSchema,
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-surface/40 to-transparent" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <FadeUp>
            <SectionLabel text="GEAR RENTALS" />
            <h1 className="mt-4 font-heading text-4xl text-foreground md:text-6xl">
              Professional Equipment, Available for Rent
            </h1>
          </FadeUp>
          <GoldDivider className="my-6" />
          <FadeUp delay={0.1}>
            <p className="mx-auto max-w-2xl text-base text-foreground/50 md:text-lg">
              Broadcast-grade and cinema-grade gear — available individually or
              as a complete production package. Contact us for rates.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Gear Inventory */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <GearInventory />
        </div>
      </section>

      {/* CTA */}
      <GearRentalCTA />
    </>
  );
}
