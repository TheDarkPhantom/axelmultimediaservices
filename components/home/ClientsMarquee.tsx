"use client";

import { CLIENTS } from "@/lib/clients-data";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { GoldDivider } from "@/components/shared/GoldDivider";

export function ClientsMarquee() {
  // Duplicate clients array for seamless loop
  const duplicated = [...CLIENTS, ...CLIENTS];

  return (
    <section className="bg-surface py-16 md:py-20">
      <SectionLabel text="TRUSTED BY" />
      <GoldDivider className="my-6" />

      <div className="marquee-mask mt-10 overflow-hidden">
        <div className="flex hover:[animation-play-state:paused] animate-marquee w-max">
          {duplicated.map((client, index) => (
            <span key={`${client}-${index}`} className="flex items-center">
              <span className="whitespace-nowrap text-sm tracking-wide text-foreground/50">
                {client}
              </span>
              <span className="mx-4 text-gold">&middot;</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
