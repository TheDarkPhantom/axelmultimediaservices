import Link from "next/link";
import { FadeUp } from "@/components/shared/FadeUp";

export function GearRentalCTA() {
  return (
    <section className="relative overflow-hidden border-y border-gold/20 py-20 md:py-24">
      {/* Atmospheric background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.04] via-black to-gold/[0.02]" />
      {/* Decorative gold lines */}
      <div className="absolute left-0 top-1/2 h-px w-1/4 -translate-y-1/2 bg-gradient-to-r from-transparent to-gold/20" />
      <div className="absolute right-0 top-1/2 h-px w-1/4 -translate-y-1/2 bg-gradient-to-l from-transparent to-gold/20" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <FadeUp>
          <h2 className="font-heading text-3xl text-foreground md:text-5xl">
            Need Equipment for Your Next Production?
          </h2>
          <p className="mt-5 text-lg text-foreground/50">
            All gear is available for rent with or without an operator. Tell us
            what you need and we&apos;ll put together a package.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block rounded-sm bg-gold px-10 py-3.5 text-sm font-semibold uppercase tracking-wider text-black transition-all hover:bg-gold-light hover:shadow-[0_4px_20px_rgba(201,168,76,0.3)]"
          >
            Inquire About Rates
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
