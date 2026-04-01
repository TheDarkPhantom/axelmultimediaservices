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
import type { ServiceData, ServiceIconName } from "@/lib/services-data";
import { FadeUp } from "@/components/shared/FadeUp";

const iconMap: Record<ServiceIconName, LucideIcon> = {
  Radio,
  Plane,
  Video,
  Zap,
  Smartphone,
  Layers,
};

interface ServiceCardProps {
  service: ServiceData;
  expanded?: boolean;
  delay?: number;
}

export function ServiceCard({
  service,
  expanded,
  delay = 0,
  index,
}: ServiceCardProps & { index?: number }) {
  const Icon = iconMap[service.icon];
  const num = index !== undefined ? String(index + 1).padStart(2, "0") : null;

  return (
    <FadeUp delay={delay}>
      <Link href={`/services/${service.slug}`} className="group block h-full">
        <div className="relative h-full overflow-hidden rounded-sm border border-white/5 bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_8px_30px_rgba(201,168,76,0.06)]">
          {/* Gold top accent */}
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-gold/40 via-gold/20 to-transparent" />
          {/* Editorial number */}
          {num && (
            <span className="absolute right-6 top-5 font-heading text-5xl font-light text-white/[0.08] transition-colors duration-300 group-hover:text-gold/20">
              {num}
            </span>
          )}

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/5">
            <Icon className="text-gold" size={22} />
          </div>
          <h3 className="mt-5 text-base font-medium text-foreground">
            {service.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground/50">
            {expanded ? service.description[0] : service.shortDescription}
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
}
