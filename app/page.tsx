import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ClientsMarquee } from "@/components/home/ClientsMarquee";
import { StatsSection } from "@/components/home/StatsSection";
import { BehindTheScenesTeasers } from "@/components/home/BehindTheScenesTeasers";
import { PortfolioTeaser } from "@/components/home/PortfolioTeaser";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CTABanner } from "@/components/home/CTABanner";
import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/lib/metadata";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <ClientsMarquee />
      <StatsSection />
      <BehindTheScenesTeasers />
      <PortfolioTeaser />
      <WhyChooseUs />
      <CTABanner />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateLocalBusinessSchema(),
            generateOrganizationSchema(),
            generateWebSiteSchema(),
          ]),
        }}
      />
    </>
  );
}
