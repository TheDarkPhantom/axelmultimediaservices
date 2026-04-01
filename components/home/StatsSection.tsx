"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { TRUST_STATS } from "@/lib/constants";
import { FadeUp } from "@/components/shared/FadeUp";

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-heading text-5xl font-semibold text-gold md:text-6xl">
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-28">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface/50 via-transparent to-surface/50" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {TRUST_STATS.map((stat, index) => (
            <FadeUp key={stat.label} delay={index * 0.12}>
              <div className="relative border-t-2 border-gold/60 pt-6">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-silver">
                  {stat.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
