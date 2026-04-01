"use client";

import { CLIENTS } from "@/lib/clients-data";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function ClientsMarquee() {
  // Duplicate clients array for seamless loop
  const duplicated = [...CLIENTS, ...CLIENTS];

  return (
    <section className="border-y border-white/[0.03] bg-surface py-14 md:py-18">
      <SectionLabel text="TRUSTED BY" />

      <div className="marquee-mask mt-8 overflow-hidden">
        <div className="flex hover:[animation-play-state:paused] animate-marquee w-max">
          {duplicated.map((client, index) => (
            <span key={`${client}-${index}`} className="flex items-center">
              <span className="whitespace-nowrap text-sm tracking-wide text-foreground/40">
                {client}
              </span>
              <span className="mx-5 text-xs text-gold/50">&middot;</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
