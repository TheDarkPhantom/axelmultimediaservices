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
        <div className="mb-16 max-w-2xl">
          <SectionLabel text="WHAT WE DO" centered={false} />
          <h2 className="mt-4 font-heading text-3xl text-foreground md:text-5xl">
            Six Services. One Standard.
          </h2>
          <p className="mt-4 text-foreground/50">
            Every production is built around your event — no rigid packages, no
            cookie-cutter setups.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            const num = String(index + 1).padStart(2, "0");
            return (
              <FadeUp key={service.slug} delay={index * 0.08}>
                <Link href={`/services/${service.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-sm border border-white/5 bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_8px_30px_rgba(201,168,76,0.06)]">
                    {/* Editorial number */}
                    <span className="absolute right-6 top-5 font-heading text-5xl font-light text-white/[0.08] transition-colors duration-300 group-hover:text-gold/20">
                      {num}
                    </span>
                    {/* Gold top accent line */}
                    <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-gold/40 via-gold/20 to-transparent" />

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/5">
                      <Icon className="text-gold" size={22} />
                    </div>
                    <h3 className="mt-5 text-base font-medium text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/50">
                      {service.shortDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm text-gold/70 transition-colors group-hover:text-gold">
                      Learn More
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </span>
                  </div>
                </Link>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
