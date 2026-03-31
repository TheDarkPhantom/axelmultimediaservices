"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FadeUp } from "@/components/shared/FadeUp";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      {/* Background video with parallax */}
      <motion.video
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        style={{ y }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />

      {/* Centered content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="max-w-4xl px-6">
          <FadeUp delay={0}>
            <SectionLabel text="ILOILO'S PREMIER MEDIA PRODUCTION COMPANY" />
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="mt-6 font-heading text-4xl font-light text-foreground sm:text-5xl md:text-7xl lg:text-8xl">
              We Don&apos;t Just Capture the Moment&nbsp;&mdash; We Broadcast
              It.
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-base text-foreground/60 md:text-xl">
              Live streaming, drone coverage, and cinematic video production for
              events that demand more than ordinary.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-sm bg-gold px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gold-light"
              >
                Get a Quote
              </Link>
              <Link
                href="/portfolio"
                className="rounded-sm border border-gold px-6 py-3 text-sm font-medium text-gold transition-colors hover:bg-gold/10"
              >
                View Our Work
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <ChevronDown className="h-6 w-6 animate-bounce text-foreground/40" />
      </div>
    </section>
  );
}
