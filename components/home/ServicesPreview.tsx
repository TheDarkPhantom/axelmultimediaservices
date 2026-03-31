import Link from "next/link";
import {
  Radio,
  Plane,
  Video,
  Zap,
  Smartphone,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { getAllServices } from "@/lib/services-data";
import type { ServiceIconName } from "@/lib/services-data";
import { FadeUp } from "@/components/shared/FadeUp";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { GoldDivider } from "@/components/shared/GoldDivider";

const iconMap: Record<ServiceIconName, LucideIcon> = {
  Radio,
  Plane,
  Video,
  Zap,
  Smartphone,
  Layers,
};

export function ServicesPreview() {
  const services = getAllServices();

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <SectionLabel text="WHAT WE DO" />
          <h2 className="mt-4 font-heading text-3xl text-foreground md:text-5xl">
            Full-Spectrum Event Production
          </h2>
          <GoldDivider className="my-6" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <FadeUp key={service.slug} delay={index * 0.1}>
                <div className="rounded-sm border border-white/5 bg-surface p-8 transition-all hover:border-gold/40 hover:shadow-[0_0_20px_rgba(201,168,76,0.08)]">
                  <Icon className="text-gold" size={28} />
                  <h3 className="mt-4 text-lg font-medium text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/60">
                    {service.shortDescription}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-4 inline-block text-sm text-gold hover:underline"
                  >
                    Learn More &rarr;
                  </Link>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
