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

export function ServiceCard({ service, expanded, delay = 0 }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <FadeUp delay={delay}>
      <div className="h-full rounded-sm border border-white/5 bg-surface p-8 transition-all hover:border-gold/40 hover:shadow-[0_0_20px_rgba(201,168,76,0.08)]">
        <Icon className="text-gold" size={28} />
        <h3 className="mt-4 text-lg font-medium text-foreground">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground/60">
          {expanded ? service.description[0] : service.shortDescription}
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
}
